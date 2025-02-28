import { Metadata } from 'next';
import Viewport from '@/components/docs/Viewport';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React Router NextStepViewport - NextStepjs',
  description:
    'Learn how to use NextStepViewport in your React Router application to create tours within scrollable containers and custom viewports.',
  keywords: [
    ...metaKeywords,
    'react router custom viewport',
    'react router scrollable tour',
    'react router tour in container',
    'react router scrollable container tour',
    'react router viewport component',
    'react router tour positioning',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/viewport',
  },
};

export default function ReactRouterViewportPage() {
  return <Viewport framework="react router" />;
}
