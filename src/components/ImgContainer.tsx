import React from 'react';
import { Photo } from '../model/Images';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  photo: Photo;
}

export default function ImgContainer({ photo }: IProps) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <article
      className='w-[250px] justify-self-center'
      style={{
        gridRow: `span ${photoSpans}`,
      }}>
      <Link
        href={photo.url}
        target='_blank'
        referrerPolicy='origin'
        className='grid place-content-center'>
        <div className='rounded-xl overflow-hidden group'>
          <Image
            src={photo.src.large}
            height={galleryHeight}
            width={250}
            alt={photo.alt}
            sizes='250px'
            className='hover:opacity-75 cursor-pointer'
            placeholder='blur'
            blurDataURL={photo.blurredDataUrl}
            priority={false}
            style={{ width: 250, height: galleryHeight }}
          />
        </div>
      </Link>
    </article>
  );
}
