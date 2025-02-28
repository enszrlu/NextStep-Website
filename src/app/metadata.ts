import { AppleWebApp } from 'next/dist/lib/metadata/types/extra-types';
import { Icons } from 'next/dist/lib/metadata/types/metadata-types';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

export const openGraph: OpenGraph = {
  images: [
    {
      url: 'https://nextstepjs.com/ogThumbnail.png',
      width: 1200,
      height: 630,
      alt: 'NextStep - Lightweight Next.js / React Onboarding Library',
    },
  ],
  type: 'website',
  siteName: 'NextStep',
  title: 'NextStep - Lightweight Next.js / React Onboarding Library',
  description:
    'Easily create user friendly onboarding experiences with our lightweight onboarding library for Next.js / React. Step by step guides, product tours, and interactive walkthroughs for seemless user flows.',
  url: 'https://nextstepjs.com',
  locale: 'en_US',
};

export const twitter: Twitter = {
  images: 'https://nextstepjs.com/xThumbnail.png',
  site: '@AlexZDevs',
  creator: '@AlexZDevs',
  title: 'NextStep - Next.js / React Onboarding Library',
  description:
    'Easily create user friendly onboarding experiences with our lightweight onboarding library for Next.js / React. Step by step guides, product tours, and interactive walkthroughs for seemless user flows.',
  card: 'summary_large_image',
};

export const appleWebApp: AppleWebApp = {
  title: 'NextStep - Lightweight Next.js / React Onboarding Library',
  startupImage: 'https://nextstepjs.com/ogThumbnail.png',
};
