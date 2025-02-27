'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight, FaLanguage } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';

interface LocalizationProps {
  framework: string;
}

const Localization = ({ framework = 'next.js' }: LocalizationProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="localization">
        Localization for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        While NextStepjs doesn't have built-in localization, you can easily implement
        multilingual tours in your {framework} application by supplying different steps
        arrays based on the user's language preference.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Basic Localization Approach</h2>
        <p className="text-lg">
          The simplest way to implement localization in NextStepjs is to create separate
          steps arrays for each language and switch between them based on the current
          locale:
        </p>

        <CodeBlock
          language="tsx"
          code={`// Define steps for different languages
const stepsEn = [
  {
    tour: 'welcome',
    steps: [
      {
        icon: <>👋</>,
        title: 'Welcome',
        content: <>This is the first step</>,
        selector: '#welcome-element',
        side: 'top',
      },
      // More steps...
    ],
  },
];

const stepsEs = [
  {
    tour: 'welcome',
    steps: [
      {
        icon: <>👋</>,
        title: 'Bienvenido',
        content: <>Este es el primer paso</>,
        selector: '#welcome-element',
        side: 'top',
      },
      // More steps...
    ],
  },
];

// Use the appropriate steps array based on locale
const MyApp = ({ locale }) => (
  <NextStepProvider>
    <NextStep steps={locale === 'es' ? stepsEs : stepsEn}>
      {/* Your app content */}
    </NextStep>
  </NextStepProvider>
);`}
        />

        <h2 className="text-2xl font-semibold mt-6">Integration with i18n Libraries</h2>
        <p className="text-lg">
          For more robust localization, you can integrate NextStepjs with popular i18n
          libraries like react-i18next or next-intl. This approach allows you to manage
          translations more efficiently:
        </p>

        <h3 className="text-xl font-semibold mt-4">Using react-i18next</h3>
        <CodeBlock
          language="tsx"
          code={`// In your steps.tsx file
import { useTranslation } from 'react-i18next';

export function getLocalizedSteps() {
  const { t } = useTranslation();
  
  return [
    {
      tour: 'welcome',
      steps: [
        {
          icon: <>👋</>,
          title: t('welcome.title', 'Welcome'), // Fallback to English
          content: <>{t('welcome.content', 'This is the first step')}</>,
          selector: '#welcome-element',
          side: 'top',
        },
        // More steps...
      ],
    },
  ];
}

// In your app component
function MyApp() {
  const localizedSteps = getLocalizedSteps();
  
  return (
    <NextStepProvider>
      <NextStep steps={localizedSteps}>
        {/* Your app content */}
      </NextStep>
    </NextStepProvider>
  );
}`}
        />

        <div className="bg-muted p-4 rounded-md mt-4">
          <p className="flex items-center gap-2">
            <FaLanguage className="h-5 w-5" />
            <span className="text-sm text-muted-foreground">
              <strong>Pro Tip:</strong> When using i18n libraries, make sure to wrap your
              steps generation in a function or hook that can access the translation
              context. This ensures that your steps update when the language changes.
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/keyboard`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Keyboard Navigation
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

export default Localization;
