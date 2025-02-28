import { Metadata } from 'next';
import Viewport from '@/components/docs/Viewport';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Remix NextStepViewport - NextStepjs',
  description:
    'Learn how to use NextStepViewport in your Remix application to create tours within scrollable containers and custom viewports.',
  keywords: [
    ...metaKeywords,
    'remix custom viewport',
    'remix scrollable tour',
    'remix tour in container',
    'remix scrollable container tour',
    'remix viewport component',
    'remix tour positioning',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/viewport',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix/viewport' },
};

export default function RemixViewportPage() {
  return <Viewport framework="remix" />;
}
