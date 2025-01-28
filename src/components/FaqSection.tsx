import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'What is NextStep.js?',
    answer:
      'NextStep.js is a lightweight onboarding library for Next.js applications, designed to create step-by-step guides and interactive product tours.',
  },
  {
    question: 'How do I install NextStep.js?',
    answer:
      'You can install NextStep.js using npm, yarn, or pnpm. Simply run the command: npm install nextstepjs.',
  },
  {
    question: 'Can I customize the onboarding steps?',
    answer:
      'Yes, NextStep.js allows you to fully customize the onboarding steps, including the content, layout, and behavior.',
  },
];

export function FaqSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
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
            mainEntity: faqItems.map((item) => ({
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
