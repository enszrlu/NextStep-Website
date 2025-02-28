import { Metadata } from 'next';
import DarkMode from '@/components/docs/DarkMode';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Remix Dark Mode Support - NextStepjs',
  description:
    "Learn how to implement dark mode in your Remix onboarding tours with NextStepjs. Create custom card components that adapt to your application's theme system.",
  keywords: [
    ...metaKeywords,
    'remix dark mode tour',
    'remix onboarding dark theme',
    'remix tour theme toggle',
    'remix custom dark mode cards',
    'remix shadcn dark mode',
    'remix theme provider',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/dark-mode',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix/dark-mode' },
};

export default function RemixDarkModePage() {
  return <DarkMode framework="remix" />;
}
