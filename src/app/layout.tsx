import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { NextStepProvider, NextStep } from 'nextstep';
import steps from '@/components/steps';

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
        url: '/ogThumbnail.png',
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
    images: [
      {
        url: '/xThumbnail.png',
        width: 1200,
        height: 600,
        alt: 'NextStep - Lightweight onboarding library for Next.js',
      },
    ],
    site: '@AlexZDevs',
    creator: '@AlexZDevs',
    title: 'NextStep',
    description: 'Lightweight onboarding library for Next.js',
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'NextStep',
    startupImage: '/ogThumbnail.png',
  },
  applicationName: 'NextStep',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
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
          <NextStep steps={steps}>{children}</NextStep>
        </NextStepProvider>
        <Toaster />
      </body>
    </html>
  );
}
