import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from '@/components/ui/toaster';
import { NextStepProvider, NextStep } from 'nextstep';
import steps from '@/components/steps';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextStep",
  description: "Lightweight onboarding library for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextStepProvider>
          <NextStep steps={steps}>
            {children}
          </NextStep>
        </NextStepProvider>
        <Toaster />
      </body>
    </html>
  );
}
