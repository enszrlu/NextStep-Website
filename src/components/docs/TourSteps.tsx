'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';
import { useNextStep } from 'nextstepjs';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TourStepsProps {
  framework: string;
}

const TourSteps = ({ framework = 'next.js' }: TourStepsProps) => {
  const { startNextStep } = useNextStep();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="tour-steps">
        Tour Steps for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        Learn how to create tour steps for your {toTitleCase(framework)} project. This
        guide will walk you through the step configuration options and provide examples.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Step Object Properties</h2>
        <p className="text-lg">
          Each step in your tour is defined by a step object with the following
          properties:
        </p>

        <Table>
          <TableCaption>Step Object Properties</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Property</TableHead>
              <TableHead className="w-[200px]">Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">icon</TableCell>
              <TableCell>
                <code>React.ReactNode | string | null</code>
              </TableCell>
              <TableCell>
                An icon or element to display alongside the step title.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">title</TableCell>
              <TableCell>
                <code>string</code>
              </TableCell>
              <TableCell>The title of your step.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">content</TableCell>
              <TableCell>
                <code>React.ReactNode</code>
              </TableCell>
              <TableCell>The main content or body of the step.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">selector</TableCell>
              <TableCell>
                <code>string</code>
              </TableCell>
              <TableCell>
                Optional. A string used to target an <code>id</code> that this step refers
                to. If not provided, card will be displayed in the center top of the
                document body.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">side</TableCell>
              <TableCell>
                <code>
                  "top" | "bottom" | "left" | "right" | "top-left" | "top-right" |
                  "bottom-left" | "bottom-right"
                </code>
              </TableCell>
              <TableCell>
                Optional. Determines where the tooltip should appear relative to the
                selector.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">showControls</TableCell>
              <TableCell>
                <code>boolean</code>
              </TableCell>
              <TableCell>
                Optional. Determines whether control buttons (next, prev) should be shown
                if using the default card.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">showSkip</TableCell>
              <TableCell>
                <code>boolean</code>
              </TableCell>
              <TableCell>
                Optional. Determines whether skip button should be shown if using the
                default card.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">blockKeyboardControl</TableCell>
              <TableCell>
                <code>boolean</code>
              </TableCell>
              <TableCell>
                Optional. Determines whether keyboard control should be blocked.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">pointerPadding</TableCell>
              <TableCell>
                <code>number</code>
              </TableCell>
              <TableCell>
                Optional. The padding around the pointer (keyhole) highlighting the target
                element.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">pointerRadius</TableCell>
              <TableCell>
                <code>number</code>
              </TableCell>
              <TableCell>
                Optional. The border-radius of the pointer (keyhole) highlighting the
                target element.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">nextRoute</TableCell>
              <TableCell>
                <code>string</code>
              </TableCell>
              <TableCell>
                Optional. The route to navigate to when moving to the next step.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">prevRoute</TableCell>
              <TableCell>
                <code>string</code>
              </TableCell>
              <TableCell>
                Optional. The route to navigate to when moving to the previous step.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">viewportID</TableCell>
              <TableCell>
                <code>string</code>
              </TableCell>
              <TableCell>
                Optional. The id of the viewport element to use for positioning. If not
                provided, the document body will be used.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="bg-muted p-4 rounded-md mt-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> NextStep handles card cutoff from screen sides. If side
            is right or left and card is out of the viewport, side would be switched to{' '}
            <code>top</code>. If side is top or bottom and card is out of the viewport,
            then side would be flipped between top and bottom.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Tours Array</h2>
        <p className="text-lg">
          NextStep supports multiple "tours", allowing you to create multiple product
          tours:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Tour } from 'nextstepjs';

const steps: Tour[] = [
  {
    tour: 'firstTour',
    steps: [
      // Step objects
    ],
  },
  {
    tour: 'secondTour',
    steps: [
      // Step objects
    ],
  },
];`}
        />

        <h2 className="text-2xl font-semibold mt-6">Example Steps</h2>
        <p className="text-lg">
          Here's an example of a complete steps array with multiple tours:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Tour } from 'nextstepjs';

const steps: Tour[] = [
  {
    tour: 'firsttour',
    steps: [
      {
        icon: <>👋</>,
        title: 'Tour 1, Step 1',
        content: <>First tour, first step</>,
        selector: '#tour1-step1',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: '/foo',
        prevRoute: '/bar',
      },
      {
        icon: <>🎉</>,
        title: 'Tour 1, Step 2',
        content: <>First tour, second step</>,
        selector: '#tour1-step2',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        viewportID: 'scrollable-viewport',
      },
    ],
  },
  {
    tour: 'secondtour',
    steps: [
      {
        icon: <>🚀</>,
        title: 'Second tour, Step 1',
        content: <>Second tour, first step!</>,
        selector: '#nextstep-step1',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: '/foo',
        prevRoute: '/bar',
      },
    ],
  },
];

export default steps;`}
        />

        <h2 className="text-2xl font-semibold mt-6">Targeting Elements</h2>
        <p className="text-lg">
          Target any element in your app using the element's <code>id</code> attribute.
          The <code>selector</code> property in your step should match the <code>id</code>{' '}
          of the element you want to target.
        </p>

        <CodeBlock language="tsx" code={`<div id="nextstep-step1">Onboard Step</div>`} />

        <h2 className="text-2xl font-semibold mt-6">Interactive Demo</h2>
        <p className="text-lg">
          Here's an interactive demo of a tour with two steps. Click the button below to
          start the tour.
        </p>

        <div className="flex flex-col gap-4 p-6 border rounded-md">
          <div className="flex gap-4">
            <div
              id="docs-demo-step1"
              className="p-4 bg-primary/10 rounded-md border border-primary/20 w-1/2"
            >
              This is the first step (ID: docs-demo-step1)
            </div>
            <div
              id="docs-demo-step2"
              className="p-4 bg-secondary/10 rounded-md border border-secondary/20 w-1/2"
            >
              This is the second step (ID: docs-demo-step2)
            </div>
          </div>

          <Button onClick={() => startNextStep('docs-demo')} className="w-fit mt-4">
            Start Demo Tour
          </Button>

          <CodeBlock
            language="tsx"
            code={`// In your steps.tsx file
{
  tour: 'docs-demo',
  steps: [
    {
      icon: <>👋</>,
      title: 'First Step',
      content: <>This is the first step of our demo tour</>,
      selector: '#docs-demo-step1',
      side: 'bottom',
      showControls: true,
      showSkip: true,
      pointerPadding: 10,
      pointerRadius: 10,
    },
    {
      icon: <>🎉</>,
      title: 'Second Step',
      content: <>This is the second step of our demo tour</>,
      selector: '#docs-demo-step2',
      side: 'bottom',
      showControls: true,
      showSkip: true,
      pointerPadding: 10,
      pointerRadius: 10,
    },
  ],
},

// In your component
import { useNextStep } from 'nextstepjs';

const YourComponent = () => {
  const { startNextStep } = useNextStep();
  
  return (
    <Button onClick={() => startNextStep('docs-demo')}>
      Start Demo Tour
    </Button>
  );
};`}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '')}/basic-setup`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Basic Setup
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '')}/useNextStep`}>
          <Button variant="default">
            <FaArrowRight className="w-4 h-4 mr-2" /> useNextStep Hook
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TourSteps;
