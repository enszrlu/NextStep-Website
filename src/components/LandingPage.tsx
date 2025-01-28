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
import CodeBlock from './CodeBlock';
import CodeBlocks from '@/lib/codeBlocks';
import AnnouncementBanner from './AnnouncementBanner';
import { useState } from 'react';
import NewsletterSignUp from './NewsletterSignUp';
import FaqSection from './FaqSection';

export function LandingPage() {
  const { startNextStep } = useNextStep();
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const onClickHandler = (tourName: string) => {
    setIsBannerVisible(false);
    startNextStep(tourName);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4">
      <AnnouncementBanner isVisible={isBannerVisible} setIsVisible={setIsBannerVisible} />
      <main className="container mx-auto py-12 space-y-24">
        <section className="text-center space-y-6" id="hero-section">
          <h1 className="text-5xl font-bold">
            NextStep {''} <br /> <br />
            <p className="text-xl max-w-2xl mx-auto font-normal">
              A lightweight onboarding library for Next.js applications. <br />
              Create engaging, interactive product tours with ease.
            </p>
          </h1>

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
          {/* DEMO VIDEO */}
          <video
            className="w-full rounded-lg shadow-md shadow-gray-500 max-w-3xl mx-auto"
            controls
            autoPlay
            loop
            muted
          >
            <source src="/NextStepDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
            <a
              href="https://fazier.com/launches/nextstep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=1685&badge_type=weekly&theme=neutral"
                width="270"
                alt="NextStep - Lightweight Next.js Onboarding Library Fazier Badge 2nd Product of the Week"
                className="rounded img-fluid"
              />
            </a>
            <a
              href="https://fazier.com/launches/nextstep"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full"
            >
              <img
                src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=1685&badge_type=daily&theme=neutral"
                width="270"
                alt="NextStep - Lightweight Next.js Onboarding Library Fazier Badge Daily Product of the Day"
                className="rounded img-fluid"
              />
            </a>
            <a href="https://www.uneed.best/tool/nextstep" className="h-full">
              <img
                src="https://www.uneed.best/POTD3.png"
                width={240}
                alt="NextStep - Lightweight Next.js Onboarding Library Uneed POTD3 Badge"
                className="h-full"
              />
            </a>
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
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <RiNextjsFill className="h-10 w-10 md:w-16 md:h-16 mb-2" />
              <span>Next.js</span>
            </Link>
            <Link
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <SiFramer className="h-10 w-10 md:w-16 md:h-16 mb-2" />
              <span>Motion</span>
            </Link>
          </div>
        </section>

        <NewsletterSignUp />

        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Quick Start Guide</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <div>
              <li>Install NextStep in your project using npm, yarn, or pnpm.</li>
              <div className="w-fit">
                <CopyCode />
              </div>
            </div>
            <li>
              <div id="tour1-step4">
                Wrap your app with the NextStepProvider:
                <h3 className="text-xl font-semibold mt-4">
                  App Router: Global `layout.tsx`
                </h3>
                <CodeBlock
                  language={CodeBlocks.basicSetupShorter.language}
                  code={CodeBlocks.basicSetupShorter.code}
                />
              </div>
              <div id="tour1-step4-pagesrouter">
                <h3 className="text-xl font-semibold mt-4">Pages Router: `_app.tsx`</h3>
                <CodeBlock
                  language={CodeBlocks.basicSetupShorterPagesRouter.language}
                  code={CodeBlocks.basicSetupShorterPagesRouter.code}
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">
                Troubleshooting for Pages Router
              </h3>
              <p className="mb-2">
                If you encounter an error related to module exports when using the Pages
                Router, it is likely due to a mismatch between ES modules (which use
                `export` statements) and CommonJS modules (which use `module.exports`).
                The `nextstepjs` package uses ES module syntax, but your Next.js project
                might be set up to use CommonJS.
              </p>
              <p className="mb-2">
                To resolve this issue, ensure that your Next.js project is configured to
                support ES modules. You can do this by updating your `next.config.js` file
                to include the following configuration:
              </p>
              <CodeBlock
                language={CodeBlocks.pagesRouterTroubleshooting.language}
                code={CodeBlocks.pagesRouterTroubleshooting.code}
              />
            </li>
            <li id="tour1-step5">
              Define your steps:
              <CodeBlock
                language={CodeBlocks.tourDefinition.language}
                code={CodeBlocks.tourDefinition.code}
              />
            </li>
            <li id="tour1-step6">
              Add id attributes to your HTML elements to target them in your steps.
            </li>
            <li id="tour1-step7">
              Use NextStep hook to control the tour from your components.
              <CodeBlock
                language={CodeBlocks.useNextStep.language}
                code={CodeBlocks.useNextStep.code}
              />
            </li>
            <li id="tour1-step8">
              You need to add below code to your tailwind.config.js. <br />
              <br />
              Optional: Create a custom Card to customize the appearance and behavior of
              NextStep to fit your app&apos;s needs.
              <CodeBlock
                language={CodeBlocks.tailwindConfig.language}
                code={CodeBlocks.tailwindConfig.code}
              />
            </li>
          </ol>
        </section>

        <FaqSection limit={3} />
      </main>
    </div>
  );
}
