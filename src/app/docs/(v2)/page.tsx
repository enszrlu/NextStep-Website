import Installation from '@/components/docs/Installation';
import { metaKeywords } from '@/app/metaKeywords';
import { Metadata } from 'next';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs. Learn how to implement user onboarding, interactive tutorials, and product tours in your Next.js and React applications.',
  keywords: [
    ...metaKeywords,
    `nextstepjs documentation for react and nextjs`,
    `nextstepjs documentation for react and nextjs`,
    'react router',
    'remix',
    'react',
    'nextjs',
  ],

  alternates: {
    canonical: 'https://nextstepjs.com/docs',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs' },
};

export default function BasicSetupPage() {
  return <Installation framework="nextjs" />;
}
