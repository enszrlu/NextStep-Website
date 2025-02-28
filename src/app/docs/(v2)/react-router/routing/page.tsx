import { Metadata } from 'next';
import Routing from '@/components/docs/Routing';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React Router Routing During Tours - NextStepjs',
  description:
    'Learn how to implement routing during tours in your React Router application. This guide covers navigation adapters and creating multi-page tours.',
  keywords: [
    ...metaKeywords,
    'react router routing during tours',
    'react router multi-page tours',
    'react router navigation adapter',
    'react router page transitions',
    'react router tour navigation',
    'react router cross-page tours',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/routing',
  },
};

export default function ReactRouterRoutingPage() {
  return <Routing framework="react router" />;
}
