import { Metadata } from 'next';
import Viewport from '@/components/docs/Viewport';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React NextStepViewport - NextStepjs',
  description:
    'Learn how to use NextStepViewport in your React application to create tours within scrollable containers and custom viewports.',
  keywords: [
    ...metaKeywords,
    'react custom viewport',
    'react scrollable tour',
    'react tour in container',
    'react scrollable container tour',
    'react viewport component',
    'react tour positioning',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/viewport',
  },
};

export default function ReactViewportPage() {
  return <Viewport framework="react" />;
}
