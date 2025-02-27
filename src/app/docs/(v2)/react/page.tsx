import { Metadata } from 'next';
import Installation from '@/components/docs/Installation';

export const metadata: Metadata = {
  title: 'React Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs for React. Learn how to implement user onboarding, interactive tutorials, and product tours in your React applications.',
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react',
  },
};

export default function BasicSetupPage() {
  return <Installation framework="react" />;
}
