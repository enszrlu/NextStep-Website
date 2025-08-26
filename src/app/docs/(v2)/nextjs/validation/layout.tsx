'use client';

import { NextStepProvider, NextStep } from 'nextstepjs';
import { useNextAdapter } from 'nextstepjs/adapters/next';
import steps from '@/lib/steps';
import {
  onNextStepStepChange,
  onNextStepComplete,
  onNextStepSkip,
  onNextStepStart,
} from '@/lib/callbacks';
import CardWithValidation from '@/components/example-cards/CardWithValidation';

export default function ValidationLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextStepProvider>
      <NextStep
        steps={steps}
        onStart={onNextStepStart}
        onComplete={onNextStepComplete}
        onSkip={onNextStepSkip}
        onStepChange={onNextStepStepChange}
        scrollToTop={false}
        cardComponent={CardWithValidation}
      >
        {children}
      </NextStep>
    </NextStepProvider>
  );
}
