'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight, FaPalette } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';
import CustomCard from '../example-cards/CustomCard';
import ShadcnCustomCard from '../example-cards/ShadCnCard';

interface StylingProps {
  framework: string;
}

const Styling = ({ framework = 'next.js' }: StylingProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="styling">
        Styling for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        NextStepjs is fully customizable, allowing you to match the look and feel of your{' '}
        {toTitleCase(framework)} application. This guide explains how to customize the
        appearance of your tours.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Custom Card Components</h2>
        <p className="text-lg">
          One of the most powerful customization features in NextStepjs is the ability to
          provide your own card component. This allows you to completely control the
          appearance of tour steps.
        </p>

        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-md mb-4">
          <p className="font-semibold">Important:</p>
          <p>
            Custom Card Components must be client components. Make sure to add the "use
            client" directive at the top of your component file.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4">Basic Custom Card</h3>
        <p className="text-lg">Here's an example of a basic custom card component:</p>

        <CodeBlock
          language="tsx"
          code={`'use client';

import React from 'react';
import { Step } from 'nextstepjs';

interface CustomCardProps {
  step: Step;
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  skipTour: () => void;
  arrow: React.ReactNode;
}

const CustomCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}: CustomCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md">
      <div className="flex items-center gap-3 mb-4">
        {step.icon && <div className="text-2xl">{step.icon}</div>}
        <h3 className="text-xl font-bold">{step.title}</h3>
      </div>
      
      <div className="mb-6">{step.content}</div>
      
      {arrow}
      
      <div className="flex justify-between items-center">
        <div className="text-sm">
          Step {currentStep + 1} of {totalSteps}
        </div>
        
        <div className="flex gap-2">
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
            >
              Previous
            </button>
          )}
          
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
          </button>
          
          {step.showSkip && (
            <button
              onClick={skipTour}
              className="px-4 py-2 text-gray-500 dark:text-gray-400"
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;`}
        />

        <CustomCard
          step={{
            icon: <>🚀</>,
            title: 'Custom Card Component',
            content: (
              <span>
                This is how example custom card component looks like.
                <br />
                <br />
                You can copy & modify it to create your own card component.
              </span>
            ),
            showControls: true,
            showSkip: true,
          }}
          currentStep={0}
          totalSteps={2}
          nextStep={() => {}}
          prevStep={() => {}}
          skipTour={() => {}}
          arrow={<></>}
        />

        <h3 className="text-xl font-semibold mt-6">Using Your Custom Card</h3>
        <p className="text-lg">
          To use your custom card component, pass it to the <code>cardComponent</code>{' '}
          prop of the
          <code>NextStep</code> component:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { ${
            framework == 'next.js' ? 'NextStep' : 'NextStepReact'
          }, NextStepProvider } from 'nextstepjs';
import CustomCard from './CustomCard';

function MyApp({ Component, pageProps }) {
  return (
    <NextStepProvider>
      <${
        framework == 'next.js' ? 'NextStep' : 'NextStepReact'
      } steps={steps} cardComponent={CustomCard}>
        <Component {...pageProps} />
      </${framework == 'next.js' ? 'NextStep' : 'NextStepReact'}>
    </NextStepProvider>
  );
}`}
        />

        <h3 className="text-xl font-semibold mt-6">Custom Card with Shadcn UI</h3>
        <p className="text-lg">
          Here's an example of a custom card component using Shadcn UI components:
        </p>

        <CodeBlock
          language="tsx"
          code={`'use client';

import React from 'react';
import { Step } from 'nextstepjs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ShadcnCustomCardProps {
  step: Step;
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  skipTour: () => void;
  arrow: React.ReactNode;
}

const ShadcnCustomCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}: ShadcnCustomCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {step.icon && <span>{step.icon}</span>}
          {step.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="mb-2">{step.content}</div>
        {arrow}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          {currentStep + 1} / {totalSteps}
        </div>
        
        <div className="flex gap-2">
          {currentStep > 0 && (
            <Button variant="outline" size="sm" onClick={prevStep}>
              Previous
            </Button>
          )}
          
          <Button size="sm" onClick={nextStep}>
            {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
          </Button>
          
          {step.showSkip && (
            <Button variant="ghost" size="sm" onClick={skipTour}>
              Skip
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ShadcnCustomCard;`}
        />
        <ShadcnCustomCard
          step={{
            icon: <>🚀</>,
            title: 'Custom Card Component',
            content: (
              <p>
                This is how example shadcn card component looks like.
                <br />
                <br />
                You can copy & modify it to create your own card component.
              </p>
            ),
            showControls: true,
            showSkip: true,
          }}
          currentStep={0}
          totalSteps={2}
          nextStep={() => {}}
          prevStep={() => {}}
          skipTour={() => {}}
          arrow={<></>}
        />

        <h2 className="text-2xl font-semibold mt-6">Customizing the Overlay</h2>
        <p className="text-lg">
          NextStepjs allows you to customize the overlay that appears behind the tour
          steps. You can change the shadow color and opacity using the{' '}
          <code>shadowRgb</code> and <code>shadowOpacity</code> props:
        </p>

        <CodeBlock
          language="tsx"
          code={`<${framework == 'next.js' ? 'NextStep' : 'NextStepReact'}
  steps={steps}
  shadowRgb="0, 0, 0"     // Default is "0, 0, 0" (black)
  shadowOpacity="0.2"     // Default is "0.2" (20% opacity)
>
  {children}
</${framework == 'next.js' ? 'NextStep' : 'NextStepReact'}>`}
        />

        <p className="text-lg mt-4">
          You can use any RGB color value for <code>shadowRgb</code>. <br />
          For example:
        </p>

        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
          <li>
            <code>shadowRgb="0, 0, 0"</code> - Black overlay
          </li>
          <li>
            <code>shadowRgb="0, 0, 255"</code> - Blue overlay
          </li>
          <li>
            <code>shadowRgb="255, 0, 0"</code> - Red overlay
          </li>
          <li>
            <code>shadowRgb="76, 29, 149"</code> - Purple overlay
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-md mt-4">
          <p className="flex items-center gap-2">
            <FaPalette className="h-5 w-5" />
            <span className="text-sm text-muted-foreground">
              <strong>Pro Tip:</strong> For a more subtle effect, use a darker color with
              a lower opacity. For a more dramatic effect, use a brighter color with a
              higher opacity.
            </span>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Pointer Customization</h2>
        <p className="text-lg">
          You can customize the appearance of the pointer (the highlighted area around the
          target element) using the <code>pointerPadding</code> and{' '}
          <code>pointerRadius</code> properties in each step:
        </p>

        <CodeBlock
          language="tsx"
          code={`{
  tour: 'welcome',
  steps: [
    {
      icon: <>👋</>,
      title: 'Welcome',
      content: <>This is the first step</>,
      selector: '#welcome-element',
      side: 'top',
      pointerPadding: 16,    // Padding around the target element (in pixels)
      pointerRadius: 8,      // Border radius of the pointer (in pixels)
    },
    // More steps...
  ],
}`}
        />

        <h2 className="text-2xl font-semibold mt-6">Click-Through Overlay</h2>
        <p className="text-lg">
          By default, the overlay blocks interactions with the underlying page. You can
          allow users to interact with the page during a tour by setting the{' '}
          <code>clickThroughOverlay</code>
          prop to <code>true</code>:
        </p>

        <CodeBlock
          language="tsx"
          code={`<${framework == 'next.js' ? 'NextStep' : 'NextStepReact'}
  steps={steps}
  clickThroughOverlay={true}
>
  {children}
</${framework == 'next.js' ? 'NextStep' : 'NextStepReact'}>`}
        />

        <p className="text-lg mt-4">
          This is useful for tours where you want users to interact with the page while
          following the tour instructions.
        </p>
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/localization`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Localization
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/dark-mode`}>
          <Button variant="default">
            Dark Mode <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Styling;
