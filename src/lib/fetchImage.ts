import { Photo, SingleImageSchema } from '../model/Images';
import env from './env';
import { getBase64 } from './getBase64';

export default async function fetchImage(
  id: string
): Promise<Photo | undefined> {
  try {
    const url = `https://api.pexels.com/v1/photos/${id}`;

    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!res.ok) throw new Error('Fetch Images error!\n');

    const photoResult: Photo = await res.json();

    // Parse data with zod
    const parsedData = SingleImageSchema.parse(photoResult);

    if (!parsedData) return undefined;

    // add blurredDataUrl to the parsedData
    const base64Img = await getBase64(parsedData.src.large);

    parsedData.blurredDataUrl = base64Img;

    return parsedData;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
