'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';
import { useNextStep } from 'nextstepjs';

interface RoutingProps {
  framework: string;
}

const Routing = ({ framework = 'next.js' }: RoutingProps) => {
  const { startNextStep } = useNextStep();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="routing">
        Routing During Tours for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        One of the most powerful features of NextStep is the ability to navigate between
        different pages during a tour. This guide explains how to set up routing in your{' '}
        {toTitleCase(framework)} application.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Navigation Adapters</h2>
        <p className="text-lg">
          NextStep uses navigation adapters to handle routing in different frameworks.
          These adapters ensure that your tours can seamlessly transition between pages.
        </p>

        {framework === 'next.js' && (
          <>
            <h3 className="text-xl font-semibold">Next.js Navigation Adapter</h3>
            <p className="text-lg">
              For Next.js, the navigation adapter is built-in and automatically used when
              you use the <code>NextStep</code> component. You don't need to specify it
              explicitly.
            </p>

            <CodeBlock
              language="tsx"
              code={`// In your layout.tsx or app.tsx
import { NextStepProvider, NextStep } from 'nextstepjs';
import steps from '@/lib/steps';

export default function RootLayout({ children }) {
  return (
    <NextStepProvider>
      <NextStep steps={steps}>
        {children}
      </NextStep>
    </NextStepProvider>
  );
}`}
            />
          </>
        )}

        {framework === 'react' && (
          <>
            <h3 className="text-xl font-semibold">React Navigation</h3>
            <p className="text-lg">
              For a standard React application without a router, you don't need a
              navigation adapter. However, if you're using a router, you'll need to
              provide the appropriate adapter.
            </p>

            <CodeBlock
              language="tsx"
              code={`// In your root component
import { NextStepProvider, NextStepReact } from 'nextstepjs';
import steps from './steps';

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
          </>
        )}

        {framework === 'react router' && (
          <>
            <h3 className="text-xl font-semibold">React Router Navigation Adapter</h3>
            <p className="text-lg">
              For React Router, NextStep provides a dedicated navigation adapter that
              integrates with React Router's navigation system.
            </p>

            <CodeBlock
              language="tsx"
              code={`// In your root component
import { NextStepProvider, NextStepReact } from 'nextstepjs';
import { useReactRouterAdapter } from 'nextstepjs/adapters/react-router';
import steps from './steps';

function App() {
  return (
    <NextStepProvider>
      <NextStepReact 
        steps={steps} 
        navigationAdapter={useReactRouterAdapter}
      >
        <YourAppContent />
      </NextStepReact>
    </NextStepProvider>
  );
}`}
            />
          </>
        )}

        {framework === 'remix' && (
          <>
            <h3 className="text-xl font-semibold">Remix Navigation Adapter</h3>
            <p className="text-lg">
              For Remix, NextStep provides a dedicated navigation adapter that integrates
              with Remix's navigation system.
            </p>

            <CodeBlock
              language="tsx"
              code={`// In your root.tsx
import { NextStepProvider, NextStepReact } from 'nextstepjs';
import { useRemixAdapter } from 'nextstepjs/adapters/remix';
import steps from './steps';

export default function App() {
  return (
    <NextStepProvider>
      <NextStepReact 
        steps={steps} 
        navigationAdapter={useRemixAdapter}
      >
        <Outlet />
      </NextStepReact>
    </NextStepProvider>
  );
}`}
            />
          </>
        )}

        <h2 className="text-2xl font-semibold mt-6">
          Creating a Custom Navigation Adapter
        </h2>
        <p className="text-lg">
          If you're using a different routing library or need custom navigation behavior,
          you can create your own navigation adapter. A navigation adapter is a hook that
          returns an object with <code>navigate</code> and <code>location</code>{' '}
          properties.
        </p>

        <CodeBlock
          language="tsx"
          code={`// customNavigationAdapter.ts
import { useCallback, useEffect, useState } from 'react';
import { NavigationAdapter } from 'nextstepjs';

export function useCustomNavigationAdapter(): NavigationAdapter {
  const [location, setLocation] = useState(window.location.pathname);

  // Update location when the URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Custom navigation function
  const navigate = useCallback((to: string) => {
    window.history.pushState({}, '', to);
    setLocation(to);
  }, []);

  return { navigate, location };
}`}
        />

        <p className="text-lg">Then use your custom adapter with NextStepReact:</p>

        <CodeBlock
          language="tsx"
          code={`import { useCustomNavigationAdapter } from './customNavigationAdapter';

// In your root component
<NextStepReact 
  steps={steps} 
  navigationAdapter={useCustomNavigationAdapter}
>
  <YourAppContent />
</NextStepReact>`}
        />

        <h2 className="text-2xl font-semibold mt-6">Routing During Tours</h2>
        <p className="text-lg">
          To enable routing during tours, you can add <code>nextRoute</code> and{' '}
          <code>prevRoute</code> properties to your step objects:
        </p>

        <CodeBlock
          language="tsx"
          code={`// In your steps.tsx file
{
  tour: 'routingDemo',
  steps: [
    {
      icon: <>👋</>,
      title: 'Welcome to Page One',
      content: <>This is the first step. Click next to go to page two.</>,
      selector: '#page-one-element',
      side: 'bottom',
      showControls: true,
      showSkip: true,
      // Navigate to page two when clicking "Next"
      nextRoute: '/page-two',
    },
    {
      icon: <>🎉</>,
      title: 'Welcome to Page Two',
      content: <>This is the second step. Click previous to go back to page one.</>,
      selector: '#page-two-element',
      side: 'bottom',
      showControls: true,
      showSkip: true,
      // Navigate back to page one when clicking "Previous"
      prevRoute: '/page-one',
    },
  ],
}`}
        />

        <div className="bg-muted p-4 rounded-md mt-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> When using <code>nextRoute</code> and{' '}
            <code>prevRoute</code>, NextStep will first navigate to the specified route
            and then show the next/previous step. This allows you to create tours that
            span multiple pages.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Interactive Demo</h2>
        <p className="text-lg">
          Try out the routing demo below. This demo will navigate between the homepage and
          this page during the tour.
        </p>

        <div className="flex flex-col gap-4 p-6 border rounded-md">
          <p
            id="routing-demo-step"
            className="p-4 bg-primary/10 rounded-md border border-primary/20"
          >
            This is the first step of our routing demo. Click the button below to start
            the tour.
          </p>

          <Button
            onClick={() => startNextStep(`${framework.replace('.', '-')}-routing-demo`)}
            className="w-fit mt-4"
          >
            Start Routing Demo
          </Button>

          <CodeBlock
            language="tsx"
            code={`// In your steps.tsx file
{
  tour: '${framework.replace('.', '-')}-routing-demo',
  steps: [
    {
      icon: <>👋</>,
      title: 'Routing Demo',
      content: <>This is the first step of our routing demo. Click next to navigate to the homepage.</>,
      selector: '#routing-demo-step',
      side: 'bottom',
      showControls: true,
      showSkip: true,
      nextRoute: '/',
    },
    {
      icon: <>❤️</>,
      title: 'Support the Developer',
      content: <>We've navigated to the homepage. Please consider supporting the developer if you find NextStep useful. <br /> <br /> Click next to navigate back to the routing documentation.</>,
      selector: '#buy-me-a-coffee-button',
      side: 'right',
      showControls: true,
      showSkip: true,
      prevRoute: '/docs/${framework.replace('.', '').replace(' ', '-')}/routing',
      nextRoute: '/docs/${framework.replace('.', '').replace(' ', '-')}/routing',
    },
    {
      icon: <>🎉</>,
      title: 'Back to Docs',
      content: <>We've navigated back to the routing documentation. You've completed the routing demo!</>,
      selector: '#routing-demo-step',
      side: 'bottom',
      showControls: true,
      showSkip: true,
      prevRoute: '/',
    },
  ],
},`}
          />
        </div>

        {/* IMPORTANT NOTE */}
        <div className="bg-destructive/40 p-4 rounded-md mt-4">
          <p className="text-sm text-foreground">
            <strong>Note:</strong> When using <code>nextRoute</code> and{' '}
            <code>prevRoute</code>, NextStep will first navigate to the specified route
            and then show the next/previous step. NextStep will wait for the page to load
            and find the element before showing the next step. Ensure that the element is
            present on the page before using <code>nextRoute</code> or{' '}
            <code>prevRoute</code>. Otherwise, NextStep will route but will not move to
            the next step until the element is found.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/useNextStep`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> useNextStep Hook
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/viewport`}>
          <Button variant="default">
            <FaArrowRight className="w-4 h-4 mr-2" /> NextStepViewport
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Routing;
