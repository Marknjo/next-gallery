import React from 'react';
import { Photo } from '../model/Images';
import Image from 'next/image';

interface IProps {
  photo: Photo;
}

export default function ImgContainer({ photo }: IProps) {
  return (
    <div className='h-64 bg-gray-200 rounded-xl relative overflow-hidden group'>
      <Image
        src={photo.src.large}
        fill={true}
        alt={photo.alt}
        sizes='(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)'
        className='object-cover hover:opacity-75 cursor-pointer'
      />
    </div>
  );
}
