import Gallery from '@/src/components/Gallery';

interface IProps {
  params: {
    term: string;
  };
}

export function generateMetadata({ params: { term } }: IProps) {
  return {
    title: `Results for ${term}`,
  };
}

export default function ResultsPage({ params: { term } }: IProps) {
  return <Gallery topic={term} />;
}
