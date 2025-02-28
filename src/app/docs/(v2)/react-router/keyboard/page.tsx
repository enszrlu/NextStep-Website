import { Metadata } from 'next';
import Keyboard from '@/components/docs/Keyboard';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Router Keyboard Navigation - NextStepjs',
  description:
    'Learn how to use keyboard navigation in NextStepjs for your React Router application. A unique feature that allows users to navigate tours with keyboard shortcuts and can be disabled for specific steps.',
  keywords: [
    ...metaKeywords,
    'react router keyboard navigation',
    'react router tour keyboard shortcuts',
    'react router accessibility',
    'react router disable keyboard navigation',
    'react router arrow key navigation',
    'react router onboarding keyboard',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/keyboard',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react-router/keyboard' },
};

export default function ReactRouterKeyboardPage() {
  return <Keyboard framework="react router" />;
}
