import Link from 'next/link';

interface IProps {
  topic: string;
  page: string | undefined;
  nextPage: string | null;
  prevPage: string | null;
}

export default function Footer({ topic, page, nextPage, prevPage }: IProps) {
  if (!nextPage && !prevPage) return null;

  const pageCounts: number[] = [];

  if (nextPage && prevPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageCounts.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      className={!prevPage ? 'mx-auto' : ''}
      href={`/results/${topic}/${nextPage}`}>
      {!prevPage ? 'more' : null} &gt;&gt;&gt;
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <>
      <Link
        className={!nextPage ? 'mx-auto' : ''}
        href={`/results/${topic}/${prevPage}`}>
        &lt;&lt;&lt; {!nextPage ? 'back' : null}
      </Link>

      {pageCounts.map((num, i) => {
        return page && num === parseInt(page) ? (
          <span key={`${num}-${i}`}>{num}</span>
        ) : (
          <Link
            key={num}
            className='underline'
            href={`/results/${topic}/${num}`}>
            {num}
          </Link>
        );
      })}
    </>
  ) : null;

  return (
    <footer className='flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto'>
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
}
