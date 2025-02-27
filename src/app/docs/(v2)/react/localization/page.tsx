import { Metadata } from 'next';
import Localization from '@/components/docs/Localization';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'React Localization - NextStepjs',
  description:
    "Learn how to implement localization in your React onboarding tours with NextStepjs. Create multilingual tours that adapt to your users' language preferences with comprehensive i18n support.",
  keywords: [
    ...metaKeywords,
    'react localization',
    'react i18n tours',
    'react multilingual onboarding',
    'react rtl support',
    'react tour translations',
    'react language switching',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/localization',
  },
};

export default function ReactLocalizationPage() {
  return <Localization framework="react" />;
}
