import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='bg-black'>
      <nav>
        <h1>
          <Link href='/'>Next Gallery</Link>
        </h1>
      </nav>
    </header>
  );
}
