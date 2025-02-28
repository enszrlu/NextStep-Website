import { Metadata } from 'next';
import Styling from '@/components/docs/Styling';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Styling and Customization - NextStepjs',
  description:
    'Learn how to customize the appearance of your React onboarding tours with NextStepjs. Create custom card components, change overlay colors, and more to match your application design.',
  keywords: [
    ...metaKeywords,
    'react custom tour cards',
    'react onboarding styling',
    'react tour customization',
    'react tour overlay',
    'react custom ui',
    'react shadcn tour',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/styling',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react/styling' },
};

export default function ReactStylingPage() {
  return <Styling framework="react" />;
}
