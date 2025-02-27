import { Metadata } from 'next';
import Installation from '@/components/docs/Installation';

export const metadata: Metadata = {
  title: 'Next.js Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs for Next.js. Learn how to implement user onboarding, interactive tutorials, and product tours in your Next.js applications.',
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs',
  },
};

export default function BasicSetupPage() {
  return <Installation framework="nextjs" />;
}
