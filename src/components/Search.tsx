'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  async function searchHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (search) {
      setSearch('');
      inputRef.current!.focus();
      router.push(`/results/${search.trim()}`);
    }
  }

  return (
    <form
      onSubmit={searchHandler}
      className='flex justify-center md:justify-between'>
      <input
        type='text'
        name='search'
        placeholder='Search'
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-white p-2 px-3 w-[260px] sm:w-80 text-xl rounded-xl text-black'
      />
    </form>
  );
}
