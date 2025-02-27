import Installation from '@/components/docs/Installation';
import { metaKeywords } from '@/app/layout';
import { Metadata } from 'next';

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
};

export default function BasicSetupPage() {
  return <Installation framework="nextjs" />;
}
