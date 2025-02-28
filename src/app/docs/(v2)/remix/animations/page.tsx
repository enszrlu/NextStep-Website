import { Metadata } from 'next';
import Animations from '@/components/docs/Animations';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Remix Animations - NextStepjs',
  description:
    'Learn how to customize animations in your Remix onboarding tours with NextStepjs. Control transition timing, easing, and create custom animated cards using Framer Motion.',
  keywords: [
    ...metaKeywords,
    'remix tour animations',
    'remix onboarding transitions',
    'remix framer motion',
    'remix custom animations',
    'remix animated cards',
    'remix smooth transitions',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/animations',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix/animations' },
};

export default function RemixAnimationsPage() {
  return <Animations framework="remix" />;
}
