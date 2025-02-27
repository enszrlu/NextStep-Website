'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';

interface CallbacksProps {
  framework: string;
}

const Callbacks = ({ framework = 'next.js' }: CallbacksProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="callbacks">
        Callbacks for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        NextStep provides a powerful callbacks system that allows you to execute custom
        code at various points during a tour. This enables you to create dynamic,
        interactive tours that respond to user actions.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Available Callbacks</h2>
        <p className="text-lg">
          NextStep supports the following callbacks that you can use to customize your
          tour behavior:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">onStart</h3>
            <p className="mt-2">
              Called when a tour starts. Receives the tour name as a parameter.
            </p>
            <CodeBlock
              language="tsx"
              code={`onStart: (tourName: string | null) => {
  console.log(\`Tour \${tourName} started\`);
  // Track analytics, set user state, etc.
}`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">onComplete</h3>
            <p className="mt-2">
              Called when a tour is completed. Receives the tour name as a parameter.
            </p>
            <CodeBlock
              language="tsx"
              code={`onComplete: (tourName: string | null) => {
  console.log(\`Tour \${tourName} completed\`);
  // Update user preferences, show completion message, etc.
}`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">onSkip</h3>
            <p className="mt-2">
              Called when a user skips a tour. Receives the step index and tour name as
              parameters.
            </p>
            <CodeBlock
              language="tsx"
              code={`onSkip: (step: number, tourName: string | null) => {
  console.log(\`Tour \${tourName} skipped at step \${step}\`);
  // Log skip event, offer to resume later, etc.
}`}
            />
          </div>

          <div className="p-4 border rounded-md">
            <h3 className="text-xl font-semibold">onStepChange</h3>
            <p className="mt-2">
              Called when the current step changes. Receives the step index and tour name
              as parameters.
            </p>
            <CodeBlock
              language="tsx"
              code={`onStepChange: (step: number, tourName: string | null) => {
  console.log(\`Tour \${tourName} moved to step \${step}\`);
  // Update UI, trigger animations, etc.
}`}
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Using Callbacks</h2>
        <p className="text-lg">
          You can provide callbacks when initializing the NextStep component:
        </p>

        {framework === 'next.js' && (
          <CodeBlock
            language="tsx"
            code={`// In your layout.tsx or app.tsx
import { NextStepProvider, NextStep } from 'nextstepjs';
import steps from '@/lib/steps';

export default function RootLayout({ children }) {
  return (
    <NextStepProvider>
      <NextStep 
        steps={steps}
        onStart={(tourName) => {
          console.log(\`Tour \${tourName} started\`);
        }}
        onComplete={(tourName) => {
          console.log(\`Tour \${tourName} completed\`);
        }}
        onSkip={(step, tourName) => {
          console.log(\`Tour \${tourName} skipped at step \${step}\`);
        }}
        onStepChange={(step, tourName) => {
          console.log(\`Step changed to \${step} in \${tourName}\`);
        }}
      >
        {children}
      </NextStep>
    </NextStepProvider>
  );
}`}
          />
        )}

        {framework !== 'next.js' && (
          <CodeBlock
            language="tsx"
            code={`// In your root component
import { NextStepProvider, NextStepReact } from 'nextstepjs';
import steps from './steps';

function App() {
  return (
    <NextStepProvider>
      <NextStepReact 
        steps={steps}
        onStart={(tourName) => {
          console.log(\`Tour \${tourName} started\`);
        }}
        onComplete={(tourName) => {
          console.log(\`Tour \${tourName} completed\`);
        }}
        onSkip={(step, tourName) => {
          console.log(\`Tour \${tourName} skipped at step \${step}\`);
        }}
        onStepChange={(step, tourName) => {
          console.log(\`Step changed to \${step} in \${tourName}\`);
        }}
      >
        <YourAppContent />
      </NextStepReact>
    </NextStepProvider>
  );
}`}
          />
        )}

        <h2 className="text-2xl font-semibold mt-6">Practical Examples</h2>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Tracking User Progress</h3>
          <p className="text-lg">
            Use callbacks to track user progress through your onboarding tour:
          </p>

          <CodeBlock
            language="tsx"
            code={`// Track user progress with analytics
const trackProgress = {
  onStart: (tourName) => {
    analytics.track('tour_started', { tourName });
  },
  onStepChange: (step, tourName) => {
    analytics.track('tour_step_viewed', { 
      tourName, 
      stepIndex: step,
      stepName: \`\${tourName}_step_\${step}\`
    });
  },
  onComplete: (tourName) => {
    analytics.track('tour_completed', { tourName });
    // Update user profile to mark onboarding as complete
    updateUserProfile({ onboardingComplete: true });
  },
  onSkip: (step, tourName) => {
    analytics.track('tour_skipped', { tourName, stepIndex: step });
  }
};

// Then use it in your NextStep component
<NextStep 
  steps={steps}
  {...trackProgress}
>
  {children}
</NextStep>`}
          />

          <h3 className="text-xl font-semibold mt-4">Form Validation</h3>
          <p className="text-lg">
            Use the <code>onStepChange</code> callback to validate form inputs when a user
            moves to a new step:
          </p>

          <CodeBlock
            language="tsx"
            code={`// Form validation when step changes
const formValidation = {
  onStepChange: (step, tourName) => {
    // Validate the previous step's inputs
    if (step === 2 && tourName === 'onboardingTour') {
      const usernameField = document.getElementById('username');
      if (!usernameField || !usernameField.value) {
        // Log validation failure
        console.warn('Username field was not completed');
      }
    }
    
    if (step === 3 && tourName === 'onboardingTour') {
      const emailField = document.getElementById('email');
      if (!emailField || !validateEmail(emailField.value)) {
        // Log validation failure
        console.warn('Email field was not completed or is invalid');
      }
    }
  }
};

// Then use it in your NextStep component
<NextStep 
  steps={steps}
  {...formValidation}
>
  {children}
</NextStep>`}
          />

          <h3 className="text-xl font-semibold mt-4">Dynamic Content</h3>
          <p className="text-lg">
            Use the <code>onStepChange</code> callback to update UI elements based on the
            current step:
          </p>

          <CodeBlock
            language="tsx"
            code={`// Dynamic content based on current step
const [highlightedSection, setHighlightedSection] = useState(null);

const dynamicContent = {
  onStepChange: (step, tourName) => {
    // Update UI based on the current step
    if (tourName === 'featureTour') {
      switch(step) {
        case 0:
          setHighlightedSection('dashboard');
          break;
        case 1:
          setHighlightedSection('sidebar');
          break;
        case 2:
          setHighlightedSection('settings');
          break;
        default:
          setHighlightedSection(null);
      }
    }
  },
  onComplete: () => {
    // Reset UI when tour ends
    setHighlightedSection(null);
  },
  onSkip: () => {
    // Reset UI when tour is skipped
    setHighlightedSection(null);
  }
};

// Then use it in your NextStep component
<NextStep 
  steps={steps}
  {...dynamicContent}
>
  {children}
</NextStep>`}
          />
        </div>

        <div className="bg-muted p-4 rounded-md mt-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Callbacks must be defined in a client component. Ensure
            that your component is using 'use client' at the top.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/viewport`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> NextStepViewport
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/keyboard`}>
          <Button variant="default">
            <FaArrowRight className="w-4 h-4 mr-2" /> Keyboard Navigation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Callbacks;
