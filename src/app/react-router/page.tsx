import { LandingPageWrapper } from '@/components/LandingPageWrapper';
import { appleWebApp, twitter, openGraph } from '../metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextstepjs.com/react-router'),
  title: 'NextStepjs - Lightweight React Router Onboarding Library',
  description:
    'Easily create user friendly onboarding experiences with our lightweight onboarding library for React Router. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  keywords: [
    'react router onboarding library',
    'nextstepjs',
    'react router onboarding',
    'react router product tours',
    'react router interactive tutorials',
    'react router user guides',
    'react router onboarding component',
    'react router onboarding wizard',
    'react router onboarding flow',
    'react router onboarding guide',
    'react router onboarding',
    'react router onboarding library',
    'react onboarding',
    'shadcn onboarding',
  ],
  openGraph: {
    ...openGraph,
    url: 'https://nextstepjs.com/react-router',
    title: 'NextStepjs - Lightweight React Router Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for React Router. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  },
  twitter: {
    ...twitter,
    title: 'NextStepjs - Lightweight React Router Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for React Router. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  },
  appleWebApp: appleWebApp,
  applicationName: 'NextStep',
  icons: {
    icon: 'https://nextstepjs.com/icon.png',
    shortcut: 'https://nextstepjs.com/icon.png',
    apple: 'https://nextstepjs.com/icon.png',
  },
  alternates: {
    canonical: 'https://nextstepjs.com/react-router',
  },
};

export default function ReactRouterPage() {
  return <LandingPageWrapper framework="React Router" />;
}
