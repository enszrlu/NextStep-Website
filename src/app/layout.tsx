import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { NextStepProvider, NextStep } from 'nextstepjs';
import { ModalProvider } from '@/contexts/ModalContext';

import { useNextAdapter } from 'nextstepjs/adapters/next';
import steps from '@/lib/steps';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import ScrollToTop from '@/components/ScrollToTop';
import {
  onNextStepStepChange,
  onNextStepComplete,
  onNextStepSkip,
  onNextStepStart,
} from '@/lib/callbacks';
import { metaKeywords } from './metaKeywords';
import { appleWebApp, openGraph, twitter } from './metadata';

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
  keywords: metaKeywords,
  openGraph: openGraph,
  twitter: twitter,
  appleWebApp: appleWebApp,
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
          <ModalProvider>
            <NextStep
              steps={steps}
              onStart={onNextStepStart}
              onComplete={onNextStepComplete}
              onSkip={onNextStepSkip}
              onStepChange={onNextStepStepChange}
              scrollToTop={false}
            >
              <div className="min-h-screen bg-background text-foreground flex flex-col">
                <Navbar />
                <main className="flex-1 px-4">{children}</main>
                <Footer />
                <Analytics />
                <ScrollToTop />
              </div>
            </NextStep>
          </ModalProvider>
        </NextStepProvider>
        <Toaster />
      </body>
    </html>
  );
}
