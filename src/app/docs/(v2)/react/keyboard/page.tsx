import { Metadata } from 'next';
import Keyboard from '@/components/docs/Keyboard';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'React Keyboard Navigation - NextStepjs',
  description:
    'Learn how to use keyboard navigation in NextStepjs for your React application. A unique feature that allows users to navigate tours with keyboard shortcuts and can be disabled for specific steps.',
  keywords: [
    ...metaKeywords,
    'react keyboard navigation',
    'react tour keyboard shortcuts',
    'react accessibility',
    'react disable keyboard navigation',
    'react arrow key navigation',
    'react onboarding keyboard',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/keyboard',
  },
};

export default function ReactKeyboardPage() {
  return <Keyboard framework="react" />;
}
