import { Metadata } from 'next';
import DarkMode from '@/components/docs/DarkMode';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Next.js Dark Mode Support - NextStepjs',
  description:
    "Learn how to implement dark mode in your Next.js onboarding tours with NextStepjs. Create custom card components that adapt to your application's theme system.",
  keywords: [
    ...metaKeywords,
    'nextjs dark mode tour',
    'nextjs onboarding dark theme',
    'nextjs tour theme toggle',
    'nextjs custom dark mode cards',
    'nextjs shadcn dark mode',
    'nextjs theme provider',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/dark-mode',
  },
};

export default function NextjsDarkModePage() {
  return <DarkMode framework="next.js" />;
}
