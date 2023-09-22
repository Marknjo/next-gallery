'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  async function searchHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSearching(true);

    if (search) router.push(`/results/${search}`);
    setIsSearching(false);
    setSearch('');
    inputRef.current!.focus();
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
        value={isSearching ? `Searching ${search}` : search}
        onChange={(e) => setSearch(e.target.value.trim())}
        className='bg-white p-2 px-3 w-[260px] sm:w-80 text-xl rounded-xl text-black'
      />
    </form>
  );
}
