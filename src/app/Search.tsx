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
    <form onClick={searchHandler}>
      <input
        type='text'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
