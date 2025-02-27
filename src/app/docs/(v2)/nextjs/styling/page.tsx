import { Metadata } from 'next';
import Styling from '@/components/docs/Styling';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Next.js Styling and Customization - NextStepjs',
  description:
    'Learn how to customize the appearance of your Next.js onboarding tours with NextStepjs. Create custom card components, change overlay colors, and more to match your application design.',
  keywords: [
    ...metaKeywords,
    'nextjs custom tour cards',
    'nextjs onboarding styling',
    'nextjs tour customization',
    'nextjs tour overlay',
    'nextjs custom ui',
    'nextjs shadcn tour',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/styling',
  },
};

export default function NextjsStylingPage() {
  return <Styling framework="next.js" />;
}
