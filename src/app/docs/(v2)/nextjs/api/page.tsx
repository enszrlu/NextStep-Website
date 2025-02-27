import { Metadata } from 'next';
import Api from '@/components/docs/Api';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Next.js API Reference - NextStepjs',
  description:
    'Comprehensive API documentation for NextStepjs in Next.js applications. Learn about component props, step configuration, hooks, and navigation adapters.',
  keywords: [
    ...metaKeywords,
    'nextjs onboarding api',
    'nextjs tour api',
    'nextstepjs props',
    'nextstepjs hooks',
    'nextstepjs step configuration',
    'nextstepjs navigation adapter',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/api',
  },
};

export default function NextjsApiPage() {
  return <Api framework="next.js" />;
}
