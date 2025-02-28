import { Metadata } from 'next';
import TourSteps from '@/components/docs/TourSteps';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'Remix Tour Steps - NextStepjs',
  description:
    'Learn how to create tour steps for your Remix application. This guide covers step configuration, targeting elements, and creating interactive tours in your Remix projects.',
  keywords: [
    ...metaKeywords,
    'remix tour steps',
    'remix onboarding steps',
    'remix product tour configuration',
    'remix interactive tutorials',
    'remix step configuration',
    'remix tour targeting',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/tour-steps',
  },
};

export default function RemixTourStepsPage() {
  return <TourSteps framework="remix" />;
}
