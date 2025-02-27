import { Metadata } from 'next';
import Installation from '@/components/docs/Installation';

export const metadata: Metadata = {
  title: 'Remix Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs for Remix. Learn how to implement user onboarding, interactive tutorials, and product tours in your Remix applications.',
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix',
  },
};

export default function BasicSetupPage() {
  return <Installation framework="remix" />;
}
