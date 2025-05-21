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

        <h2 className="text-2xl font-semibold mt-6">Available Methods and Properties</h2>
        <p className="text-lg">
          The useNextStep hook provides the following methods and properties:
        </p>

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
`}
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
            <h3 className="text-xl font-semibold">currentTour</h3>
            <p className="mt-2">The name of the current tour (string | null).</p>
            <CodeBlock
              language="tsx"
              code={`// Check the current tour
if (currentTour === 'featureTour') {
  // Do something specific for this tour
}`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">currentStep</h3>
            <p className="mt-2">The current step index (number).</p>
            <CodeBlock
              language="tsx"
              code={`// Get the current step index
console.log(\`Current step: \${currentStep + 1} of \${totalSteps}\`);`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">setCurrentStep</h3>
            <p className="mt-2">Sets the current step index with optional delay.</p>
            <CodeBlock
              language="tsx"
              code={`// Jump to step index 2
setCurrentStep(2);

// Jump to step index 3 with a 500ms delay
setCurrentStep(3, 500);`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">isNextStepVisible</h3>
            <p className="mt-2">
              Whether the tour overlay is currently visible (boolean).
            </p>
            <CodeBlock
              language="tsx"
              code={`// Conditionally render UI based on tour visibility
{isNextStepVisible && (
  <div className="tour-active-indicator">Tour in progress</div>
)}`}
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

        <h2 className="text-2xl font-semibold mt-6">Complete Hook Example</h2>
        <p className="text-lg">
          Here's a complete example showing how to use all the properties and methods of
          the useNextStep hook:
        </p>

        <CodeBlock
          language="tsx"
          code={`'use client';
import { useNextStep } from 'nextstepjs';

export default function TourController() {
  const { 
    startNextStep, 
    closeNextStep, 
    currentTour, 
    currentStep, 
    setCurrentStep, 
    isNextStepVisible 
  } = useNextStep();

  const handleStartTour = () => {
    startNextStep('welcomeTour');
  };

  const handleSkipTour = () => {
    closeNextStep();
  };

  const handleJumpToStep = () => {
    setCurrentStep(2);
  };

  return (
    <div className="tour-controls">
      <button onClick={handleStartTour}>Start Tour</button>
      
      {isNextStepVisible && (
        <>
          <button onClick={handleSkipTour}>Skip Tour</button>
          <button onClick={handleJumpToStep}>Jump to Step 3</button>
          <div className="tour-status">
            <p>Current tour: {currentTour}</p>
            <p>Current step: {currentStep + 1}</p>
          </div>
        </>
      )}
    </div>
  );
}`}
        />

        <p className="text-lg">
          You have successfully learned about the useNextStep hook and how to control
          tours programmatically in your {toTitleCase(framework)} application.
        </p>
      </div>

      <div className="flex justify-between">
        <Link
          href={`/docs/${framework.replace('.', '').replace(' ', '-')}/tour-steps`}
          id="useNextStep-demo-step1"
        >
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Tour Steps
          </Button>
        </Link>
        <Link
          href={`/docs/${framework.replace('.', '').replace(' ', '-')}/routing`}
          id="useNextStep-demo-step2"
        >
          <Button variant="default">
            Routing During Tour <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UseNextStepHook;
