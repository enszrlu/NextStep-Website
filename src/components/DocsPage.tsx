'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CodeBlock from './CodeBlock';
import CodeBlocks from '@/lib/codeBlocks';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import CustomCard from './example-cards/CustomCard';
import ShadcnCustomCard from './example-cards/ShadCnCard';

const VERSIONS = ['1.0.x', '1.1.x', '1.2.x', '1.3.x (latest)'];

const DocsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const router = useRouter();

  const [tab, setTab] = useState('getting-started');
  const [version, setVersion] = useState(VERSIONS[3]);

  const handleTabChange = (value: string) => {
    setTab(value);
    updateURL(value, version);
  };

  const handleVersionChange = (value: string) => {
    setVersion(value);
    updateURL(tab, value);
  };

  const updateURL = (tabValue: string, versionValue: string) => {
    router.push(`/docs?tab=${tabValue}&version=${versionValue}`);
  };

  // Read search params
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    const versionParam = searchParams.get('version');

    if (tabParam) {
      setTab(tabParam);
    }
    if (versionParam) {
      if (VERSIONS.includes(versionParam)) {
        setVersion(versionParam);
      } else {
        setVersion(VERSIONS[0]);
        updateURL(tab, VERSIONS[0]);
      }
    }
  }, [searchParams]);

  const isV1_1_and_above =
    version === VERSIONS[1] || version === VERSIONS[2] || version === VERSIONS[3];
  const isV1_2_and_above = version === VERSIONS[2] || version === VERSIONS[3];
  const isV1_3_and_above = version === VERSIONS[3];

  return (
    <div className="container mx-auto py-12 max-w-screen-2xl flex flex-col gap-4">
      <Select value={version} onValueChange={handleVersionChange}>
        <SelectTrigger className="w-[180px] self-end">
          <SelectValue placeholder="Select version" />
        </SelectTrigger>
        <SelectContent>
          {VERSIONS.map((v) => (
            <SelectItem key={v} value={v}>
              Version {v}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Tabs
        defaultValue="getting-started"
        className="w-full"
        value={tab}
        onValueChange={handleTabChange}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="api">API Reference</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started">
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-semibold mb-2" id="getting-started">
                Getting Started with NextStep
              </CardTitle>
              <CardDescription className="text-xl">
                Learn how to install and set up NextStep in your project.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div {...fadeIn} id="installation">
                <h2 className="text-2xl font-semibold mb-2">Installation</h2>
                <CodeBlock
                  language={
                    isV1_1_and_above
                      ? CodeBlocks.installPackageV1_1.language
                      : CodeBlocks.installPackage.language
                  }
                  code={
                    isV1_1_and_above
                      ? CodeBlocks.installPackageV1_1.code
                      : CodeBlocks.installPackage.code
                  }
                />
              </motion.div>

              <motion.div {...fadeIn} id="basic-setup">
                <h2 className="text-2xl font-semibold mb-2">Basic Setup</h2>
                <p className="mb-2">
                  Wrap your application in <code>NextStepProvider</code> and{' '}
                  <code>NextStep</code>, then supply the <code>steps</code> array to
                  NextStep. See the{' '}
                  <Link href="/docs?tab=examples#steps-example" className="text-primary">
                    example
                  </Link>{' '}
                  for more information.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  App Router: Global `layout.tsx`
                </h3>
                <CodeBlock
                  language={CodeBlocks.basicSetup.language}
                  code={CodeBlocks.basicSetup.code}
                />
                <h3 className="text-xl font-semibold mt-4">Pages Router: `_app.tsx`</h3>
                <CodeBlock
                  language={CodeBlocks.basicSetupShorterPagesRouter.language}
                  code={CodeBlocks.basicSetupShorterPagesRouter.code}
                />
                <h3 className="text-xl font-semibold mt-4">
                  Troubleshooting for Pages Router
                </h3>
                <p className="mb-2">
                  If you encounter an error related to module exports when using the Pages
                  Router, it is likely due to a mismatch between ES modules (which use
                  `export` statements) and CommonJS modules (which use `module.exports`).
                  The `nextstepjs` package uses ES module syntax, but your Next.js project
                  might be set up to use CommonJS.
                </p>
                <p className="mb-2">
                  To resolve this issue, ensure that your Next.js project is configured to
                  support ES modules. You can do this by updating your `next.config.js`
                  file to include the following configuration:
                </p>
                <CodeBlock
                  language={CodeBlocks.pagesRouterTroubleshooting.language}
                  code={CodeBlocks.pagesRouterTroubleshooting.code}
                />
              </motion.div>

              {!isV1_2_and_above && (
                <motion.div {...fadeIn} id="tailwind-configuration">
                  <h2 className="text-2xl font-semibold mb-2">Tailwind Configuration</h2>
                  <p className="mb-2">
                    Tailwind CSS needs to scan the node module to include the used
                    classes. See{' '}
                    <Link
                      href="https://tailwindcss.com/docs/content-configuration#configuring-source-paths"
                      className="text-primary"
                      target="_blank"
                    >
                      configuring source paths
                    </Link>{' '}
                    for more information.
                  </p>

                  <p>Add the following to your Tailwind config:</p>
                  <CodeBlock
                    language={CodeBlocks.tailwindConfig.language}
                    code={CodeBlocks.tailwindConfig.code}
                  />
                </motion.div>
              )}

              <motion.div {...fadeIn} id="nextstep-hook">
                <h2 className="text-2xl font-semibold mb-2">
                  Using the useNextStep Hook
                </h2>
                <p className="mb-2">
                  Control your tour programmatically from anywhere in your app. You can
                  also trigger tour changes with events or other buttons within the UI.
                </p>
                <CodeBlock
                  language={CodeBlocks.useNextStep.language}
                  code={CodeBlocks.useNextStep.code}
                />
              </motion.div>

              <motion.div {...fadeIn} id="routing-during-tour">
                <h2 className="text-2xl font-semibold mb-2">Routing During a Tour</h2>
                <p className="mb-2">
                  NextStep allows you to navigate between different routes during a tour
                  using the <code>nextRoute</code> and <code>prevRoute</code> properties
                  in the step object. These properties enable seamless transitions between
                  different pages of your application.
                </p>
                <br />
                <code>nextRoute</code>: Specifies the route to navigate to when the "Next"
                button is clicked.
                <br />
                <code>prevRoute</code>: Specifies the route to navigate to when the
                "Previous" button is clicked.
                <br />
                <br />
                <p className="mt-2">
                  When <code>nextRoute</code> or <code>prevRoute</code> is provided,
                  NextStep will use Next.js's <code>next/navigation</code> to navigate to
                  the specified route.
                </p>
              </motion.div>

              <motion.div
                {...fadeIn}
                id="nextstep-viewport"
                className={isV1_1_and_above ? '' : 'hidden'}
              >
                <h2 className="text-2xl font-semibold mb-2">
                  Using NextStepViewport and viewportID
                </h2>
                <p className="mb-2">
                  When a selector is in a scrollable area, it is best to wrap the content
                  of the scrollable area with <code>NextStepViewport</code>. This
                  component takes <code>children</code> and an <code>id</code> as prop. By
                  providing the <code>viewportID</code> to the step, NextStep will target
                  this element within the viewport. This ensures that the step is anchored
                  to the element even if the container is scrollable.
                </p>
                <Link href="/demo" className="text-primary">
                  See demo here
                </Link>
                <CodeBlock
                  language={CodeBlocks.nextStepViewport.language}
                  code={CodeBlocks.nextStepViewport.code}
                />
              </motion.div>

              {isV1_3_and_above && (
                <motion.div {...fadeIn} id="nextstep-callbacks">
                  <h2 className="text-2xl font-semibold mb-2">NextStep Callbacks</h2>
                  <p className="mb-2">
                    NextStep provides several callback functions that allow you to hook
                    into different stages of the tour. These callbacks are:
                  </p>
                  <ul className="list-disc list-inside mt-2 mb-4">
                    <li>
                      <code>onStart</code>: Called when a tour starts
                    </li>
                    <li>
                      <code>onStepChange</code>: Called when the current step changes
                    </li>
                    <li>
                      <code>onComplete</code>: Called when a tour is completed
                    </li>
                    <li>
                      <code>onSkip</code>: Called when a tour is skipped
                    </li>
                  </ul>
                  <p className="mb-4">
                    You can use these callbacks to perform actions such as logging,
                    analytics tracking, or triggering other parts of your application.
                    Here's an example of how to use these callbacks:
                  </p>
                  <p className="mb-4 font-semibold bg-red-100 p-4 rounded-md">
                    ⚠️ Important: Callbacks must be defined in a client component. Ensure
                    that your component is using <code>'use client'</code> at the top.
                  </p>
                  <CodeBlock
                    language={CodeBlocks.nextStepCallbacks.language}
                    code={CodeBlocks.nextStepCallbacks.code}
                  />
                  <p className="mt-4">
                    These callbacks provide you with powerful hooks to integrate NextStep
                    deeply into your application's logic and user experience flow.
                  </p>
                </motion.div>
              )}

              <motion.div {...fadeIn} id="keyboard-navigation">
                <h2 className="text-2xl font-semibold mb-2">Keyboard Navigation</h2>
                <p>NextStep supports the following keyboard shortcuts:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Right Arrow: Next step</li>
                  <li>Left Arrow: Previous step</li>
                  <li>Escape: Skip tour</li>
                </ul>
              </motion.div>

              <motion.div {...fadeIn} id="localization">
                <h2 className="text-2xl font-semibold mb-2">Localization</h2>
                <p>
                  While NextStep doesn't have built-in localization, you can easily switch
                  between languages by supplying the `steps` array based on the current
                  locale:
                </p>
                <CodeBlock
                  language={CodeBlocks.localization.language}
                  code={CodeBlocks.localization.code}
                />
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-semibold mb-2">API Reference</CardTitle>
              <CardDescription className="text-xl">
                Detailed information about NextStep components and props.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div {...fadeIn} id="nextstep-props">
                <h2 className="text-2xl font-semibold mb-2">NextStep Props</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Prop</TableHead>
                      <TableHead className="w-[200px] lg:w-[400px] 2xl:w-[600px]">
                        Type
                      </TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>children</TableCell>
                      <TableCell>React.ReactNode</TableCell>
                      <TableCell>Your website or application content</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>steps</TableCell>
                      <TableCell>Tour[]</TableCell>
                      <TableCell>
                        Array of Tour objects defining each step of the onboarding
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>showNextStep</TableCell>
                      <TableCell>boolean</TableCell>
                      <TableCell>Controls visibility of the onboarding overlay</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>shadowRgb</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        RGB values for the shadow color surrounding the target area
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>shadowOpacity</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Opacity value for the shadow surrounding the target area
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>cardComponent</TableCell>
                      <TableCell>React.ComponentType</TableCell>
                      <TableCell>
                        Custom card component to replace the default one
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>cardTransition</TableCell>
                      <TableCell>Transition</TableCell>
                      <TableCell>
                        Framer Motion transition object for step transitions
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>onStart</TableCell>
                      <TableCell>(tourName?: string | null) ={'>'} void</TableCell>
                      <TableCell>
                        Callback function triggered when the tour starts
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>onStepChange</TableCell>
                      <TableCell>
                        (step: number, tourName?: string | null) ={'>'} void
                      </TableCell>
                      <TableCell>
                        Callback function triggered when the step changes
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>onComplete</TableCell>
                      <TableCell>(tourName?: string | null) ={'>'} void</TableCell>
                      <TableCell>
                        Callback function triggered when the tour completes
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>onSkip</TableCell>
                      <TableCell>
                        (step: number, tourName?: string | null) ={'>'} void
                      </TableCell>
                      <TableCell>
                        Callback function triggered when the user skips the tour
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>clickThroughOverlay</TableCell>
                      <TableCell>boolean</TableCell>
                      <TableCell>
                        If true, overlay background is clickable, default is false
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </motion.div>

              <motion.div {...fadeIn} id="step-object">
                <h2 className="text-2xl font-semibold mb-2">Step Object</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Prop</TableHead>
                      <TableHead className="w-[200px] lg:w-[400px] 2xl:w-[600px]">
                        Type
                      </TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>icon</TableCell>
                      <TableCell>React.ReactNode | string | null</TableCell>
                      <TableCell>
                        An icon or element to display alongside the step title
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>title</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>The title of your step</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>content</TableCell>
                      <TableCell>React.ReactNode</TableCell>
                      <TableCell>The main content or body of the step</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>selector</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Optional. A string used to target an `id` that this step refers to
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>side</TableCell>
                      <TableCell>
                        "top" | "bottom" | "left" | "right" | "top-left" | "top-right" |
                        "bottom-left" | "bottom-right" | "left-top" | "left-bottom" |
                        "right-top" | "right-bottom"
                      </TableCell>
                      <TableCell>
                        Optional. Determines where the tooltip should appear relative to
                        the selector
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>showControls</TableCell>
                      <TableCell>boolean</TableCell>
                      <TableCell>
                        Optional. Determines whether control buttons should be shown if
                        using the default card
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>showSkip</TableCell>
                      <TableCell>boolean</TableCell>
                      <TableCell>
                        Optional. Determines whether skip button should be shown if using
                        the default card
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>blockKeyboardControl</TableCell>
                      <TableCell>boolean</TableCell>
                      <TableCell>
                        Optional. Determines whether keyboard control should be blocked
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>pointerPadding</TableCell>
                      <TableCell>number</TableCell>
                      <TableCell>
                        Optional. The padding around the pointer highlighting the target
                        element
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>pointerRadius</TableCell>
                      <TableCell>number</TableCell>
                      <TableCell>
                        Optional. The border-radius of the pointer highlighting the target
                        element
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>nextRoute</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Optional. The route to navigate to when moving to the next step
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>prevRoute</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Optional. The route to navigate to when moving to the previous
                        step
                      </TableCell>
                    </TableRow>
                    <TableRow className={isV1_1_and_above ? '' : 'hidden'}>
                      <TableCell>viewportID</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Optional. The id of the viewport to target. If not provided, the
                        first viewport will be used.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples">
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-semibold mb-2">Examples</CardTitle>
              <CardDescription className="text-xl">
                Code examples to help you get started with NextStep.
                <br />
                <br />
                <p className="text-destructive text-lg">
                  Custom Card Component must be a client component. Make sure to add the
                  "use client" directive.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div {...fadeIn} id="custom-card-component">
                <h2 className="text-2xl font-semibold mb-2">Custom Card Component</h2>
                <CodeBlock
                  language={CodeBlocks.customCard.language}
                  code={CodeBlocks.customCard.code}
                />
                <CustomCard
                  step={{
                    icon: <>🚀</>,
                    title: 'Custom Card Component',
                    content: (
                      <p>
                        This is how example custom card component looks like.
                        <br />
                        <br />
                        You can copy & modify it to create your own card component.
                      </p>
                    ),
                    showControls: true,
                    showSkip: true,
                  }}
                  currentStep={0}
                  totalSteps={2}
                  nextStep={() => {}}
                  prevStep={() => {}}
                  skipTour={() => {}}
                  arrow={<></>}
                />
              </motion.div>

              <motion.div {...fadeIn} id="steps-example">
                <h2 className="text-2xl font-semibold mb-2">
                  Custom Card Component with shadcn
                </h2>
                <CodeBlock
                  language={CodeBlocks.shadcnCustomCard.language}
                  code={CodeBlocks.shadcnCustomCard.code}
                />
                <ShadcnCustomCard
                  step={{
                    icon: <>🚀</>,
                    title: 'Custom Card Component',
                    content: (
                      <p>
                        This is how example shadcn card component looks like.
                        <br />
                        <br />
                        You can copy & modify it to create your own card component.
                      </p>
                    ),
                    showControls: true,
                    showSkip: true,
                  }}
                  currentStep={0}
                  totalSteps={2}
                  nextStep={() => {}}
                  prevStep={() => {}}
                  skipTour={() => {}}
                  arrow={<></>}
                />
              </motion.div>
              <motion.div {...fadeIn} id="shadcn-custom-card">
                <h2 className="text-2xl font-semibold mb-2">Example Steps</h2>
                <CodeBlock
                  language={
                    isV1_1_and_above
                      ? CodeBlocks.exampleStepsV1_1.language
                      : CodeBlocks.exampleSteps.language
                  }
                  code={
                    isV1_1_and_above
                      ? CodeBlocks.exampleStepsV1_1.code
                      : CodeBlocks.exampleSteps.code
                  }
                />
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocsPage;
