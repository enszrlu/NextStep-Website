'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import CodeBlocks from '@/lib/codeBlocks';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';

interface BasicSetupProps {
  framework: string;
}

const BasicSetup = ({ framework = 'next.js' }: BasicSetupProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold mb-2" id="basic-setup">
        Basic Setup for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        Learn how to set up NextStep in your {toTitleCase(framework)} project. This guide
        will walk you through the basic configuration needed to get started.
      </p>

      <div className="flex flex-col gap-4">
        <p className="mb-2 text-lg">
          Wrap your application in <code>NextStepProvider</code> and{' '}
          {framework === 'next.js' ? <code>NextStep</code> : <code>NextStepReact</code>},
          then supply the <code>steps</code> array to NextStep. See the{' '}
          <Link
            href={`/docs/${framework.replace('.', '').replace(' ', '-')}/tour-steps`}
            className="text-primary"
          >
            Tour Steps
          </Link>{' '}
          page for more information about creating steps.
        </p>

        {framework === 'next.js' && (
          <>
            <h2 className="text-2xl font-semibold mt-4">
              App Router: Global `layout.tsx`
            </h2>
            <CodeBlock
              language={CodeBlocks.basicSetup.language}
              code={CodeBlocks.basicSetup.code}
            />
            <h2 className="text-2xl font-semibold mt-4">Pages Router: `_app.tsx`</h2>
            <CodeBlock
              language={CodeBlocks.basicSetupShorterPagesRouter.language}
              code={CodeBlocks.basicSetupShorterPagesRouter.code}
            />
            <h2 className="text-2xl font-semibold mt-4">
              Troubleshooting for Pages Router
            </h2>
            <p className="mb-2">
              If you encounter an error related to module exports when using the Pages
              Router, it is likely due to a mismatch between ES modules (which use
              `export` statements) and CommonJS modules (which use `module.exports`). The
              `nextstepjs` package uses ES module syntax, but your Next.js project might
              be set up to use CommonJS.
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
          </>
        )}

        {framework === 'react' && (
          <>
            <h2 className="text-2xl font-semibold mt-4">Basic React Setup</h2>
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
}
`}
            />

            <h2 className="text-2xl font-semibold mt-4">Vite Configuration</h2>
            <p className="mb-4 font-semibold bg-red-100 dark:bg-red-900 p-4 rounded-md">
              ⚠️ Important: If you're using Vite with React, you need to configure Vite to
              handle nextstepjs properly and mock Next.js navigation.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              1. Create Next.js Navigation Mock
            </h3>
            <p className="mb-3">
              Create a mock file at <code>src/mocks/next-navigation.ts</code>:
            </p>
            <CodeBlock
              language="tsx"
              code={`// src/mocks/next-navigation.ts
// Mock for Next.js navigation to prevent build errors with nextstepjs

export const useRouter = () => {
  return {
    push: () => {},
    replace: () => {},
    prefetch: () => {},
    back: () => {},
    forward: () => {},
    refresh: () => {},
  };
};

export const usePathname = () => {
  return '';
};

export const useSearchParams = () => {
  return new URLSearchParams();
};

export const useParams = () => {
  return {};
};`}
            />

            <h3 className="text-lg font-semibold mb-2 mt-4">2. Update vite.config.ts</h3>
            <CodeBlock
              language="tsx"
              code={`// vite.config.ts
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Mock Next.js navigation imports that nextstepjs might try to access
      {
        find: 'next/navigation',
        replacement: path.join(process.cwd(), 'src/mocks/next-navigation.ts'),
      },
    ]
  },
  ssr: {
    noExternal: ['nextstepjs', 'motion']
  }
});`}
            />
          </>
        )}

        {framework === 'react router' && (
          <>
            <h2 className="text-2xl font-semibold mt-4">React Router Setup</h2>
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
}
`}
            />
            <h2 className="text-2xl font-semibold mt-4">Vite Configuration</h2>
            <p className="mb-4 font-semibold bg-red-100 dark:bg-red-900 p-4 rounded-md">
              ⚠️ Important: If you're using Vite with React Router, you need to configure
              Vite to handle nextstepjs properly and mock Next.js navigation.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              1. Create Next.js Navigation Mock
            </h3>
            <p className="mb-3">
              Create a mock file at <code>src/mocks/next-navigation.ts</code>:
            </p>
            <CodeBlock
              language="tsx"
              code={`// src/mocks/next-navigation.ts
// Mock for Next.js navigation to prevent build errors with nextstepjs
// This file is used to mock Next.js imports when using nextstepjs in a Vite app

export const useRouter = () => {
  return {
    push: () => {},
    replace: () => {},
    prefetch: () => {},
    back: () => {},
    forward: () => {},
    refresh: () => {},
  };
};

export const usePathname = () => {
  return '';
};

export const useSearchParams = () => {
  return new URLSearchParams();
};

export const useParams = () => {
  return {};
};`}
            />

            <h3 className="text-lg font-semibold mb-2 mt-4">2. Update vite.config.ts</h3>
            <CodeBlock
              language="tsx"
              code={`// vite.config.ts
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Mock Next.js navigation imports that nextstepjs might try to access
      {
        find: 'next/navigation',
        replacement: path.join(process.cwd(), 'src/mocks/next-navigation.ts'),
      },
    ]
  },
  ssr: {
    noExternal: ['nextstepjs', 'motion']
  }
});`}
            />
          </>
        )}

        {framework === 'remix' && (
          <>
            <h2 className="text-2xl font-semibold mt-4">Remix Setup</h2>
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
}
`}
            />
            <h2 className="text-2xl font-semibold mt-4">Vite Configuration</h2>
            <p className="mb-4 font-semibold bg-red-100 dark:bg-red-900 p-4 rounded-md">
              ⚠️ Important: If you're using Vite with Remix, you need to configure Vite to
              handle nextstepjs properly and mock Next.js navigation.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              1. Create Next.js Navigation Mock
            </h3>
            <p className="mb-3">
              Create a mock file at <code>src/mocks/next-navigation.ts</code>:
            </p>
            <CodeBlock
              language="tsx"
              code={`// src/mocks/next-navigation.ts
// Mock for Next.js navigation to prevent build errors with nextstepjs

export const useRouter = () => {
  return {
    push: () => {},
    replace: () => {},
    prefetch: () => {},
    back: () => {},
    forward: () => {},
    refresh: () => {},
  };
};

export const usePathname = () => {
  return '';
};

export const useSearchParams = () => {
  return new URLSearchParams();
};

export const useParams = () => {
  return {};
};`}
            />

            <h3 className="text-lg font-semibold mb-2 mt-4">2. Update vite.config.ts</h3>
            <CodeBlock
              language="tsx"
              code={`// vite.config.ts
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Mock Next.js navigation imports that nextstepjs might try to access
      {
        find: 'next/navigation',
        replacement: path.join(process.cwd(), 'src/mocks/next-navigation.ts'),
      },
    ]
  },
  ssr: {
    noExternal: ['nextstepjs', 'motion']
  }
});`}
            />
          </>
        )}
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p>
          Now that you have set up NextStepjs in your {toTitleCase(framework)} project,
          you can explore more features:
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/tour-steps`}>
            <Button variant="outline">Tour Steps</Button>
          </Link>
          <Link
            href={`/docs/${framework.replace('.', '').replace(' ', '-')}/useNextStep`}
          >
            <Button variant="outline">useNextStep Hook</Button>
          </Link>
          <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/routing`}>
            <Button variant="outline">Routing During Tour</Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Installation
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/tour-steps`}>
          <Button variant="default">
            <FaArrowRight className="w-4 h-4 mr-2" /> Tour Steps
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BasicSetup;
