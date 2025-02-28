import { Metadata } from 'next';
import Routing from '@/components/docs/Routing';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'Next.js Routing During Tours - NextStepjs',
  description:
    'Learn how to implement routing during tours in your Next.js application. This guide covers navigation adapters and creating multi-page tours.',
  keywords: [
    ...metaKeywords,
    'nextjs routing during tours',
    'nextjs multi-page tours',
    'nextjs navigation adapter',
    'nextjs page transitions',
    'nextjs tour navigation',
    'nextjs cross-page tours',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/routing',
  },
};

export default function NextjsRoutingPage() {
  return <Routing framework="next.js" />;
}
