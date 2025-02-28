import { Metadata } from 'next';
import TourSteps from '@/components/docs/TourSteps';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Next.js Tour Steps - NextStepjs',
  description:
    'Learn how to create tour steps for your Next.js application. This guide covers step configuration, targeting elements, and creating interactive tours in your Next.js projects.',
  keywords: [
    ...metaKeywords,
    'nextjs tour steps',
    'nextjs onboarding steps',
    'nextjs product tour configuration',
    'nextjs interactive tutorials',
    'nextjs step configuration',
    'nextjs tour targeting',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/tour-steps',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/nextjs/tour-steps' },
};

export default function NextjsTourStepsPage() {
  return <TourSteps framework="next.js" />;
}
