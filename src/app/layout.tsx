import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { NextStepProvider, NextStep } from 'nextstepjs';
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
  title: 'NextStep',
  description: 'Lightweight onboarding library for Next.js',
  openGraph: {
    images: [
      {
        url: 'https://nextstepjs.com/ogThumbnail.png',
        width: 1200,
        height: 630,
        alt: 'NextStep - Lightweight onboarding library for Next.js',
      },
    ],
    type: 'website',
    siteName: 'NextStep',
    title: 'NextStep',
    description: 'Lightweight onboarding library for Next.js',
    url: 'https://nextstepjs.com',
    locale: 'en_US',
  },
  twitter: {
    images: 'https://nextstepjs.com/xThumbnail.png',
    site: '@AlexZDevs',
    creator: '@AlexZDevs',
    title: 'NextStep',
    description: 'Lightweight onboarding library for Next.js',
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'NextStep',
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextStepProvider>
          <NextStep
            steps={steps}
            onStart={onNextStepStart}
            onComplete={onNextStepComplete}
            onSkip={onNextStepSkip}
            onStepChange={onNextStepStepChange}
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
