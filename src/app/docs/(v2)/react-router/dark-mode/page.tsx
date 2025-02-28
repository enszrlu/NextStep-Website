import { Metadata } from 'next';
import DarkMode from '@/components/docs/DarkMode';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Router Dark Mode Support - NextStepjs',
  description:
    "Learn how to implement dark mode in your React Router onboarding tours with NextStepjs. Create custom card components that adapt to your application's theme system.",
  keywords: [
    ...metaKeywords,
    'react router dark mode tour',
    'react router onboarding dark theme',
    'react router tour theme toggle',
    'react router custom dark mode cards',
    'react router shadcn dark mode',
    'react router theme provider',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/dark-mode',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react-router/dark-mode' },
};

export default function ReactRouterDarkModePage() {
  return <DarkMode framework="react router" />;
}
