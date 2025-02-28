import React from 'react';
import { BentoCard } from '../magicui/bento-grid';
import { BentoGrid } from '../magicui/bento-grid';
import {
  Code2,
  Navigation,
  Paintbrush,
  Sparkles,
  FormInput,
  Feather,
  BarChart3,
} from 'lucide-react';

function Features() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-10">Why Choose NextStep?</h2>
      <BentoGrid className="md:auto-rows-[10rem] md:grid-cols-6 max-w-5xl mx-auto">
        <BentoCard
          name="Fully Customizable"
          className="md:col-span-3"
          background={
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20" />
          }
          Icon={Paintbrush}
          description="Provide your own custom card components to completely control the appearance of your tours. Customize animations, styling, and behavior."
          href="/docs/react/styling"
          cta="Learn about styling"
        />
        <BentoCard
          name="Cross-Page Routing"
          className="md:col-span-3"
          background={
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20" />
          }
          Icon={Navigation}
          description="Create tours that span multiple pages with built-in navigation adapters for Next.js, React Router, and Remix."
          href="/docs/react/routing"
          cta="Explore routing"
        />
        <BentoCard
          name="Motion Animations"
          className="md:col-span-2"
          background={
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20" />
          }
          Icon={Sparkles}
          description="Smooth, customizable animations powered by Framer Motion for engaging user experiences."
          href="/docs/react/animations"
          cta="See animations"
        />
        <BentoCard
          name="Native React"
          className="md:col-span-2"
          background={
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20" />
          }
          Icon={Code2}
          description="Built with React from the ground up for full compatibility with your React and Next.js applications."
          href="/docs"
          cta="View documentation"
        />
        <BentoCard
          name="Event Callbacks"
          className="md:col-span-2"
          background={
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20" />
          }
          Icon={BarChart3}
          description="Track user progress with onStart, onComplete, onSkip, and onStepChange callbacks for analytics and custom behaviors."
          href="/docs/react/callbacks"
          cta="Learn about callbacks"
        />
        <BentoCard
          name="Lightweight"
          className="md:col-span-3"
          background={
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20" />
          }
          Icon={Feather}
          description="Minimal bundle size with zero dependencies beyond React and Framer Motion for fast loading times."
          href="/docs"
          cta="Get started"
        />
        <BentoCard
          name="Interactive Forms"
          className="md:col-span-3"
          background={
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20" />
          }
          Icon={FormInput}
          description="Trigger tour steps based on user interactions with forms and other elements for dynamic, interactive experiences."
          href="/docs/react/useNextStep"
          cta="Explore interactions"
        />
      </BentoGrid>
    </section>
  );
}

export default Features;
