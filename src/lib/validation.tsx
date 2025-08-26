interface ValidationStep {
  validation: () => boolean | Promise<boolean>;
  validationMessage: string;
}

interface ValidationTour {
  [stepIndex: number]: ValidationStep;
}

interface ValidationConfig {
  [tourName: string]: ValidationTour;
}

const validation: ValidationConfig = {
  'validation-demo': {
    0: {
      validation: async () => {
        console.log('Validating step 0');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return true;
      },
      validationMessage: 'Step 0 validation failed',
    },
    1: {
      validation: () => {
        console.log('Validating step 1');
        // Check window width return true if width is greater than 768
        return window.innerWidth > 768;
      },
      validationMessage: 'Window width must be greater than 768',
    },
    2: {
      validation: () => {
        console.log('Validating step 2');
        // Check if window width is less than 768
        return window.innerWidth < 768;
      },
      validationMessage: 'Window width must be less than 768',
    },
  },
};

export default validation;
