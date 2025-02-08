import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { NextStepProvider, NextStep } from 'nextstepjs';

import { useNextAdapter } from 'nextstepjs/adapters/next';
import steps from '@/lib/steps';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import {
  onNextStepStepChange,
  onNextStepComplete,
  onNextStepSkip,
  onNextStepStart,
} from '@/lib/callbacks';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nextstepjs.com'),
  title: 'NextStepjs - Lightweight Next.js / React Onboarding Library',
  description:
    'Easily create user friendly onboarding experiences with our lightweight onboarding library for Next.js / React. Step by step guides, product tours, and interactive walkthroughs for seemless user flows.',
  keywords: [
    'next.js onboarding library',
    'react onboarding',
    'nextstepjs',
    'onboarding wizard',
    'product tour',
    'interactive tutorial',
    'next.js tutorial',
    'next.js product demo',
    'onboarding component',
    'onboarding flow',
    'onboarding guide',
    'React onboarding library',
  ],
  openGraph: {
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
  },
  twitter: {
    images: 'https://nextstepjs.com/xThumbnail.png',
    site: '@AlexZDevs',
    creator: '@AlexZDevs',
    title: 'NextStep - Next.js / React Onboarding Library',
    description:
      'Easily create user friendly onboarding experiences with our lightweight onboarding library for Next.js / React. Step by step guides, product tours, and interactive walkthroughs for seemless user flows.',
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'NextStep - Lightweight Next.js / React Onboarding Library',
    startupImage: 'https://nextstepjs.com/ogThumbnail.png',
  },
  applicationName: 'NextStep',
  icons: {
    icon: 'https://nextstepjs.com/icon.png',
    shortcut: 'https://nextstepjs.com/icon.png',
    apple: 'https://nextstepjs.com/icon.png',
  },
  alternates: {
    canonical: 'https://nextstepjs.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="/stats/script.js"
          data-website-id="6c894b98-daec-4f19-bea8-321b5023644d"
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'NextStepjs',
                title: 'NextStepjs - Lightweight Next.js / React Onboarding Library',
                description:
                  'NextStepjs is a lightweight and open-source onboarding library for Next.js / React applications. It helps developers create step-by-step guides, interactive tutorials, and product tours to enhance user experience seamlessly.',
                url: 'https://nextstepjs.com',
                applicationCategory: 'Developer Tools',
                operatingSystem: 'Web',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
                author: {
                  '@type': 'Organization',
                  name: 'NextStepjs Team',
                  url: 'https://github.com/enszrlu/NextStep',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'NextStepjs Team',
                  url: 'https://github.com/enszrlu/NextStep',
                },
                softwareVersion: '1.2.0',
                programmingLanguage: 'JavaScript',
                datePublished: '2025-01-01',
                license: 'https://opensource.org/licenses/MIT',
                isAccessibleForFree: true,
                keywords: [
                  'NextStepjs',
                  'Next.js onboarding library',
                  'product tours for Next.js',
                  'interactive tutorials',
                  'step-by-step guides',
                  'onboarding wizard',
                  'user onboarding library',
                  'Next.js tools',
                  'web onboarding',
                  'Next.js / React onboarding library',
                  'React onboarding library',
                ],
                screenshot: 'https://nextstepjs.com/images/screenshot.png',
                potentialAction: {
                  '@type': 'InstallAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://nextstepjs.com',
                  },
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'NextStepjs Documentation',
                description:
                  'Official documentation for NextStepjs - the lightweight Next.js / React onboarding library',
                url: 'https://nextstepjs.com/docs',
                publisher: {
                  '@type': 'Organization',
                  name: 'NextStepjs Team',
                  url: 'https://github.com/enszrlu/NextStep',
                },
              },
            ]),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextStepProvider>
          <NextStep
            steps={steps}
            onStart={onNextStepStart}
            onComplete={onNextStepComplete}
            onSkip={onNextStepSkip}
            onStepChange={onNextStepStepChange}
            navigationAdapter={useNextAdapter}
            scrollToTop={false}
          >
            <div className="min-h-screen bg-background text-foreground px-4">
              <Navbar />
              {children}
              <Footer />
              <Analytics />
            </div>
          </NextStep>
        </NextStepProvider>
        <Toaster />
      </body>
    </html>
  );
}
