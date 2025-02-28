import { Metadata } from 'next';
import Installation from '@/components/docs/Installation';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React Router Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs for React Router. Learn how to implement user onboarding, interactive tutorials, and product tours in your React Router applications.',
  keywords: [
    ...metaKeywords,
    'react router onboarding documentation',
    'react router product tours',
    'react router interactive tutorials',
    'react router user guides',
    'react router onboarding component',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router',
  },
};

export default function BasicSetupPage() {
  return <Installation framework="react router" />;
}
