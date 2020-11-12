import { getPlaiceholder } from 'plaiceholder';
import { ImagesResults, Photo } from '../model/Images';

async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}

export async function addBlurredDataUrls(images: ImagesResults) {
  // make all requests at once instead of awaiting each one - avoids a waterfall
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );

  // resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  // add blurredDataUrl to the image
  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Results[i];

    return photo;
  });

  return photosWithBlur;
}
