import React from 'react';
import { Photo } from '../model/Images';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  photo: Photo;
  className?: string;
  useTinyWidth?: boolean;
}

export default function ImgContainer({
  photo,
  className,
  useTinyWidth = false,
}: IProps) {
  const imgWidth = useTinyWidth
    ? Number(photo.src.large.split('&w=').at(-1)) *
      (photo.height > photo.width ? 0.5 : 1)
    : 250;
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(imgWidth * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <article
      className={`justify-self-center ${className ? className : 'w-[250px]'}`}
      style={{
        ...(useTinyWidth
          ? { width: `${imgWidth}px`, height: 'auto' }
          : { gridRow: `span ${photoSpans}` }),
      }}>
      <Link href={`/photos/${photo.id}`} className='grid place-content-center'>
        <div className='rounded-xl overflow-hidden group'>
          <Image
            src={photo.src.large}
            height={galleryHeight}
            width={imgWidth}
            alt={photo.alt}
            sizes={`${imgWidth}px`}
            className='hover:opacity-75 cursor-pointer  '
            placeholder='blur'
            blurDataURL={photo.blurredDataUrl}
            priority={false}
            style={{ width: imgWidth, height: galleryHeight }}
          />
        </div>
      </Link>
    </article>
  );
}
