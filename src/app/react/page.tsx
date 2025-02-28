import { LandingPageWrapper } from '@/components/LandingPageWrapper';
import { appleWebApp, twitter, openGraph } from '../metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextstepjs.com/react'),
  title: 'NextStepjs - Lightweight React Onboarding Library',
  description:
    'Easily create user friendly onboarding experiences with our lightweight onboarding library for React. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  keywords: [
    'react onboarding library',
    'nextstepjs',
    'react onboarding',
    'react product tours',
    'react interactive tutorials',
    'react user guides',
    'react onboarding component',
    'react onboarding wizard',
    'react onboarding flow',
    'react onboarding guide',
    'react onboarding',
    'react onboarding library',
    'react onboarding',
    'shadcn onboarding',
  ],
  openGraph: {
    ...openGraph,
    url: 'https://nextstepjs.com/react',
    title: 'NextStepjs - Lightweight React Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for React. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  },
  twitter: {
    ...twitter,
    title: 'NextStepjs - Lightweight React Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for React. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  },
  appleWebApp: appleWebApp,
  applicationName: 'NextStep',
  icons: {
    icon: 'https://nextstepjs.com/icon.png',
    shortcut: 'https://nextstepjs.com/icon.png',
    apple: 'https://nextstepjs.com/icon.png',
  },
  alternates: {
    canonical: 'https://nextstepjs.com/react',
  },
};

export default function Home() {
  return <LandingPageWrapper framework="React" />;
}
