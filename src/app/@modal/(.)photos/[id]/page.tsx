import ImgContainer from '@/src/components/ImgContainer';
import Modal from '@/src/components/Modal';
import fetchImage from '@/src/lib/fetchImage';
import { notFound } from 'next/navigation';

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = await fetchImage(id);

  if (!photo) {
    notFound();
  }

  return (
    <Modal>
      <section className={`my-4 mx-auto sm:my-8 grid grid-cols-gallery`}>
        <ImgContainer photo={photo} useTinyWidth />
      </section>
    </Modal>
  );
}
