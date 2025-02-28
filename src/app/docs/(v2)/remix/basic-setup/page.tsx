import { Metadata } from 'next';
import BasicSetup from '@/components/docs/BasicSetup';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';
export const metadata: Metadata = {
  title: 'Remix Basic Setup - NextStepjs',
  description:
    'Learn how to set up NextStepjs in your Remix application. This guide covers integration with Remix, navigation adapters, Vite configuration, and best practices for implementing onboarding experiences in Remix applications.',
  keywords: [
    ...metaKeywords,
    'remix basic setup',
    'remix onboarding setup',
    'remix product tour',
    'remix navigation adapter',
    'remix onboarding implementation',
    'vite remix configuration',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/basic-setup',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix/basic-setup' },
};

export default function RemixBasicSetupPage() {
  return <BasicSetup framework="remix" />;
}
