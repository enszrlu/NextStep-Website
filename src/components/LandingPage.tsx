'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Coffee } from 'lucide-react';
import CopyCode from './CopyCode';
import { RiNextjsFill } from 'react-icons/ri';
import { SiFramer, SiTailwindcss, SiRadixui } from 'react-icons/si';
import { useNextStep } from 'nextstepjs';
import Navbar from './Navbar';
import Footer from './Footer';

export function LandingPage() {
  const { startNextStep } = useNextStep();

  const onClickHandler = (tourName: string) => {
    startNextStep(tourName);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4">
      <main className="container mx-auto py-12 space-y-24">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold">NextStep</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A lightweight onboarding library for Next.js applications. Create engaging,
            interactive product tours with ease.
          </p>
          <div className="space-y-4">
            <Button size="lg" onClick={() => onClickHandler('firsttour')}>
              Start NextStep Demo
            </Button>
            <div>
              <Link href="https://buymeacoffee.com/enszrlu">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 transition-colors"
                >
                  <Coffee className="w-5 h-5 mr-2" />
                  Buy Me a Coffee
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center" id="tour1-step1">
          <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle>Install NextStep</CardTitle>
              <CardDescription>
                Add NextStep to your project with your preferred package manager
              </CardDescription>

              <div id="tour1-step3" />
            </CardHeader>
            <CardContent>
              <CopyCode />
            </CardContent>
          </Card>
        </section>

        <section className="text-center w-fit mx-auto px-3 md:px-12" id="tour1-step2">
          <h2 className="text-3xl font-semibold mb-6">Built with</h2>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <RiNextjsFill className="h-10 w-10 md:w-16 md:h-16 mb-2" />
              <span>Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFramer className="h-10 w-10 md:w-16 md:h-16 mb-2" />
              <span>Framer Motion</span>
            </div>
            <div className="flex flex-col items-center">
              <SiRadixui className="h-10 w-10 md:w-16 md:h-16 mb-2" />
              <span>Radix UI</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="h-10 w-10 md:w-16 md:h-16 mb-2" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Inspired by Onborda</h2>
          <p className="text-xl mb-4">
            NextStep is inspired by the great work of the Onborda project.
          </p>
          <Link href="https://onborda.vercel.app/">
            <Button variant="link">Visit Onborda</Button>
          </Link>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Quick Start Guide</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <div>
              <li>Install NextStep in your project using npm, yarn, or pnpm.</li>
              <div className="w-fit">
                <CopyCode />
              </div>
            </div>
            <li id="tour1-step4">
              Wrap your app with the NextStepProvider in your global layout:
              <pre className="bg-muted px-4 py-0 rounded-md mt-2 overflow-x-auto">
                <code>{`
<NextStepProvider>
  <NextStep steps={steps}>
    {children}
  </NextStep>
</NextStepProvider>
                `}</code>
              </pre>
            </li>
            <li id="tour1-step5">
              Define your steps:
              <pre className="bg-muted px-4 py-0 rounded-md mt-2 overflow-x-auto">
                <code>{`
import { Tour } from 'nextstepjs';

const steps : Tour[] = [
  {
    tour: "mainTour",
    steps: [
      {
        title: "Welcome",
        content: "Let's get started with NextStep!",
        selector: "#step1",
        // ... other step properties
      },
      // ... more steps
    ]
  }
];
                `}</code>
              </pre>
            </li>
            <li id="tour1-step6">
              Add id attributes to your HTML elements to target them in your steps.
            </li>
            <li id="tour1-step7">
              Use NextStep hook to control the tour from your components.
              <pre className="bg-muted px-4 py-0 rounded-md mt-2 overflow-x-auto">
                <code>{`
import { useNextStep } from 'nextstepjs';
....

const { startNextStep, closeNextStep } = useNextStep();

const onClickHandler = (tourName: string) => {
  startNextStep(tourName);
};
                  `}</code>
              </pre>
            </li>
            <li id="tour1-step8">
              Optional: Create a custom Card to customize the appearance and behavior of
              NextStep to fit your app&apos;s needs.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
