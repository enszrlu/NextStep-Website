import DocsPage from '@/components/DocsPage';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - NextStep.js',
  description:
    'Comprehensive documentation for NextStep.js. Learn how to implement user onboarding, create interactive tutorials, and build product tours in your Next.js and React applications.',
  alternates: {
    canonical: 'https://nextstepjs.com/docs',
  },
};

export default function Docs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DocsPage />
    </Suspense>
  );
}
