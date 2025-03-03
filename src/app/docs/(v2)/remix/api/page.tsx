import { Metadata } from 'next';
import Api from '@/components/docs/Api';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Remix API Reference - NextStepjs',
  description:
    'Comprehensive API documentation for NextStepjs in Remix applications. Learn about component props, step configuration, hooks, and navigation adapters.',
  keywords: [
    ...metaKeywords,
    'remix onboarding api',
    'remix tour api',
    'nextstepjs props',
    'nextstepjs hooks',
    'nextstepjs step configuration',
    'nextstepjs navigation adapter',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/api',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix/api' },
};

export default function RemixApiPage() {
  return <Api framework="remix" />;
}
