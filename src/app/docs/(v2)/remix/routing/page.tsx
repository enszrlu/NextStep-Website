import { Metadata } from 'next';
import Routing from '@/components/docs/Routing';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Remix Routing During Tours - NextStepjs',
  description:
    'Learn how to implement routing during tours in your Remix application. This guide covers navigation adapters and creating multi-page tours.',
  keywords: [
    ...metaKeywords,
    'remix routing during tours',
    'remix multi-page tours',
    'remix navigation adapter',
    'remix page transitions',
    'remix tour navigation',
    'remix cross-page tours',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/routing',
  },
};

export default function RemixRoutingPage() {
  return <Routing framework="remix" />;
}
