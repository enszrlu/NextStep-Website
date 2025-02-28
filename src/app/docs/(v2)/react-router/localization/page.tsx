import { Metadata } from 'next';
import Localization from '@/components/docs/Localization';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React Router Localization - NextStepjs',
  description:
    "Learn how to implement localization in your React Router onboarding tours with NextStepjs. Create multilingual tours that adapt to your users' language preferences with comprehensive i18n support.",
  keywords: [
    ...metaKeywords,
    'react router localization',
    'react router i18n tours',
    'react router multilingual onboarding',
    'react router rtl support',
    'react router tour translations',
    'react router language switching',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/localization',
  },
};

export default function ReactRouterLocalizationPage() {
  return <Localization framework="react router" />;
}
