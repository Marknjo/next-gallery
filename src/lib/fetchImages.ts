import { ImagesResults, ImagesSchemaWithPhotos } from '../model/Images';
import env from './env';

export default async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!res.ok) throw new Error('Fetch Images error!\n');

    const imagesResults: ImagesResults = await res.json();

    // Parse data with zod
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);

    if (parsedData.total_results === 0) return undefined;

    return parsedData;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
