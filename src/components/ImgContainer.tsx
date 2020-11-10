import React from 'react';
import { Photo } from '../model/Images';
import Image from 'next/image';

interface IProps {
  photo: Photo;
}

export default function ImgContainer({ photo }: IProps) {
  return (
    <div className='h-64 bg-gray-200 rounded-xl'>
      <Image src={photo.src.large} width={250} height={250} alt={photo.alt} />
    </div>
  );
}
