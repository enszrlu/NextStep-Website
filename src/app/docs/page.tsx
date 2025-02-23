import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs. Learn how to implement user onboarding, interactive tutorials, and product tours in your Next.js and React applications.',
  alternates: {
    canonical: 'https://nextstepjs.com/docs',
  },
};

export default function DocsPage() {
  redirect('/docs/latest/nextjs/get-started');
}
