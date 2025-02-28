import { Metadata } from 'next';
import Installation from '@/components/docs/Installation';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Next.js Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs for Next.js. Learn how to implement user onboarding, interactive tutorials, and product tours in your Next.js applications.',
  keywords: [
    ...metaKeywords,
    'nextjs onboarding documentation',
    'nextjs product tours',
    'nextjs interactive tutorials',
    'nextjs user guides',
    'nextjs onboarding component',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/nextjs' },
};

export default function BasicSetupPage() {
  return <Installation framework="next.js" />;
}
