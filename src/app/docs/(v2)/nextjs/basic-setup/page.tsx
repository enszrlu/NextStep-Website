import { Metadata } from 'next';
import BasicSetup from '@/components/docs/BasicSetup';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Next.js Basic Setup - NextStepjs',
  description:
    'Learn how to set up NextStepjs in your Next.js application. This guide covers both App Router and Pages Router configurations, troubleshooting common issues, and best practices for implementation.',
  keywords: [
    ...metaKeywords,
    'nextjs basic setup',
    'nextjs onboarding setup',
    'nextjs product tour configuration',
    'nextjs app router setup',
    'nextjs pages router setup',
    'nextjs onboarding implementation',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/basic-setup',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/nextjs/basic-setup' },
};

export default function NextjsBasicSetupPage() {
  return <BasicSetup framework="next.js" />;
}
