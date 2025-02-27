'use client';

import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toTitleCase } from '@/lib/utils';

interface AnimationsProps {
  framework: string;
}

const Animations = ({ framework = 'next.js' }: AnimationsProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold mb-2" id="animations">
        Animations for {toTitleCase(framework)}
      </h1>
      <p className="text-xl">
        NextStepjs uses Motion (aka Framer Motion) to provide smooth, customizable
        animations for your onboarding tours. This guide explains how to customize
        animations in your {toTitleCase(framework)} application.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Default Animations</h2>
        <p className="text-lg">
          By default, NextStepjs uses a smooth animation for transitioning between tour
          steps. The default animation settings are:
        </p>

        <CodeBlock
          language="tsx"
          code={`// Default animation settings
cardTransition = {ease: 'anticipate', duration: 0.6};`}
        />

        <p className="text-lg">
          These settings create a natural, fluid transition between steps that feels
          responsive and engaging.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Customizing Animations</h2>
        <p className="text-lg">
          You can customize the animation behavior by providing your own transition
          settings to the <code>cardTransition</code> prop of the{' '}
          {framework === 'next.js' ? 'NextStep' : 'NextStepReact'} component:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { ${
            framework === 'next.js' ? 'NextStep' : 'NextStepReact'
          }, NextStepProvider } from 'nextstepjs';

function MyApp({ Component, pageProps }) {
  return (
    <NextStepProvider>
      <${framework === 'next.js' ? 'NextStep' : 'NextStepReact'}
        steps={steps}
        cardTransition={{ 
          ease: 'easeOut', 
          duration: 0.4,
          stiffness: 100,
          damping: 10
        }}
      >
        <Component {...pageProps} />
      </${framework === 'next.js' ? 'NextStep' : 'NextStepReact'}>
    </NextStepProvider>
  );
}`}
        />

        <h3 className="text-xl font-semibold mt-6">Animation Properties</h3>

        <p className="text-lg">
          The <code>cardTransition</code> prop is passed directly to the{' '}
          <code>motion.div</code> transition prop from Motion, giving you access to all of
          Motion's animation capabilities. See{' '}
          <Link
            href="https://motion.dev/docs/react-transitions"
            target="_blank"
            className="text-primary"
          >
            Motion docs
          </Link>{' '}
          for more info.
        </p>

        <h3 className="text-xl font-semibold mt-6">Animation Examples</h3>
        <p className="text-lg">
          Here are some examples of different animation configurations you can use:
        </p>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold text-lg">Smooth Fade</h4>
            <CodeBlock
              language="tsx"
              code={`cardTransition={{ 
  ease: 'easeInOut', 
  duration: 0.5 
}}`}
            />
          </div>

          <div>
            <h4 className="font-semibold text-lg">Bouncy Spring</h4>
            <CodeBlock
              language="tsx"
              code={`cardTransition={{ 
  type: 'spring',
  stiffness: 300,
  damping: 20
}}`}
            />
          </div>

          <div>
            <h4 className="font-semibold text-lg">Quick Snap</h4>
            <CodeBlock
              language="tsx"
              code={`cardTransition={{ 
  ease: 'backOut', 
  duration: 0.3 
}}`}
            />
          </div>

          <div>
            <h4 className="font-semibold text-lg">Delayed Appearance</h4>
            <CodeBlock
              language="tsx"
              code={`cardTransition={{ 
  ease: 'easeOut', 
  duration: 0.4,
  delay: 0.2
}}`}
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Disabling Animations</h2>
        <p className="text-lg">
          If you prefer not to have animations, you can effectively disable them by
          setting a very short duration:
        </p>

        <CodeBlock
          language="tsx"
          code={`cardTransition={{ 
  duration: 0.01 
}}`}
        />
      </div>

      <div className="flex justify-between">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/dark-mode`}>
          <Button variant="outline">
            <FaArrowLeft className="w-4 h-4 mr-2" /> Dark Mode
          </Button>
        </Link>
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/api`}>
          <Button variant="default">
            API Reference <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Animations;
