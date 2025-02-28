import { Metadata } from 'next';
import Animations from '@/components/docs/Animations';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Animations - NextStepjs',
  description:
    'Learn how to customize animations in your React onboarding tours with NextStepjs. Control transition timing, easing, and create custom animated cards using Framer Motion.',
  keywords: [
    ...metaKeywords,
    'react tour animations',
    'react onboarding transitions',
    'react framer motion',
    'react custom animations',
    'react animated cards',
    'react smooth transitions',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/animations',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react/animations' },
};

export default function ReactAnimationsPage() {
  return <Animations framework="react" />;
}
