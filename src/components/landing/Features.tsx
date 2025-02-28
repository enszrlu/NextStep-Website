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
    <section className="py-16">
      <h2 className="text-3xl font-semibold mb-12 text-center">Why Choose NextStep?</h2>
      <BentoGrid className="md:auto-rows-[12rem] md:grid-cols-8 max-w-5xl mx-auto gap-5">
        <BentoCard
          name="Native React"
          className="md:col-span-2"
          background={<div className="absolute inset-0 h-full w-full" />}
          Icon={Code2}
          description="Built with React from the ground up for full compatibility with your React and Next.js applications."
          href="/docs"
          cta="View documentation"
        />
        <BentoCard
          name="Motion Animations"
          className="md:col-span-4"
          background={<div className="absolute inset-0 h-full w-full" />}
          Icon={Sparkles}
          description="Smooth, customizable animations powered by Framer Motion for engaging user experiences."
          href="/docs/react/animations"
          cta="See animations"
        />

        <BentoCard
          name="Interactive Forms"
          className="md:col-span-2 md:row-span-2"
          background={<div className="absolute inset-0 h-full w-full" />}
          Icon={FormInput}
          description="Trigger tour steps based on user interactions with forms and other elements for dynamic, interactive experiences."
          href="/docs/react/useNextStep"
          cta="Explore interactions"
        />

        <BentoCard
          name="Fully Customizable"
          className="md:col-span-4"
          background={<div className="absolute inset-0 h-full w-full" />}
          Icon={Paintbrush}
          description="Provide your own custom card components to completely control the appearance of your tours. Customize animations, styling, and behavior."
          href="/docs/react/styling"
          cta="Learn about styling"
        />
        <BentoCard
          name="Lightweight"
          className="md:col-span-2"
          background={<div className="absolute inset-0 h-full w-full" />}
          Icon={Feather}
          description="Minimal bundle size with zero dependencies beyond React and Framer Motion for fast loading times."
          href="/docs"
          cta="Get started"
        />
        <BentoCard
          name="Cross-Page Routing"
          className="md:col-span-3"
          background={<div className="absolute inset-0 h-full w-full" />}
          Icon={Navigation}
          description="Create tours that span multiple pages with built-in navigation adapters for Next.js, React Router, and Remix."
          href="/docs/react/routing"
          cta="Explore routing"
        />
        <BentoCard
          name="Event Callbacks"
          className="md:col-span-5"
          background={<div className="absolute inset-0 h-full w-full" />}
          Icon={BarChart3}
          description="Track user progress with onStart, onComplete, onSkip, and onStepChange callbacks for analytics and custom behaviors."
          href="/docs/react/callbacks"
          cta="Learn about callbacks"
        />
      </BentoGrid>
    </section>
  );
}

export default Features;
