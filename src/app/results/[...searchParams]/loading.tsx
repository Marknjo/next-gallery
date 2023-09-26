import { readFile } from 'fs/promises';
import { join } from 'path';
import { getPlaiceholder } from 'plaiceholder';
import placeholder from '@/src/assets/placeholder.jpg';
import { Wrapper } from '@/src/components/Gallery';
import Image from 'next/image';

async function getPlaceholderImg() {
  try {
    const placeHolderImg = join(
      process.cwd(),
      'src',
      'assets',
      'placeholder.jpg'
    );

    const file = await readFile(placeHolderImg);

    const { base64 } = await getPlaiceholder(file);

    return base64;
  } catch (error) {
    console.log(error);
  }
}

export default async function Loading() {
  const placeholderImg = (await getPlaceholderImg()) as string;

  return (
    <Wrapper className='h-[90vh]'>
      <div className='mx-auto w-full min-h-[90vh] relative'>
        <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800'>
          Searching...
        </h2>
        <Image
          src={placeholder}
          blurDataURL={placeholderImg}
          width={100}
          height={100}
          alt='placeholder image'
          className='w-full h-full object-cover'
        />
      </div>
    </Wrapper>
  );
}
