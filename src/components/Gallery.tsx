import { ReactNode } from 'react';
import env from '../lib/env';
import fetchImages from '../lib/fetchImages';

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <section className='px-2 my-3 grid gap-2 grid-cols-gallery'>
      {children}
    </section>
  );
}

export default async function Gallery() {
  const url = `${env.PEXELS_API_URL}/v1/curated `;
  const galleryData = await fetchImages(url);

  if (!galleryData) {
    return (
      <Wrapper>
        <h2 className='m-4 text-2xl font-bold'>No Items in the gallery ⚠️</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {galleryData.photos.map((photo) => (
        <div key={photo.id} className='h-64 bg-gray-200 rounded-xl'></div>
      ))}
    </Wrapper>
  );
}
