'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CodeBlock from '@/components/CodeBlock';

interface ApiProps {
  framework: string;
}

const Api = ({ framework = 'next.js' }: ApiProps) => {
  // Determine the component name based on framework
  const componentName = framework === 'next.js' ? 'NextStep' : 'NextStepReact';

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="api-reference">
        API Reference for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        Detailed information about NextStepjs components, props, and hooks for{' '}
        {toTitleCase(framework)} applications.
      </p>

      <div className="flex flex-col gap-8">
        <section id="component-props">
          <h2 className="text-2xl font-semibold mb-4">{componentName} Props</h2>
          <p className="text-lg mb-4">
            The {componentName} component is the main component that wraps your
            application and provides the onboarding functionality.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Prop</TableHead>
                <TableHead className="w-[300px]">Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>children</TableCell>
                <TableCell>React.ReactNode</TableCell>
                <TableCell>Your website or application content</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>steps</TableCell>
                <TableCell>Tour[]</TableCell>
                <TableCell>
                  Array of Tour objects defining each step of the onboarding
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>navigationAdapter</TableCell>
                <TableCell>NavigationAdapter</TableCell>
                <TableCell>
                  Optional. Router adapter for navigation (defaults to{' '}
                  {framework === 'next.js' ? 'Next.js' : 'window adapter'})
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>showNextStep</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>Controls visibility of the onboarding overlay</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>shadowRgb</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  RGB values for the shadow color surrounding the target area
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>shadowOpacity</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  Opacity value for the shadow surrounding the target area
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>cardComponent</TableCell>
                <TableCell>React.ComponentType</TableCell>
                <TableCell>Custom card component to replace the default one</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>cardTransition</TableCell>
                <TableCell>Transition</TableCell>
                <TableCell>
                  Framer Motion transition object for step transitions
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onStart</TableCell>
                <TableCell>(tourName?: string | null) =&gt; void</TableCell>
                <TableCell>Callback function triggered when the tour starts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onStepChange</TableCell>
                <TableCell>(step: number, tourName?: string | null) =&gt; void</TableCell>
                <TableCell>Callback function triggered when the step changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onComplete</TableCell>
                <TableCell>(tourName?: string | null) =&gt; void</TableCell>
                <TableCell>Callback function triggered when the tour completes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onSkip</TableCell>
                <TableCell>(step: number, tourName?: string | null) =&gt; void</TableCell>
                <TableCell>
                  Callback function triggered when the user skips the tour
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>clickThroughOverlay</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  If true, overlay background is clickable, default is false
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disableConsoleLogs</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  Optional. If true, console logs are disabled, default is false
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>scrollToTop</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  Optional. If true, the page will scroll to the top when the tour starts,
                  default is true
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>noInViewScroll</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  Optional. If true, the page will not scroll to the target element when
                  it is in view, default is false
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section id="step-object">
          <h2 className="text-2xl font-semibold mb-4">Step Object</h2>
          <p className="text-lg mb-4">
            Each step in a tour is defined by a Step object with the following properties:
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Property</TableHead>
                <TableHead className="w-[300px]">Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>icon</TableCell>
                <TableCell>React.ReactNode | string | null</TableCell>
                <TableCell>
                  An icon or element to display alongside the step title
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>title</TableCell>
                <TableCell>string</TableCell>
                <TableCell>The title of your step</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>content</TableCell>
                <TableCell>React.ReactNode</TableCell>
                <TableCell>The main content or body of the step</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>selector</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  Optional. A string used to target an `id` that this step refers to
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>side</TableCell>
                <TableCell>
                  "top" | "bottom" | "left" | "right" | "top-left" | "top-right" |
                  "bottom-left" | "bottom-right" | "left-top" | "left-bottom" |
                  "right-top" | "right-bottom"
                </TableCell>
                <TableCell>
                  Optional. Determines where the tooltip should appear relative to the
                  selector
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>showControls</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  Optional. Determines whether control buttons should be shown if using
                  the default card
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>showSkip</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  Optional. Determines whether skip button should be shown if using the
                  default card
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>blockKeyboardControl</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  Optional. Determines whether keyboard control should be blocked
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pointerPadding</TableCell>
                <TableCell>number</TableCell>
                <TableCell>
                  Optional. The padding around the pointer highlighting the target element
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pointerRadius</TableCell>
                <TableCell>number</TableCell>
                <TableCell>
                  Optional. The border-radius of the pointer highlighting the target
                  element
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>nextRoute</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  Optional. The route to navigate to when moving to the next step
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>prevRoute</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  Optional. The route to navigate to when moving to the previous step
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>viewportID</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  Optional. The id of the viewport to target. Used with NextStepViewport
                  component.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section id="tour-object">
          <h2 className="text-2xl font-semibold mb-4">Tour Object</h2>
          <p className="text-lg mb-4">
            NextStepjs supports multiple tours, each defined by a Tour object:
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Property</TableHead>
                <TableHead className="w-[300px]">Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>tour</TableCell>
                <TableCell>string</TableCell>
                <TableCell>The unique identifier for this tour</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>steps</TableCell>
                <TableCell>Step[]</TableCell>
                <TableCell>
                  Array of Step objects defining each step of this tour
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section id="use-next-step-hook">
          <h2 className="text-2xl font-semibold mb-4">useNextStep Hook</h2>
          <p className="text-lg mb-4">
            The useNextStep hook provides programmatic control over the tour. You can use
            it to start, stop, skip, or navigate through steps.
          </p>
          <Table>
            <TableCaption>useNextStep Hook Return Values</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Property</TableHead>
                <TableHead className="w-[300px]">Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>startNextStep</TableCell>
                <TableCell>(tourName: string) =&gt; void</TableCell>
                <TableCell>Starts the specified tour</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>closeNextStep</TableCell>
                <TableCell>() =&gt; void</TableCell>
                <TableCell>Stops the current tour</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>currentTour</TableCell>
                <TableCell>string | null</TableCell>
                <TableCell>The name of the current tour</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>currentStep</TableCell>
                <TableCell>number</TableCell>
                <TableCell>The current step index</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>setCurrentStep</TableCell>
                <TableCell>(step: number, delay?: number) =&gt; void</TableCell>
                <TableCell>Sets the current step index with optional delay</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>isNextStepVisible</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>Whether the tour overlay is currently visible</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section id="navigation-adapter">
          <h2 className="text-2xl font-semibold mb-4">Navigation Adapter</h2>
          <p className="text-lg mb-4">
            NextStepjs 2.0 introduces a framework-agnostic routing system through
            navigation adapters. Each adapter is packaged separately to minimize bundle
            size.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Property</TableHead>
                <TableHead className="w-[300px]">Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>push</TableCell>
                <TableCell>(path: string) =&gt; void</TableCell>
                <TableCell>Function to navigate to a new route</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>getCurrentPath</TableCell>
                <TableCell>() =&gt; string</TableCell>
                <TableCell>Function to get the current route path</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>

      <div className="flex justify-between mt-8">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/animations`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Animations
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Api;
