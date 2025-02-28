import { LandingPageWrapper } from '@/components/LandingPageWrapper';
import { appleWebApp, twitter, openGraph } from '../metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextstepjs.com/remix'),
  title: 'NextStepjs - Lightweight Remix Onboarding Library',
  description:
    'Easily create user friendly onboarding experiences with our lightweight onboarding library for Remix. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  keywords: [
    'remix onboarding library',
    'nextstepjs',
    'remix onboarding',
    'remix product tours',
    'remix interactive tutorials',
    'remix user guides',
    'remix onboarding component',
    'remix onboarding wizard',
    'remix onboarding flow',
    'remix onboarding guide',
    'remix onboarding',
    'remix onboarding library',
    'react onboarding',
    'shadcn onboarding',
  ],
  openGraph: {
    ...openGraph,
    url: 'https://nextstepjs.com/remix',
    title: 'NextStepjs - Lightweight Remix Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for Remix. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  },
  twitter: {
    ...twitter,
    title: 'NextStepjs - Lightweight Remix Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for Remix. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  },
  appleWebApp: appleWebApp,
  applicationName: 'NextStep',
  icons: {
    icon: 'https://nextstepjs.com/icon.png',
    shortcut: 'https://nextstepjs.com/icon.png',
    apple: 'https://nextstepjs.com/icon.png',
  },
  alternates: {
    canonical: 'https://nextstepjs.com/remix',
  },
};

export default function RemixPage() {
  return <LandingPageWrapper framework="Remix" />;
}
