import { LandingPageWrapper } from '@/components/LandingPageWrapper';
import { appleWebApp, twitter, openGraph } from '../metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextstepjs.com/nextjs'),
  title: 'NextStepjs - Lightweight Next.js Onboarding Library',
  description:
    'Easily create user friendly onboarding experiences with our lightweight onboarding library for Next.js. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  keywords: [
    'next.js onboarding library',
    'nextstepjs',
    'next.js onboarding',
    'next.js product tours',
    'next.js interactive tutorials',
    'next.js user guides',
    'next.js onboarding component',
    'next.js onboarding wizard',
    'next.js onboarding flow',
    'next.js onboarding guide',
    'next.js onboarding',
    'next.js onboarding library',
    'react onboarding',
    'shadcn onboarding',
  ],
  openGraph: {
    ...openGraph,
    url: 'https://nextstepjs.com/nextjs',
    title: 'NextStepjs - Lightweight Next.js Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for Next.js. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  },
  twitter: {
    ...twitter,
    title: 'NextStepjs - Lightweight Next.js Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for Next.js. Step by step guides, product tours, and interactive walkthroughs for seamless user flows.',
  },
  appleWebApp: appleWebApp,
  applicationName: 'NextStep',
  icons: {
    icon: 'https://nextstepjs.com/icon.png',
    shortcut: 'https://nextstepjs.com/icon.png',
    apple: 'https://nextstepjs.com/icon.png',
  },
  alternates: {
    canonical: 'https://nextstepjs.com/nextjs',
  },
};

export default function Home() {
  return <LandingPageWrapper framework="Next.js" />;
}
