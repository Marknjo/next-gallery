import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
  return (
    <header className='bg-black sticky top-0 z-10'>
      <nav className='max-w-6xl mx-auto flex sm:justify-between sm:flex-column gap-4 items-center p-4 font-bold text-white'>
        <h1 className='text-3xl md:text-2xl text-center whitespace-normal'>
          <Link href='/'>Next Gallery</Link>
        </h1>
        <Search />
      </nav>
    </header>
  );
}
