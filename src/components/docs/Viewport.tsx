'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';

interface ViewportProps {
  framework: string;
}

const Viewport = ({ framework = 'next.js' }: ViewportProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="viewport">
        NextStepViewport for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        NextStepViewport allows you to define custom viewports for your tours, which is
        especially useful when targeting elements within scrollable containers.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Default Behavior</h2>
        <p className="text-lg">
          By default, NextStep uses the document body as the viewport for positioning tour
          steps. This works well for most cases, but can be problematic when:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            Your target element is inside a scrollable container (like a div with{' '}
            <code>overflow: auto</code>)
          </li>
          <li>
            You want the tour step to be positioned relative to a specific container
            rather than the entire page
          </li>
          <li>
            You have complex layouts with nested scrollable areas where the default
            positioning doesn't work as expected
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Using NextStepViewport</h2>
        <p className="text-lg">
          The <code>NextStepViewport</code> component allows you to define a custom
          viewport for your tour steps. Here's how to use it:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { NextStepViewport } from 'nextstepjs';

// In your component
<div className="scrollable-container">
  <NextStepViewport id="scrollable-viewport">
    <div id="target-element">
      This element will be targeted by the tour step
    </div>
    {/* Other content */}
  </NextStepViewport>
</div>`}
        />

        <p className="text-lg">
          Then, in your step configuration, specify the <code>viewportID</code> property:
        </p>

        <CodeBlock
          language="tsx"
          code={`// In your steps.tsx file
{
  tour: 'myTour',
  steps: [
    {
      icon: <>👋</>,
      title: 'Custom Viewport Example',
      content: <>This step is positioned relative to a custom viewport</>,
      selector: '#target-element',
      side: 'bottom',
      showControls: true,
      showSkip: true,
      // Specify the NextStepViewport ID
      viewportID: 'scrollable-viewport',
    },
  ],
}`}
        />

        <h2 className="text-2xl font-semibold mt-6">How It Works</h2>
        <p className="text-lg">
          When you use <code>NextStepViewport</code>, NextStep will:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-lg">
          <li>
            Position the tour step relative to the specified viewport instead of the
            document body
          </li>
          <li>
            Automatically scroll the viewport to ensure the target element is visible when
            the step is shown
          </li>
          <li>
            Handle edge cases like when the target element is partially visible or when
            the viewport is resized
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">Example Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">Scrollable Tables</h3>
            <p className="mt-2">
              When you have a large table with horizontal and vertical scrolling, you can
              use <code>NextStepViewport</code> to target specific cells or rows.
            </p>
            <CodeBlock
              language="tsx"
              code={`<div className="table-container">
  <NextStepViewport id="table-viewport">
    <table>
      {/* Table content */}
      <tr>
        <td id="target-cell">Target Cell</td>
      </tr>
    </table>
  </NextStepViewport>
</div>`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">Form Wizards</h3>
            <p className="mt-2">
              For multi-step forms with scrollable sections, you can target specific form
              fields within each section.
            </p>
            <CodeBlock
              language="tsx"
              code={`<div className="form-section">
  <NextStepViewport id="form-viewport">
    <form>
      <input id="username-field" />
      <input id="password-field" />
    </form>
  </NextStepViewport>
</div>`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">Dashboard Panels</h3>
            <p className="mt-2">
              For dashboards with multiple scrollable panels, you can target elements
              within each panel.
            </p>
            <CodeBlock
              language="tsx"
              code={`<div className="dashboard-panel">
  <NextStepViewport id="panel-viewport">
    <div id="chart-element">Chart</div>
    <div id="stats-element">Statistics</div>
  </NextStepViewport>
</div>`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">Code Editors</h3>
            <p className="mt-2">
              For code editors or text areas with scrolling, you can target specific lines
              or sections.
            </p>
            <CodeBlock
              language="tsx"
              code={`<div className="code-editor">
  <NextStepViewport id="editor-viewport">
    <pre>
      <code>
        <span id="line-42">// This line will be highlighted</span>
      </code>
    </pre>
  </NextStepViewport>
</div>`}
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Live Demo</h2>
        <p className="text-lg">
          To see <code>NextStepViewport</code> in action, check out our interactive demo
          page. The demo includes examples of:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Default viewport behavior (without NextStepViewport)</li>
          <li>Custom viewport with vertical scrolling</li>
          <li>Custom viewport with both horizontal and vertical scrolling</li>
        </ul>

        <div className="flex justify-center mt-4">
          <Link href="/demo">
            <Button size="lg" className="gap-2">
              View Live Demo <FaExternalLinkAlt className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="bg-muted p-4 rounded-md mt-6">
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> In the demo, pay attention to steps 7-9 which
            demonstrate the difference between default viewport behavior and using
            NextStepViewport with scrollable containers.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/routing`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Routing During Tour
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/callbacks`}>
          <Button variant="default">
            <FaArrowRight className="w-4 h-4 mr-2" /> Callbacks
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Viewport;
