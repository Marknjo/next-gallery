import Gallery from '@/src/components/Gallery';

interface IProps {
  params: {
    searchParams: (string | undefined)[];
  };
}

export function generateMetadata({ params: { searchParams } }: IProps) {
  const topic = searchParams?.[0] ?? 'curated';
  const page = searchParams?.[1] ?? '1';

  return {
    title: `Results for ${topic} - Page ${page}`,
  };
}

export default function ResultsPage({ params: { searchParams } }: IProps) {
  const topic = searchParams?.[0] ?? 'curated';
  const page = searchParams?.[1] ?? '1';

  return <Gallery topic={topic} page={page} />;
}
