import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { NextStepProvider, NextStep } from 'nextstepjs';
import steps from '@/lib/steps';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  metadataBase: new URL('https://nextstepjs.vercel.app/'),
  title: 'NextStep',
  description: 'Lightweight onboarding library for Next.js',
  openGraph: {
    images: [
      {
        url: 'https://nextstepjs.vercel.app/ogThumbnail.png',
        width: 1200,
        height: 630,
        alt: 'NextStep - Lightweight onboarding library for Next.js',
      },
    ],
    type: 'website',
    siteName: 'NextStep',
    title: 'NextStep',
    description: 'Lightweight onboarding library for Next.js',
    url: 'https://nextstepjs.vercel.app/',
    locale: 'en_US',
  },
  twitter: {
    images: 'https://nextstepjs.vercel.app/xThumbnail.png',
    site: '@AlexZDevs',
    creator: '@AlexZDevs',
    title: 'NextStep',
    description: 'Lightweight onboarding library for Next.js',
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'NextStep',
    startupImage: 'https://nextstepjs.vercel.app/ogThumbnail.png',
  },
  applicationName: 'NextStep',
  icons: {
    icon: 'https://nextstepjs.vercel.app/icon.png',
    shortcut: 'https://nextstepjs.vercel.app/icon.png',
    apple: 'https://nextstepjs.vercel.app/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextStepProvider>
          <NextStep steps={steps}>
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
