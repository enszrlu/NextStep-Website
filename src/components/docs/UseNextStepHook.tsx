'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';
import { useNextStep } from 'nextstepjs';

interface UseNextStepHookProps {
  framework: string;
}

const UseNextStepHook = ({ framework = 'next.js' }: UseNextStepHookProps) => {
  const { startNextStep } = useNextStep();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="useNextStep-hook">
        useNextStep Hook for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        The useNextStep hook allows you to control the tour from anywhere in your{' '}
        {toTitleCase(framework)} application.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p className="text-lg">
          Import the useNextStep hook from nextstepjs and use it to control your tours
          programmatically:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { useNextStep } from 'nextstepjs';

function YourComponent() {
  const { startNextStep, closeNextStep } = useNextStep();
  
  const handleStartTour = () => {
    startNextStep('tourName');
  };
  
  const handleCloseTour = () => {
    closeNextStep();
  };
  
  return (
    <div>
      <button onClick={handleStartTour}>Start Tour</button>
      <button onClick={handleCloseTour}>Close Tour</button>
    </div>
  );
}`}
        />

        <h2 className="text-2xl font-semibold mt-6">Available Methods</h2>
        <p className="text-lg">The useNextStep hook provides the following methods:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">startNextStep</h3>
            <p className="mt-2">
              Starts a specific tour by name. If no name is provided, it will start the
              first tour in your steps array.
            </p>
            <CodeBlock
              language="tsx"
              code={`// Start a specific tour
startNextStep('tourName');

// Start the first tour in the steps array
startNextStep();`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">closeNextStep</h3>
            <p className="mt-2">Closes the currently active tour.</p>
            <CodeBlock
              language="tsx"
              code={`// Close the active tour
closeNextStep();`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">nextStep</h3>
            <p className="mt-2">Advances to the next step in the current tour.</p>
            <CodeBlock
              language="tsx"
              code={`// Go to the next step
nextStep();`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">prevStep</h3>
            <p className="mt-2">Goes back to the previous step in the current tour.</p>
            <CodeBlock
              language="tsx"
              code={`// Go to the previous step
prevStep();`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">goToStep</h3>
            <p className="mt-2">Jumps to a specific step index in the current tour.</p>
            <CodeBlock
              language="tsx"
              code={`// Go to step index 2
goToStep(2);`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">skipTour</h3>
            <p className="mt-2">Skips the current tour.</p>
            <CodeBlock
              language="tsx"
              code={`// Skip the current tour
skipTour();`}
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Practical Example</h2>
        <p className="text-lg">
          Here's a practical example of using the useNextStep hook to create a help button
          that starts a tour:
        </p>

        <CodeBlock
          language="tsx"
          code={`'use client';

import { useNextStep } from 'nextstepjs';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

export function HelpButton() {
  const { startNextStep } = useNextStep();
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => startNextStep('helpTour')}
      aria-label="Help"
    >
      <HelpCircle className="h-4 w-4" />
    </Button>
  );
}`}
        />

        <h2 className="text-2xl font-semibold mt-6">Conditional Tour Start</h2>
        <p className="text-lg">
          You can use the useNextStep hook with React's useEffect to start a tour when
          certain conditions are met:
        </p>

        <CodeBlock
          language="tsx"
          code={`'use client';

import { useEffect } from 'react';
import { useNextStep } from 'nextstepjs';

export function OnboardingWrapper({ children, isNewUser }) {
  const { startNextStep } = useNextStep();
  
  useEffect(() => {
    // Start the onboarding tour for new users
    if (isNewUser) {
      startNextStep('onboardingTour');
    }
  }, [isNewUser, startNextStep]);
  
  return <>{children}</>;
}`}
        />

        <p className="text-lg">
          You have successfully learned about the basic NextStep features and setup. Now,
          let's learn more about advanced features that distinguish NextStep from other
          tour libraries.
        </p>
      </div>

      <div className="flex justify-between">
        <Link
          href={`/docs/${framework.replace('.', '')}/tour-steps`}
          id="useNextStep-demo-step1"
        >
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Tour Steps
          </Button>
        </Link>
        <Link
          href={`/docs/${framework.replace('.', '')}/routing`}
          id="useNextStep-demo-step2"
        >
          <Button variant="default">
            <FaArrowRight className="w-4 h-4 mr-2" /> Routing During Tour
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UseNextStepHook;
