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
import { SiFramer, SiReact } from 'react-icons/si';
import { useNextStep } from 'nextstepjs';
import CodeBlock from './CodeBlock';
import CodeBlocks from '@/lib/codeBlocks';
import AnnouncementBanner from './AnnouncementBanner';
import { useEffect, useState, ReactNode } from 'react';
import NewsletterSignUp from './NewsletterSignUp';
import FaqSection from './FaqSection';
import Features from './landing/Features';
import { cn } from '@/lib/utils';

const BANNER_STORAGE_KEY = 'nextstep_announcement_hidden_until';
const ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

interface LandingPageClientProps {
  GitHubStarsComponent: ReactNode;
  framework: 'Next.js' | 'React' | 'Remix' | 'React Router' | 'Next.js and React';
}

export function LandingPageClient({
  GitHubStarsComponent,
  framework = 'Next.js and React',
}: LandingPageClientProps) {
  const { startNextStep } = useNextStep();
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    // Check if banner should be shown
    const hiddenUntil = localStorage.getItem(BANNER_STORAGE_KEY);
    const shouldShow = !hiddenUntil || new Date().getTime() > parseInt(hiddenUntil);
    setIsBannerVisible(shouldShow);
  }, []);

  const onClickHandler = (tourName: string) => {
    setIsBannerVisible(false);

    // Use framework-specific tour names
    if (tourName === 'firsttour') {
      if (framework === 'React') {
        startNextStep('react-tour');
      } else if (framework === 'React Router') {
        startNextStep('react-router-tour');
      } else if (framework === 'Remix') {
        startNextStep('remix-tour');
      } else {
        startNextStep('firsttour');
      }
    } else {
      startNextStep(tourName);
    }
  };

  const handleBannerClose = () => {
    // Set expiry date to one week from now
    const expiryDate = new Date().getTime() + ONE_WEEK_IN_MS;
    localStorage.setItem(BANNER_STORAGE_KEY, expiryDate.toString());
    setIsBannerVisible(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4">
      <AnnouncementBanner isVisible={isBannerVisible} setIsVisible={handleBannerClose} />
      <main className="container mx-auto py-12 space-y-24">
        <section className="text-center space-y-6" id="hero-section">
          <h1 className="text-5xl font-bold" id="hero-section-title">
            <span className="underline decoration-wavy decoration-orange-400 font-bold underline-offset-[12px]">
              NextStep
            </span>{' '}
            {''} <br /> <br />
            <p className="text-xl max-w-2xl mx-auto font-normal">
              A lightweight onboarding library for {framework} applications. <br />
              Create engaging, interactive product tours with ease.
            </p>
          </h1>

          {/* GitHub Stars Section */}
          <div className="py-6 max-w-md mx-auto">{GitHubStarsComponent}</div>

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
                  id="buy-me-a-coffee-button"
                >
                  <Coffee className="w-5 h-5 mr-2" />
                  Buy Me a Coffee
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <Features framework={framework} />

          {/* DEMO VIDEO */}

          <h2 className="text-3xl font-semibold mb-12 text-center">
            See NextStep in action
          </h2>
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
            {/* React */}
            <Link
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <SiReact className="h-10 w-10 md:w-16 md:h-16 mb-2" />
              <span>React</span>
            </Link>
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex-col items-center hover:opacity-80 transition-opacity hidden',
                framework.includes('Next.js') && 'flex',
              )}
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

            {framework.includes('Next.js') && (
              <>
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
                    <h3 className="text-xl font-semibold mt-4">
                      Pages Router: `_app.tsx`
                    </h3>
                    <CodeBlock
                      language={CodeBlocks.basicSetupShorterPagesRouter.language}
                      code={CodeBlocks.basicSetupShorterPagesRouter.code}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4">
                    Troubleshooting for Pages Router
                  </h3>
                  <p className="mb-2">
                    If you encounter an error related to module exports when using the
                    Pages Router, it is likely due to a mismatch between ES modules (which
                    use `export` statements) and CommonJS modules (which use
                    `module.exports`). The `nextstepjs` package uses ES module syntax, but
                    your Next.js project might be set up to use CommonJS.
                  </p>
                  <p className="mb-2">
                    To resolve this issue, ensure that your Next.js project is configured
                    to support ES modules. You can do this by updating your
                    `next.config.js` file to include the following configuration:
                  </p>
                  <CodeBlock
                    language={CodeBlocks.pagesRouterTroubleshooting.language}
                    code={CodeBlocks.pagesRouterTroubleshooting.code}
                  />
                </li>
              </>
            )}

            {framework === 'React' && (
              <li>
                <div id="tour1-step4">
                  Wrap your app with the NextStepProvider:
                  <CodeBlock
                    language="tsx"
                    code={`
import { NextStepProvider, NextStepReact } from 'nextstepjs';

const steps = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: "👋",
        title: "Welcome",
        content: "Let's get started with NextStep!",
        selector: "#step1",
        side: "right",
        showControls: true,
        showSkip: true
      },
      // More steps...
    ]
  }
];

function App() {
  return (
    <NextStepProvider>
      <NextStepReact steps={steps}>
        <YourAppContent />
      </NextStepReact>
    </NextStepProvider>
  );
}`}
                  />
                </div>
              </li>
            )}

            {framework === 'React Router' && (
              <>
                <li>
                  <div id="tour1-step4">
                    Wrap your app with the NextStepProvider and use the React Router
                    adapter:
                    <CodeBlock
                      language="tsx"
                      code={`
//app/root.tsx
import { NextStepProvider, NextStepReact } from 'nextstepjs';
import { useReactRouterAdapter } from 'nextstepjs/adapters/react-router';
import { Outlet } from 'react-router-dom';

const steps = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: "👋",
        title: "Welcome",
        content: "Let's get started with NextStep!",
        selector: "#step1",
        side: "right",
        showControls: true,
        showSkip: true
      },
      // More steps...
    ]
  }
];

export default function App() {
  return (
    <NextStepProvider>
      <NextStepReact navigationAdapter={useReactRouterAdapter} steps={steps}>
        <Outlet />
      </NextStepReact>
    </NextStepProvider>
  );
}`}
                    />
                  </div>
                </li>
                <li>
                  <h3 className="text-xl font-semibold mt-4">Vite Configuration</h3>
                  <p className="mb-4 font-semibold bg-red-100 dark:bg-red-900 p-4 rounded-md">
                    ⚠️ Important: If you're using Vite with React Router, add the
                    following configuration to your `vite.config.ts`:
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['nextstepjs', 'motion']
  }
});`}
                  />
                </li>
              </>
            )}

            {framework === 'Remix' && (
              <>
                <li>
                  <div id="tour1-step4">
                    Wrap your app with the NextStepProvider and use the Remix adapter:
                    <CodeBlock
                      language="tsx"
                      code={`// root.tsx
import { NextStepReact, NextStepProvider } from 'nextstepjs';
import { useRemixAdapter } from 'nextstepjs/adapters/remix';
import { Outlet } from '@remix-run/react';

const steps = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: "👋",
        title: "Welcome",
        content: "Let's get started with NextStep!",
        selector: "#step1",
        side: "right",
        showControls: true,
        showSkip: true
      },
      // More steps...
    ]
  }
];

export default function App() {
  return (
    <NextStepProvider>
      <NextStepReact navigationAdapter={useRemixAdapter} steps={steps}>
        <Outlet />
      </NextStepReact>
    </NextStepProvider>
  );
}`}
                    />
                  </div>
                </li>
                <li>
                  <h3 className="text-xl font-semibold mt-4">Vite Configuration</h3>
                  <p className="mb-4 font-semibold bg-red-100 dark:bg-red-900 p-4 rounded-md">
                    ⚠️ Important: If you're using Vite with Remix, add the following
                    configuration to your `vite.config.ts`:
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['nextstepjs', 'motion']
  }
});`}
                  />
                </li>
              </>
            )}

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
          </ol>
        </section>

        <FaqSection limit={3} framework={framework} />
      </main>
    </div>
  );
}
