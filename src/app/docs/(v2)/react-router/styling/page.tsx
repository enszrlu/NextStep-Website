import { Metadata } from 'next';
import Styling from '@/components/docs/Styling';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Router Styling and Customization - NextStepjs',
  description:
    'Learn how to customize the appearance of your React Router onboarding tours with NextStepjs. Create custom card components, change overlay colors, and more to match your application design.',
  keywords: [
    ...metaKeywords,
    'react router custom tour cards',
    'react router onboarding styling',
    'react router tour customization',
    'react router tour overlay',
    'react router custom ui',
    'react router shadcn tour',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/styling',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react-router/styling' },
};

export default function ReactRouterStylingPage() {
  return <Styling framework="react router" />;
}
