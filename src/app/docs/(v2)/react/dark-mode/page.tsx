import { Metadata } from 'next';
import DarkMode from '@/components/docs/DarkMode';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Dark Mode Support - NextStepjs',
  description:
    "Learn how to implement dark mode in your React onboarding tours with NextStepjs. Create custom card components that adapt to your application's theme system.",
  keywords: [
    ...metaKeywords,
    'react dark mode tour',
    'react onboarding dark theme',
    'react tour theme toggle',
    'react custom dark mode cards',
    'react shadcn dark mode',
    'react theme provider',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/dark-mode',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react/dark-mode' },
};

export default function ReactDarkModePage() {
  return <DarkMode framework="react" />;
}
