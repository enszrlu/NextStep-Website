import React from 'react';
import FaqSection from '@/components/FaqSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - NextStepjs',
  description:
    'Frequently asked questions about NextStepjs, the lightweight onboarding library for Next.js and React applications. Find answers to common questions about implementation, features, and usage.',
  alternates: {
    canonical: 'https://nextstepjs.com/faq',
  },
};

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4">
      <main className="container mx-auto py-12">
        <h1 className="text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <FaqSection />
      </main>
    </div>
  );
};

export default FaqPage;
