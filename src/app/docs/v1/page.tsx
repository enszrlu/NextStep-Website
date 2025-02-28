import DocsPage from '@/components/DocsPage';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - NextStepjs',
  description:
    'Documentation for NextStepjs. Learn how to implement user onboarding, interactive tutorials, and product tours in your Next.js and React applications.',
  alternates: {
    canonical: 'https://nextstepjs.com/docs/v1',
  },
};

export default function Docs() {
  return (
    <>
      {/* Static content for SEO */}
      <div className="sr-only">
        <h1>
          Documentation for NextStepjs, onboarding library for Next.js and React
          applications.
        </h1>
        <p>
          Complete guide to using NextStepjs for creating interactive onboarding
          experiences in your Next.js and React applications.
        </p>

        <h2>Getting Started</h2>
        <p>
          Learn how to install and set up NextStepjs in your project. Includes basic
          setup, installation instructions, and configuration options for both App Router
          and Pages Router.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Easy integration with Next.js App Router and Pages Router</li>
          <li>Customizable step-by-step guides and product tours</li>
          <li>
            Support for multiple navigation adapters including Next.js, React Router, and
            Remix
          </li>
          <li>Keyboard navigation support</li>
          <li>Viewport management for scrollable content</li>
          <li>Comprehensive callback system for tour events</li>
          <li>Localization support</li>
        </ul>

        <h2>API Reference</h2>
        <p>
          Detailed documentation of NextStep components, props, and configuration options.
          Includes NextStep Provider, Step configuration, custom card components, and
          navigation adapters.
        </p>

        <h2>Examples</h2>
        <p>
          Practical examples and code snippets for implementing NextStepjs features,
          including custom card components, step configurations, and integration patterns.
        </p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <DocsPage />
      </Suspense>
    </>
  );
}
