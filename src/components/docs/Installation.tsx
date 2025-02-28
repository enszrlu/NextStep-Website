import CodeBlock from '@/components/CodeBlock';
import React from 'react';
import CodeBlocks from '@/lib/codeBlocks';
import CopyCode from '@/components/CopyCode';
import { cn, toTitleCase } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiRemix } from 'react-icons/si';
import { SiReactrouter } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';

const FRAMEWORKS = [
  {
    icon: RiNextjsFill,
    label: 'Next.js',
    href: 'nextjs',
  },
  {
    icon: RiReactjsFill,
    label: 'React',
    href: 'react',
  },
  {
    icon: SiReactrouter,
    label: 'React Router',
    href: 'react-router',
  },
  {
    icon: SiRemix,
    label: 'Remix',
    href: 'remix',
  },
];

const Installation = ({ framework = 'next.js' }: { framework: string }) => {
  const FrameWorkLinks = (_framework: (typeof FRAMEWORKS)[number]) => {
    return (
      <div
        className={cn(
          'flex gap-4 p-4 bg-foreground/70 text-background rounded-md flex-col justify-center items-center',
          framework.replace(' ', '-').replace('.', '') === _framework.href &&
            'ring-4 bg-foreground ring-primary',
        )}
      >
        <Link
          href={`/docs/${_framework.href}`}
          className="flex gap-4 h-24 w-24 rounded-md flex-col justify-center items-center"
        >
          {React.createElement(_framework.icon, {
            className: 'w-10 h-10',
          })}
          {_framework.label}
        </Link>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold mb-2" id="getting-started">
        NextStep Installation
      </h1>
      <p className="text-xl">
        NextStep is very easy to install and set up. You can install it using your
        favorite package manager to your {toTitleCase(framework)} project.
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Select your framework</h2>
        <div className="flex gap-4 flex-wrap">
          {FRAMEWORKS.map((framework) => (
            <FrameWorkLinks key={framework.href} {...framework} />
          ))}
        </div>
      </div>
      <div id="installation" className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="w-fit">
          <CopyCode />
        </div>
        <CodeBlock
          language={CodeBlocks.installPackageV2.language}
          code={CodeBlocks.installPackageV2.code}
        />
      </div>
      <div className="flex self-end">
        <Link href={`/docs/${framework.replace('.', '').replace(' ', '-')}/basic-setup`}>
          <Button variant="default">
            <FaArrowRight className="w-4 h-4 mr-2" /> Basic Setup
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Installation;
