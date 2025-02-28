import { Metadata } from 'next';
import Styling from '@/components/docs/Styling';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Remix Styling and Customization - NextStepjs',
  description:
    'Learn how to customize the appearance of your Remix onboarding tours with NextStepjs. Create custom card components, change overlay colors, and more to match your application design.',
  keywords: [
    ...metaKeywords,
    'remix custom tour cards',
    'remix onboarding styling',
    'remix tour customization',
    'remix tour overlay',
    'remix custom ui',
    'remix shadcn tour',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/styling',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix/styling' },
};

export default function RemixStylingPage() {
  return <Styling framework="remix" />;
}
