import { Metadata } from 'next';
import UseNextStepHook from '@/components/docs/UseNextStepHook';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Next.js useNextStep Hook - NextStepjs',
  description:
    'Learn how to use the useNextStep hook to control tours programmatically in your Next.js application. This guide covers all available methods and practical examples.',
  keywords: [
    ...metaKeywords,
    'nextjs useNextStep hook',
    'nextjs onboarding control',
    'nextjs programmatic tours',
    'nextjs tour control',
    'nextjs hook documentation',
    'nextjs tour api',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/useNextStep',
  },
};

export default function NextjsUseNextStepPage() {
  return <UseNextStepHook framework="next.js" />;
}
