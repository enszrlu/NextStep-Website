import { Metadata } from 'next';
import Localization from '@/components/docs/Localization';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'Remix Localization - NextStepjs',
  description:
    "Learn how to implement localization in your Remix onboarding tours with NextStepjs. Create multilingual tours that adapt to your users' language preferences with comprehensive i18n support.",
  keywords: [
    ...metaKeywords,
    'remix localization',
    'remix i18n tours',
    'remix multilingual onboarding',
    'remix rtl support',
    'remix tour translations',
    'remix language switching',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/localization',
  },
};

export default function RemixLocalizationPage() {
  return <Localization framework="remix" />;
}
