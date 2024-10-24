'use client';

const onNextStepStart = (tourName: string | null) => {
  console.log('Example onStart Callback: NextStep Started the tour: ', tourName);
};

const onNextStepComplete = (tourName?: string | null) => {
  console.log('Example onComplete Callback: NextStep Completed the tour: ', tourName);
};

const onNextStepSkip = (step: number, tourName: string | null) => {
  console.log(
    'Example onSkip Callback: NextStep Skipped the step: ',
    step,
    'of the tour: ',
    tourName,
  );
};

const onNextStepStepChange = (step: number, tourName: string | null) => {
  console.log(
    'Example onStepChange Callback: NextStep Changed the step: ',
    step,
    'of the tour: ',
    tourName,
  );
};

export { onNextStepStart, onNextStepComplete, onNextStepSkip, onNextStepStepChange };
