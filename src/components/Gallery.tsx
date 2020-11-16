import { ReactNode } from 'react';
import env from '../lib/env';
import fetchImages from '../lib/fetchImages';
import ImgContainer from './ImgContainer';
import { addBlurredDataUrls } from '../lib/getBase64';

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <section className='py-1 my-3 grid grid-cols-gallery auto-rows-[10px]'>
      {children}
    </section>
  );
}

interface IProps {
  topic?: string;
}

export default async function Gallery({ topic }: IProps) {
  let url = `${env.PEXELS_API_URL}/v1/curated`;
  const searchUrl = topic && `${env.PEXELS_API_URL}/v1/search?query=${topic}`;
  url = searchUrl || url;
  const galleryData = await fetchImages(url);

  if (!galleryData) {
    return (
      <Wrapper>
        <h2 className='m-4 text-2xl font-bold'>No Items in the gallery ⚠️</h2>
      </Wrapper>
    );
  }

  const photos = await addBlurredDataUrls(galleryData);

  return (
    <Wrapper>
      {photos.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </Wrapper>
  );
}
