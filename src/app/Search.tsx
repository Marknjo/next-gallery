'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  async function searchHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push(`/results/${search}`);
    setSearch('');
  }

  return (
    <form
      onClick={searchHandler}
      className='flex justify-center md:justify-between'>
      <input
        type='text'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black'
      />
    </form>
  );
}
