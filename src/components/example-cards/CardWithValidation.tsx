'use client';

import { CardComponentProps, useNextStep } from 'nextstepjs';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import validation from '@/lib/validation';
import { toast } from '@/hooks/use-toast';

const CardWithValidation: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
  const { currentTour } = useNextStep();

  // Get the validation function for the current step
  const validate =
    currentTour && validation[currentTour] && validation[currentTour][currentStep]
      ? validation[currentTour][currentStep].validation
      : () => true;

  // Get the validation message for the current step
  const validationMessage =
    currentTour && validation[currentTour] && validation[currentTour][currentStep]
      ? validation[currentTour][currentStep].validationMessage
      : '';

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p>{step.title}</p>
          {step.icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{step.content}</p>
        {arrow}
      </CardContent>
      <CardFooter className="flex flex-col">
        {step.showControls && (
          <div className="flex justify-between w-full">
            <Button onClick={prevStep} disabled={currentStep === 0} variant="outline">
              Previous
            </Button>
            <Button
              // Validate the current step and if it passes, go to the next step
              // If it fails, show the validation message
              onClick={async () => {
                if (await validate()) {
                  nextStep();
                } else {
                  toast({
                    title: validationMessage,
                    variant: 'destructive',
                  });
                }
              }}
            >
              {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
        {step.showSkip && (
          <Button onClick={skipTour} variant={'ghost'} className="w-full">
            Skip Tour
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardWithValidation;
