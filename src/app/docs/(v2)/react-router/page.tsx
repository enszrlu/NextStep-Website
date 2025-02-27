import { Metadata } from 'next';
import Installation from '@/components/docs/Installation';

export const metadata: Metadata = {
  title: 'React Router Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs for React Router. Learn how to implement user onboarding, interactive tutorials, and product tours in your React Router applications.',
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router',
  },
};

export default function BasicSetupPage() {
  return <Installation framework="react-router" />;
}
