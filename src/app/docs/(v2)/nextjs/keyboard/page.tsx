import { Metadata } from 'next';
import Keyboard from '@/components/docs/Keyboard';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Next.js Keyboard Navigation - NextStepjs',
  description:
    'Learn how to use keyboard navigation in NextStepjs for your Next.js application. A unique feature that allows users to navigate tours with keyboard shortcuts and can be disabled for specific steps.',
  keywords: [
    ...metaKeywords,
    'nextjs keyboard navigation',
    'nextjs tour keyboard shortcuts',
    'nextjs accessibility',
    'nextjs disable keyboard navigation',
    'nextjs arrow key navigation',
    'nextjs onboarding keyboard',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/keyboard',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/nextjs/keyboard' },
};

export default function NextjsKeyboardPage() {
  return <Keyboard framework="next.js" />;
}
