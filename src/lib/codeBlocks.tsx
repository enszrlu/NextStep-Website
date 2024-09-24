const installPackageV1_1 = {
  language: 'bash',
  code: `
# npm
npm i nextstepjs framer-motion

# pnpm
pnpm add nextstepjs framer-motion

# yarn
yarn add nextstepjs framer-motion

# bun
bun add nextstepjs framer-motion
`,
};

const installPackage = {
  language: 'bash',
  code: `
# npm
npm i nextstepjs framer-motion @radix-ui/react-portal

# pnpm
pnpm add nextstepjs framer-motion @radix-ui/react-portal

# yarn
yarn add nextstepjs framer-motion @radix-ui/react-portal

# bun
bun add nextstepjs framer-motion @radix-ui/react-portal
`,
};

const basicSetup = {
  language: 'tsx',
  code: `
import { NextStepProvider, NextStep } from 'nextstepjs';

const steps = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: "👋",
        title: "Welcome",
        content: "Let's get started with NextStep!",
        selector: "#step1",
        side: "right",
        showControls: true,
        showSkip: true
      },
      // More steps...
    ]
  }
];

export default function Layout({ children }) {
  return (
    <NextStepProvider>
      <NextStep steps={steps}>
        {children}
      </NextStep>
    </NextStepProvider>
  );
}
`,
};
const basicSetupShorter = {
  language: 'tsx',
  code: `
import { NextStepProvider, NextStep } from 'nextstepjs';

export default function Layout({ children }) {
  return (
    <NextStepProvider>
      <NextStep steps={steps}>
        {children}
      </NextStep>
    </NextStepProvider>
  );
}
`,
};

const basicSetupShorterPagesRouter = {
  language: 'tsx',
  code: `
import { NextStepProvider, NextStep } from 'nextstepjs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextStepProvider>
      <NextStep steps={steps}>
        <Component {...pageProps} />
      </NextStep>
    </NextStepProvider>
  );
}
`,
};

const pagesRouterTroubleshooting = {
  language: 'tsx',
  code: `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  transpilePackages: ['nextstepjs'],
};

export default nextConfig;
`,
};
const tourDefinition = {
  language: 'tsx',
  code: `
import { Tour } from 'nextstepjs';

const steps : Tour[] = [
  {
    tour: "mainTour",
    steps: [
      {
        title: "Welcome",
        content: "Let's get started with NextStep!",
        selector: "#step1",
        // ... other step properties
      },
      // ... more steps
    ]
  }
];
`,
};

const tailwindConfig = {
  language: 'javascript',
  code: `
const config = {
  content: [
    './node_modules/nextstepjs/dist/**/*.{js,ts,jsx,tsx}'
  ]
}
`,
};

const useNextStep = {
  language: 'tsx',
  code: `
import { useNextStep } from 'nextstepjs';

const MyComponent = () => {
  const { startNextStep, closeNextStep, currentTour, currentStep, setCurrentStep, isNextStepVisible } = useNextStep();

  const handleStartTour = () => {
    startNextStep("mainTour");
  };

  return (
    <button onClick={handleStartTour}>Start Tour</button>
  );
};
`,
};

const localization = {
  language: 'tsx',
  code: `
const stepsEn = [/* English steps */];
const stepsEs = [/* Spanish steps */];

const MyApp = ({ locale }) => (
  <NextStepProvider>
    <NextStep steps={locale === 'es' ? stepsEs : stepsEn}>
      {/* Your app content */}
    </NextStep>
  </NextStepProvider>
);
`,
};

const customCard = {
  language: 'tsx',
  code: `
'use client';

import { CardComponentProps } from 'nextstepjs';

const CustomCard: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 max-w-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{step.title}</h2>
        {step.icon}
      </div>
      <div className="mb-4 bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: \`\${((currentStep + 1) / totalSteps) * 100}%\` }}
        ></div>
      </div>
      <p>{step.content}</p>
      {step.showControls && (
        <div className="flex justify-between mt-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="bg-blue-400 text-gray-800 px-4 py-2 rounded-md"
          >
            {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
      {step.showSkip && (
        <button
          onClick={skipTour}
          className="px-4 py-2 rounded-md bg-slate-300 text-gray-800"
        >
          Skip
        </button>
      )}
      {arrow}
    </div>
  );
};

export default CustomCard;



// Usage
<NextStep steps={steps} cardComponent={CustomCard}>
  {children}
</NextStep>
`,
};

const shadcnCustomCard = {
  language: 'tsx',
  code: `
'use client';

import { CardComponentProps } from 'nextstepjs';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ShadcnCustomCard: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
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
            <Button onClick={nextStep}>
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

export default ShadcnCustomCard;


// Usage
<NextStep steps={steps} cardComponent={ShadcnCustomCard}>
  {children}
</NextStep>
`,
};

const exampleSteps = {
  language: 'tsx',
  code: `
import { Tour } from 'nextstepjs';
import { MdInstallDesktop } from 'react-icons/md';
import { BiBlanket } from 'react-icons/bi';
import { PiStepsDuotone } from 'react-icons/pi';
import {
  GiArcheryTarget,
  GiCampCookingPot,
  GiCoffeeBeans,
  GiFishingHook,
} from 'react-icons/gi';

const steps: Tour[] = [
  {
    tour: 'firsttour',
    steps: [
      {
        icon: <>👋</>,
        title: 'Welcome to NextStep',
        content: (
          <p>
            Onboarding never been easier! This is how card looks like without selector.
            <br />
            <br />
            You can use buttons or arrow keys to navigate through the tour.
          </p>
        ),
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🚀</>,
        title: 'Technologies used',
        content: (
          <p>NextStep is built with Next.js, TailwindCSS, Framer Motion and Radix UI.</p>
        ),
        selector: '#tour1-step2',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <MdInstallDesktop />,
        title: 'How to use NextStep',
        content: <p>Install NextStep using your favorite package manager.</p>,
        selector: '#tour1-step3',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 350,
        pointerRadius: 10,
      },
      {
        icon: <BiBlanket />,
        title: 'Cosy Wrapper',
        content: (
          <p>
            Simply wrap your app with the NextStepProvider and NextStep in your global
            layout. Add steps to NextStep.
            <br />
            <br />
            If you want localization, don&apos;t forget to choose correct steps array per
            locale.
          </p>
        ),
        selector: '#tour1-step4',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <PiStepsDuotone />,
        title: 'One step at a time',
        content: (
          <p>
            Create your steps array. See{' '}
            <a className="text-primary" href="/docs" target="_blank">
              docs
            </a>{' '}
            for more details.
          </p>
        ),
        selector: '#tour1-step5',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        // nextRoute: '/docs',
      },
      {
        icon: <GiArcheryTarget />,
        title: '"Çok Rahat Çok Profesyonel", like Turkish olympic shooter',
        content: (
          <>
            You can target any element with easy, simply use same id with step's selector.
          </>
        ),
        selector: '#tour1-step6',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <GiFishingHook />,
        title: 'We hook you up',
        content: (
          <>
            You can control NextStep with ease. Simply use{' '}
            <span className="font-bold">useNextStep</span> hook.
            <br />
            <br />
            <a className="text-primary" href="/docs" target="_blank">
              Check docs
            </a>{' '}
            for more details.
          </>
        ),
        selector: '#tour1-step7',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        // nextRoute: '/',
      },
      {
        icon: <GiCampCookingPot />,
        title: 'For cookers',
        content: (
          <>
            NextStep lets you use your own Card component.
            <br />
            <br />
            Create it with your favorite framework. We recommend you reviewing{' '}
            <a className="text-primary" href="/docs" target="_blank">
              example implementation
            </a>
            .
          </>
        ),
        selector: '#tour1-step8',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <GiCoffeeBeans />,
        title: 'Support the developer',
        content: <>If you like NextStep, please support the developer.</>,
        selector: '#tour1-step9',
        side: 'bottom-right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🎉🎉🎉</>,
        title: 'Thats it!',
        content: (
          <>
            Don't forget to leave a star on{' '}
            <a
              href="https://github.com/enszrlu/NextStep"
              target="_blank"
              className="text-primary"
            >
              GitHub
            </a>
            !
          </>
        ),
        side: 'top',
        pointerPadding: 10,
        pointerRadius: 10,
        showControls: true,
        showSkip: false,
      },
    ],
  },
  {
    tour: 'secondtour',
    steps: [
      {
        icon: <>👋👋</>,
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

export default steps;
`,
};

const exampleStepsV1_1 = {
  language: 'tsx',
  code: `
import { Tour } from 'nextstepjs';
import { MdInstallDesktop } from 'react-icons/md';
import { BiBlanket } from 'react-icons/bi';
import { PiStepsDuotone } from 'react-icons/pi';
import {
  GiArcheryTarget,
  GiCampCookingPot,
  GiCoffeeBeans,
  GiFishingHook,
} from 'react-icons/gi';

const steps: Tour[] = [
  {
    tour: 'firsttour',
    steps: [
      {
        icon: <>👋</>,
        title: 'Welcome to NextStep',
        content: (
          <p>
            Onboarding never been easier! This is how card looks like without selector.
            <br />
            <br />
            You can use buttons or arrow keys to navigate through the tour.
          </p>
        ),
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🚀</>,
        title: 'Technologies used',
        content: (
          <p>NextStep is built with Next.js, TailwindCSS, Framer Motion and Radix UI.</p>
        ),
        selector: '#tour1-step2',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        viewportID: 'scrollable-viewport',
      },
      {
        icon: <MdInstallDesktop />,
        title: 'How to use NextStep',
        content: <p>Install NextStep using your favorite package manager.</p>,
        selector: '#tour1-step3',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 350,
        pointerRadius: 10,
        viewportID: 'scrollable-viewport',
      },
      {
        icon: <BiBlanket />,
        title: 'Cosy Wrapper',
        content: (
          <p>
            Simply wrap your app with the NextStepProvider and NextStep in your global
            layout. Add steps to NextStep.
            <br />
            <br />
            If you want localization, don&apos;t forget to choose correct steps array per
            locale.
          </p>
        ),
        selector: '#tour1-step4',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <PiStepsDuotone />,
        title: 'One step at a time',
        content: (
          <p>
            Create your steps array. See{' '}
            <a className="text-primary" href="/docs" target="_blank">
              docs
            </a>{' '}
            for more details.
          </p>
        ),
        selector: '#tour1-step5',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        // nextRoute: '/docs',
      },
      {
        icon: <GiArcheryTarget />,
        title: '"Çok Rahat Çok Profesyonel", like Turkish olympic shooter',
        content: (
          <>
            You can target any element with easy, simply use same id with step's selector.
          </>
        ),
        selector: '#tour1-step6',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <GiFishingHook />,
        title: 'We hook you up',
        content: (
          <>
            You can control NextStep with ease. Simply use{' '}
            <span className="font-bold">useNextStep</span> hook.
            <br />
            <br />
            <a className="text-primary" href="/docs" target="_blank">
              Check docs
            </a>{' '}
            for more details.
          </>
        ),
        selector: '#tour1-step7',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        // nextRoute: '/',
      },
      {
        icon: <GiCampCookingPot />,
        title: 'For cookers',
        content: (
          <>
            NextStep lets you use your own Card component.
            <br />
            <br />
            Create it with your favorite framework. We recommend you reviewing{' '}
            <a className="text-primary" href="/docs" target="_blank">
              example implementation
            </a>
            .
          </>
        ),
        selector: '#tour1-step8',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <GiCoffeeBeans />,
        title: 'Support the developer',
        content: <>If you like NextStep, please support the developer.</>,
        selector: '#tour1-step9',
        side: 'bottom-right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🎉🎉🎉</>,
        title: 'Thats it!',
        content: (
          <>
            Don't forget to leave a star on{' '}
            <a
              href="https://github.com/enszrlu/NextStep"
              target="_blank"
              className="text-primary"
            >
              GitHub
            </a>
            !
          </>
        ),
        side: 'top',
        pointerPadding: 10,
        pointerRadius: 10,
        showControls: true,
        showSkip: false,
      },
    ],
  },
  {
    tour: 'secondtour',
    steps: [
      {
        icon: <>👋👋</>,
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

export default steps;
`,
};

const nextStepViewport = {
  language: 'tsx',
  code: `
<div className="relative overflow-auto h-64">
  <NextStepViewport id="scrollable-viewport">
    {children}
  </NextStepViewport>
</div>
`,
};

export default {
  installPackage,
  installPackageV1_1,
  basicSetup,
  basicSetupShorter,
  basicSetupShorterPagesRouter,
  pagesRouterTroubleshooting,
  tailwindConfig,
  useNextStep,
  localization,
  customCard,
  shadcnCustomCard,
  exampleSteps,
  exampleStepsV1_1,
  tourDefinition,
  nextStepViewport,
};
