import ImgContainer from '@/src/components/ImgContainer';
import fetchImage from '@/src/lib/fetchImage';
import { notFound } from 'next/navigation';

export default async function Photo({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = await fetchImage(id);

  if (!photo) {
    notFound();
  }

  return (
    <section className={`my-4 sm:my-8 grid grid-cols-gallery`}>
      <ImgContainer photo={photo} useTinyWidth />
    </section>
  );
}
