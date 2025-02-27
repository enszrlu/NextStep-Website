import { Metadata } from 'next';
import Localization from '@/components/docs/Localization';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Next.js Localization - NextStepjs',
  description:
    "Learn how to implement localization in your Next.js onboarding tours with NextStepjs. Create multilingual tours that adapt to your users' language preferences with comprehensive i18n support.",
  keywords: [
    ...metaKeywords,
    'nextjs localization',
    'nextjs i18n tours',
    'nextjs multilingual onboarding',
    'nextjs rtl support',
    'nextjs tour translations',
    'nextjs language switching',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/localization',
  },
};

export default function NextjsLocalizationPage() {
  return <Localization framework="next.js" />;
}
