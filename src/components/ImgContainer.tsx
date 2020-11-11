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
        className='object-cover hover:opacity-75 cursor-pointer'
      />
    </div>
  );
}
