'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight, FaKeyboard } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';

interface KeyboardProps {
  framework: string;
}

const Keyboard = ({ framework = 'next.js' }: KeyboardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="keyboard">
        Keyboard Navigation for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        NextStep provides built-in keyboard navigation, a unique feature that sets it
        apart from other onboarding libraries. This allows users to navigate through your
        tours using keyboard shortcuts, enhancing accessibility and user experience.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Default Keyboard Shortcuts</h2>
        <p className="text-lg">
          NextStep supports the following keyboard shortcuts by default:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded-md flex flex-col items-center">
            <div className="text-3xl mb-2">→</div>
            <h3 className="text-xl font-semibold">Right Arrow</h3>
            <p className="text-center mt-2">Move to the next step in the tour</p>
          </div>

          <div className="p-4 border rounded-md flex flex-col items-center">
            <div className="text-3xl mb-2">←</div>
            <h3 className="text-xl font-semibold">Left Arrow</h3>
            <p className="text-center mt-2">Move to the previous step in the tour</p>
          </div>

          <div className="p-4 border rounded-md flex flex-col items-center">
            <div className="text-3xl mb-2">Esc</div>
            <h3 className="text-xl font-semibold">Escape</h3>
            <p className="text-center mt-2">Skip the current tour</p>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-md mt-2">
          <p className="flex items-center gap-2">
            <FaKeyboard className="h-5 w-5" />
            <span className="text-sm text-muted-foreground">
              <strong>Pro Tip:</strong> Keyboard navigation makes your tours more
              accessible and provides a smoother experience for power users who prefer
              keyboard controls.
            </span>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Disabling Keyboard Navigation</h2>
        <p className="text-lg">
          While keyboard navigation is enabled by default, you can disable it for specific
          steps using the <code>blockKeyboardControl</code> property in your step
          configuration:
        </p>

        <CodeBlock
          language="tsx"
          code={`// In your steps.tsx file
{
  tour: 'myTour',
  steps: [
    {
      icon: <>👋</>,
      title: 'Welcome',
      content: <>This is the first step</>,
      selector: '#welcome-element',
      side: 'top',
      // Keyboard navigation works normally for this step
    },
    {
      icon: <>✏️</>,
      title: 'Form Input',
      content: <>Please fill out this form</>,
      selector: '#form-element',
      side: 'bottom',
      // Disable keyboard navigation for this step
      blockKeyboardControl: true,
    },
    {
      icon: <>🎉</>,
      title: 'Completed',
      content: <>You've completed the tour!</>,
      selector: '#complete-element',
      side: 'right',
      // Keyboard navigation works normally for this step
    },
  ],
}`}
        />
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/callbacks`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Callbacks
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/localization`}>
          <Button variant="default">
            <FaArrowRight className="w-4 h-4 mr-2" /> Localization
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Keyboard;
