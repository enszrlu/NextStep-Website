import { Metadata } from 'next';
import Routing from '@/components/docs/Routing';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Routing During Tours - NextStepjs',
  description:
    'Learn how to implement routing during tours in your React application. This guide covers navigation adapters and creating multi-page tours.',
  keywords: [
    ...metaKeywords,
    'react routing during tours',
    'react multi-page tours',
    'react navigation adapter',
    'react page transitions',
    'react tour navigation',
    'react cross-page tours',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/routing',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react/routing' },
};

export default function ReactRoutingPage() {
  return <Routing framework="react" />;
}
