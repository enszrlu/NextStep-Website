'use client';

import CodeBlock from '@/components/CodeBlock';
import { useNextStep } from 'nextstepjs';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ValidationProps {
  framework?: 'next.js' | 'react' | 'react-router' | 'remix';
}

const Validation = ({ framework = 'next.js' }: ValidationProps) => {
  const { startNextStep } = useNextStep();

  return (
    <div className="container mx-auto py-12 max-w-screen-2xl flex flex-col gap-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">Validation</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Add validation logic to your onboarding tours to ensure users complete required
          actions before proceeding to the next step.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg mb-4">
            Validation allows you to create more interactive and guided onboarding
            experiences by ensuring users complete specific actions before moving to the
            next step. This is particularly useful for:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li>Form validations during onboarding</li>
            <li>Ensuring users click specific buttons or interact with elements</li>
            <li>Verifying user input before proceeding</li>
            <li>Ensuring users have permissions to access certain features</li>
            <li>And many more! Creating more engaging step-by-step tutorials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How Validation Works</h2>
          <p className="text-lg mb-4">
            Validation in NextStep works through custom card components that can validate
            user actions before allowing progression to the next step. When validation
            fails, users receive feedback and cannot proceed until they complete the
            required action.
            <br />
            <br />
            We chose this approach because it allows you to create your own validation
            logic, options are limitless.
          </p>
          <Button size="lg" onClick={() => startNextStep('validation-demo')}>
            Start Validation Demo
          </Button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Creating a Validation Card Component
          </h2>
          <p className="text-lg mb-4">
            To implement validation, you'll need to create a custom card component that
            includes validation logic. Here's an example:
          </p>

          <CodeBlock
            language="tsx"
            code={`'use client';

import { CardComponentProps, useNextStep } from 'nextstepjs';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import validation from '@/lib/validation';
import { toast } from '@/hooks/use-toast';

const CardWithValidation: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
  const { currentTour } = useNextStep();

  // Get the validation function for the current step
  const validate =
    currentTour && validation[currentTour] && validation[currentTour][currentStep]
      ? validation[currentTour][currentStep].validation
      : () => true;

  // Get the validation message for the current step
  const validationMessage =
    currentTour && validation[currentTour] && validation[currentTour][currentStep]
      ? validation[currentTour][currentStep].validationMessage
      : '';

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p>{step.title}</p>
          {step.icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{step.content}</p>
        {arrow}
      </CardContent>
      <CardFooter className="flex flex-col">
        {step.showControls && (
          <div className="flex justify-between w-full">
            <Button onClick={prevStep} disabled={currentStep === 0} variant="outline">
              Previous
            </Button>
            <Button
              // Validate the current step and if it passes, go to the next step
              // If it fails, show the validation message
              onClick={async () => {
                if (await validate()) {
                  nextStep();
                } else {
                  toast({
                    title: validationMessage,
                    variant: 'destructive',
                  });
                }
              }}
            >
              {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
        {step.showSkip && (
          <Button onClick={skipTour} variant={'ghost'} className="w-full">
            Skip Tour
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardWithValidation;
`}
          />
          <h3 className="text-xl font-semibold mb-3 mt-6">Example Validations</h3>
          <p className="text-lg mb-4">
            This is how you can create your own validation logic.
          </p>
          <CodeBlock
            language="tsx"
            code={`
            interface ValidationStep {
  validation: () => boolean | Promise<boolean>;
  validationMessage: string;
}

interface ValidationTour {
  [stepIndex: number]: ValidationStep;
}

interface ValidationConfig {
  [tourName: string]: ValidationTour;
}

const validation: ValidationConfig = {
  'validation-demo': {
    0: {
      validation: async () => {
        console.log('Validating step 0');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return true;
      },
      validationMessage: 'Step 0 validation failed',
    },
    1: {
      validation: () => {
        console.log('Validating step 1');
        // Check window width return true if width is greater than 768
        return window.innerWidth > 768;
      },
      validationMessage: 'Window width must be greater than 768',
    },
    2: {
      validation: () => {
        console.log('Validating step 2');
        // Check if window width is less than 768
        return window.innerWidth < 768;
      },
      validationMessage: 'Window width must be less than 768',
    },
  },
};

export default validation;`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Using Validation Card Component</h2>
          <p className="text-lg mb-4">
            To use your validation card component, pass it to the{' '}
            <code>cardComponent</code> prop of the NextStep component:
          </p>

          <CodeBlock
            language="tsx"
            code={`import { ${
              framework === 'next.js' ? 'NextStep' : 'NextStepReact'
            }, NextStepProvider } from 'nextstepjs';
import CardWithValidation from './CardWithValidation';
import steps from './steps';

function MyApp() {
  return (
    <NextStepProvider>
      <${framework === 'next.js' ? 'NextStep' : 'NextStepReact'} 
        steps={steps} 
        cardComponent={CardWithValidation}
      >
        {/* Your app content */}
      </${framework === 'next.js' ? 'NextStep' : 'NextStepReact'}>
    </NextStepProvider>
  );
}`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Validation Examples</h2>

          <h3 className="text-xl font-semibold mb-3">Form Field Validation</h3>
          <CodeBlock
            language="tsx"
            code={`const formValidation = {
  validation: () => {
    const input = document.getElementById('username') as HTMLInputElement;
    return input && input.value.length >= 3;
  },
  validationMessage: 'Please enter a username with at least 3 characters.',
};`}
          />

          <h3 className="text-xl font-semibold mb-3 mt-6">Button Click Validation</h3>
          <CodeBlock
            language="tsx"
            code={`const buttonClickValidation = {
  validation: () => {
    return localStorage.getItem('button-clicked') === 'true';
  },
  validationMessage: 'Please click the "Get Started" button to continue.',
};

// In your component, set the flag when button is clicked
const handleButtonClick = () => {
  localStorage.setItem('button-clicked', 'true');
  // Your button logic here
};`}
          />

          <h3 className="text-xl font-semibold mb-3 mt-6">Async Validation</h3>
          <CodeBlock
            language="tsx"
            code={`const asyncValidation = {
  validation: async () => {
    try {
      const response = await fetch('/api/validate-user');
      const data = await response.json();
      return data.isValid;
    } catch (error) {
      return false;
    }
  },
  validationMessage: 'Please complete the required verification.',
};`}
          />
        </section>
      </div>
      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/localization`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Localization
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/styling`}>
          <Button variant="default">
            Styling <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Validation;
