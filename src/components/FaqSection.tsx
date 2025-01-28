import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'What is NextStep.js?',
    answer: `NextStep.js is an open-source, lightweight onboarding library designed specifically for Next.js applications. It enables developers to create engaging, interactive product tours with ease, enhancing user experience and facilitating seamless onboarding processes.`,
  },
  {
    question: 'How do I install NextStep.js in my Next.js project?',
    answer: `To install NextStep.js, use your preferred package manager. For example, with npm, run: npm install nextstepjs framer-motion. This command installs both NextStep.js and Framer Motion, which is utilized for smooth animations.`,
  },
  {
    question: 'How do I get started with NextStep.js?',
    answer:
      'To get started with NextStep.js, first install the package using your preferred package manager. Then, wrap your application with the NextStepProvider and define your onboarding steps. Check the Docs for detailed setup instructions.',
  },
  {
    question: 'Can I customize the appearance of the onboarding tour?',
    answer: `Yes, NextStep.js allows for customization of the tour's appearance. You can create custom cards (tooltips) to match your application's design and branding, ensuring a cohesive user experience.`,
  },
  {
    question: 'Does NextStep.js support non-Tailwind CSS projects?',
    answer: `As of version 1.2 and onwards, NextStep.js supports projects that do not use Tailwind CSS. This enhancement allows for broader integration across various styling frameworks.`,
  },
  {
    question: 'What are the main use cases for NextStep.js?',
    answer: `NextStep.js is a versatile library with several key use cases. For user onboarding, it enables guided step-by-step tours to help new users learn your application. The library excels at transforming static documentation into interactive learning experiences where users can learn by doing. When handling errors, NextStep.js can provide tailored guidance tours that walk users through resolving specific issues. Additionally, you can create event-triggered tours that respond to user actions, improving engagement and retention through contextual assistance.`,
  },
  {
    question: 'Is NextStep.js open source?',
    answer: `Yes, NextStep.js is an open-source project. You can access its source code, contribute, or report issues on its GitHub repository.`,
  },
  {
    question: 'Are there any demos available for NextStep.js?',
    answer: `Certainly! You can explore a live demo of NextStep.js in action on the official website.`,
  },
  {
    question: 'How can I contribute to the NextStep.js project?',
    answer: `Contributions are welcome! You can fork the GitHub repository, make your changes, and submit a pull request. Additionally, reporting issues or suggesting features through GitHub's issue tracker is appreciated.`,
  },
  {
    question: 'Where can I find the documentation for NextStep.js?',
    answer: `Comprehensive documentation, including installation guides, API references, and examples, is available on the NextStep.js website.`,
  },
];

interface FaqSectionProps {
  limit?: number;
}

export function FaqSection({ limit }: FaqSectionProps) {
  const displayedFaqItems = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {displayedFaqItems.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">{item.question}</h3>
            <p className="mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: displayedFaqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

export default FaqSection;
