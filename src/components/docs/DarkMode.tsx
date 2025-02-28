'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight, FaMoon, FaSun } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface DarkModeProps {
  framework: string;
}

// Example dark mode card component for demonstration
const DarkModeCard = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div
      className={`${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } rounded-lg shadow-lg p-6 max-w-md transition-colors duration-300`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl">{isDarkMode ? '🌙' : '☀️'}</div>
        <h3 className="text-xl font-bold">
          {isDarkMode ? 'Dark Mode Card' : 'Light Mode Card'}
        </h3>
      </div>

      <div className="mb-6">
        This card automatically adapts to {isDarkMode ? 'dark' : 'light'} mode based on
        the current theme setting.
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm">Step 1 of 3</div>

        <div className="flex gap-2">
          <button
            className={`px-4 py-2 ${
              isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
            } rounded`}
          >
            Previous
          </button>

          <button
            className={`px-4 py-2 ${
              isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
            } text-white rounded`}
          >
            Next
          </button>

          <button
            className={`px-4 py-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

const DarkMode = ({ framework = 'next.js' }: DarkModeProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="dark-mode">
        Dark Mode for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        NextStepjs doesn't enforce any specific dark mode implementation, giving you
        complete control over how dark mode works in your {toTitleCase(framework)}{' '}
        application.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">How Dark Mode Works</h2>
        <p className="text-lg">
          Dark mode in NextStepjs is entirely controlled by your application's theme
          system. If you're using custom card components and have placed your NextStep
          component inside a theme provider, dark mode will work seamlessly.
        </p>

        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-md mb-4">
          <p className="font-semibold">Important:</p>
          <p>
            NextStepjs doesn't have its own dark mode toggle or detection. It inherits
            styling from your application's theme context.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4">Using with Theme Providers</h3>
        <p className="text-lg">
          To ensure your NextStepjs tours support dark mode, simply wrap your application
          (including the NextStep component) with your theme provider:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { ${
            framework == 'next.js' ? 'NextStep' : 'NextStepReact'
          }, NextStepProvider } from 'nextstepjs';
import { ThemeProvider } from 'your-theme-provider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NextStepProvider>
        <${framework == 'next.js' ? 'NextStep' : 'NextStepReact'} steps={steps}>
          <Component {...pageProps} />
        </${framework == 'next.js' ? 'NextStep' : 'NextStepReact'}>
      </NextStepProvider>
    </ThemeProvider>
  );
}`}
        />

        <h3 className="text-xl font-semibold mt-6">
          Custom Cards with Dark Mode Support
        </h3>
        <p className="text-lg">
          When creating custom card components, you can add dark mode support by using
          your application's theme context or CSS variables:
        </p>

        <CodeBlock
          language="tsx"
          code={`'use client';

import React from 'react';
import { Step } from 'nextstepjs';
import { useTheme } from 'your-theme-hook'; // Your theme hook

interface DarkModeCardProps {
  step: Step;
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  skipTour: () => void;
  arrow: React.ReactNode;
}

const DarkModeCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}: DarkModeCardProps) => {
  const { isDarkMode } = useTheme(); // Get theme from your context
  
  return (
    <div
      className={\`\${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } rounded-lg shadow-lg p-6 max-w-md\`}
    >
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
              className={\`px-4 py-2 \${
                isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
              } rounded\`}
            >
              Previous
            </button>
          )}
          
          <button
            onClick={nextStep}
            className={\`px-4 py-2 \${
              isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
            } text-white rounded\`}
          >
            {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
          </button>
          
          {step.showSkip && (
            <button
              onClick={skipTour}
              className={\`px-4 py-2 \${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }\`}
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkModeCard;`}
        />

        <h3 className="text-xl font-semibold mt-6">Example with Tailwind CSS</h3>
        <p className="text-lg">
          If you're using Tailwind CSS with the dark mode class strategy, your custom card
          can use Tailwind's dark variant:
        </p>

        <CodeBlock
          language="tsx"
          code={`'use client';

import React from 'react';
import { Step } from 'nextstepjs';

interface TailwindDarkModeCardProps {
  step: Step;
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  skipTour: () => void;
  arrow: React.ReactNode;
}

const TailwindDarkModeCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}: TailwindDarkModeCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg p-6 max-w-md">
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
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              Previous
            </button>
          )}
          
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded"
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

export default TailwindDarkModeCard;`}
        />

        <h3 className="text-xl font-semibold mt-6">Live Example</h3>
        <p className="text-lg">
          Here's a simple example of a card that changes based on dark mode. Toggle the
          switch below to see how it adapts:
        </p>

        <div className="flex items-center space-x-2 mb-6">
          <Switch
            id="dark-mode-toggle"
            checked={isDarkMode}
            onCheckedChange={setIsDarkMode}
          />
          <Label htmlFor="dark-mode-toggle">
            {isDarkMode ? (
              <span className="flex items-center">
                <FaMoon className="mr-2" /> Dark Mode
              </span>
            ) : (
              <span className="flex items-center">
                <FaSun className="mr-2" /> Light Mode
              </span>
            )}
          </Label>
        </div>

        <div className="flex justify-center mb-6">
          <DarkModeCard isDarkMode={isDarkMode} />
        </div>

        <h3 className="text-xl font-semibold mt-6">With Shadcn UI</h3>
        <p className="text-lg">
          If you're using Shadcn UI (which uses CSS variables for theming), your custom
          card will automatically adapt to dark mode when your application's theme
          changes:
        </p>

        <CodeBlock
          language="tsx"
          code={`'use client';

import React from 'react';
import { Step } from 'nextstepjs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ShadcnDarkModeCardProps {
  step: Step;
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  skipTour: () => void;
  arrow: React.ReactNode;
}

const ShadcnDarkModeCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}: ShadcnDarkModeCardProps) => {
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

export default ShadcnDarkModeCard;`}
        />

        <h2 className="text-2xl font-semibold mt-6">Overlay in Dark Mode</h2>
        <p className="text-lg">
          When using dark mode, you might want to adjust the overlay color to better match
          your dark theme. You can do this using the <code>shadowRgb</code> prop:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { useTheme } from 'your-theme-hook';

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useTheme();
  
  return (
    <NextStepProvider>
      <NextStep 
        steps={steps} 
        shadowRgb={isDarkMode ? "255, 255, 255" : "0, 0, 0"}
        shadowOpacity={isDarkMode ? "0.15" : "0.2"}
      >
        <Component {...pageProps} />
      </NextStep>
    </NextStepProvider>
  );
}`}
        />

        <p className="text-lg mt-4">
          In dark mode, you might want to use a lighter shadow color with lower opacity
          for a more subtle effect.
        </p>
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/styling`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Styling
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/animations`}>
          <Button variant="default">
            Animations <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DarkMode;
