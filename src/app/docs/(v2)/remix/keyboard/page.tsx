import { Metadata } from 'next';
import Keyboard from '@/components/docs/Keyboard';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'Remix Keyboard Navigation - NextStepjs',
  description:
    'Learn how to use keyboard navigation in NextStepjs for your Remix application. A unique feature that allows users to navigate tours with keyboard shortcuts and can be disabled for specific steps.',
  keywords: [
    ...metaKeywords,
    'remix keyboard navigation',
    'remix tour keyboard shortcuts',
    'remix accessibility',
    'remix disable keyboard navigation',
    'remix arrow key navigation',
    'remix onboarding keyboard',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/keyboard',
  },
};

export default function RemixKeyboardPage() {
  return <Keyboard framework="remix" />;
}
