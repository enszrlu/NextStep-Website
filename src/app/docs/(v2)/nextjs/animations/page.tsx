import { Metadata } from 'next';
import Animations from '@/components/docs/Animations';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Next.js Animations - NextStepjs',
  description:
    'Learn how to customize animations in your Next.js onboarding tours with NextStepjs. Control transition timing, easing, and create custom animated cards using Framer Motion.',
  keywords: [
    ...metaKeywords,
    'nextjs tour animations',
    'nextjs onboarding transitions',
    'nextjs framer motion',
    'nextjs custom animations',
    'nextjs animated cards',
    'nextjs smooth transitions',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/animations',
  },
};

export default function NextjsAnimationsPage() {
  return <Animations framework="next.js" />;
}
