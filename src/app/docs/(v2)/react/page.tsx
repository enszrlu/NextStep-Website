import { Metadata } from 'next';
import Installation from '@/components/docs/Installation';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs for React. Learn how to implement user onboarding, interactive tutorials, and product tours in your React applications.',
  keywords: [
    ...metaKeywords,
    'react onboarding documentation',
    'react product tours',
    'react interactive tutorials',
    'react user guides',
    'react onboarding component',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react' },
};

export default function BasicSetupPage() {
  return <Installation framework="react" />;
}
