import DemoPage from '@/components/DemoPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - NextStep.js',
  description:
    'Try out NextStep.js with our interactive demo. Experience the power of our lightweight onboarding library for Next.js and React applications.',
  alternates: {
    canonical: 'https://nextstepjs.com/demo',
  },
};

const Demo = () => {
  return <DemoPage />;
};

export default Demo;
