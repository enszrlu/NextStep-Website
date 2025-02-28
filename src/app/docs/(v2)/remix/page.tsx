import { Metadata } from 'next';
import Installation from '@/components/docs/Installation';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Remix Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs for Remix. Learn how to implement user onboarding, interactive tutorials, and product tours in your Remix applications.',
  keywords: [
    ...metaKeywords,
    'remix onboarding documentation',
    'remix product tours',
    'remix interactive tutorials',
    'remix user guides',
    'remix onboarding component',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix' },
};

export default function BasicSetupPage() {
  return <Installation framework="remix" />;
}
