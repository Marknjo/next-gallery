import { ReactNode } from 'react';
import env from '../lib/env';
import fetchImages from '../lib/fetchImages';
import ImgContainer from './ImgContainer';
import { addBlurredDataUrls } from '../lib/getBase64';
import getPrevNextPages from '../lib/getPrevNextPages';
import Footer from './Footer';

function Wrapper({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`py-1 my-3 grid grid-cols-gallery auto-rows-[10px] ${
        className ? className : ''
      }`}>
      {children}
    </section>
  );
}

interface IProps {
  topic?: string;
  page?: string;
}

export default async function Gallery({ topic = 'curated', page }: IProps) {
  const url = new URL(env.PEXELS_API_URL);
  url.pathname = '/v1';

  if (topic === 'curated' && page) {
    // browsing beyond home
    url.pathname += '/curated';
    url.searchParams.set('page', page);
  } else if (topic === 'curated') {
    // home - default
    url.pathname += '/curated';
  } else if (!page) {
    // 1st page or search results
    url.pathname += '/search';
    url.searchParams.set('query', topic);
  } else {
    // search results beyond 1st page
    url.pathname += '/search';
    url.searchParams.set('query', topic);
    url.searchParams.set('page', page);
  }

  const galleryData = await fetchImages(url.href);

  if (!galleryData || galleryData.per_page === 0) {
    return (
      <Wrapper className='h-[100%]'>
        <div className='mx-auto'>
          <h2 className='mt-8 py-4 sm:py-8 px-6 sm:px-20 border border-yellow-200 rounded-lg mx-auto flex flex-col items-center'>
            <span className='text-6xl mb-2 block'>⚠️</span>
            <span className='block text-2xl font-bold '>No images found!</span>
          </h2>
        </div>
      </Wrapper>
    );
  }

  const photos = await addBlurredDataUrls(galleryData);

  // calculate pagination
  const { nextPage, prevPage } = getPrevNextPages(galleryData);
  const footerProps = { topic, page, nextPage, prevPage };

  return (
    <>
      <Wrapper>
        {photos.map((photo) => (
          <ImgContainer key={photo.id} photo={photo} />
        ))}
      </Wrapper>

      {/* Pagination */}
      <Footer {...footerProps} />
    </>
  );
}
