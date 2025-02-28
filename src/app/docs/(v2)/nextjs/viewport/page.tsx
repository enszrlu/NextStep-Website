import { Metadata } from 'next';
import Viewport from '@/components/docs/Viewport';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Next.js NextStepViewport - NextStepjs',
  description:
    'Learn how to use NextStepViewport in your Next.js application to create tours within scrollable containers and custom viewports.',
  keywords: [
    ...metaKeywords,
    'nextjs custom viewport',
    'nextjs scrollable tour',
    'nextjs tour in container',
    'nextjs scrollable container tour',
    'nextjs viewport component',
    'nextjs tour positioning',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/viewport',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/nextjs/viewport' },
};

export default function NextjsViewportPage() {
  return <Viewport framework="next.js" />;
}
