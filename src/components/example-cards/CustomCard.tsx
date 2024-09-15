import { CardComponentProps } from 'nextstepjs';

const CustomCard: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 max-w-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{step.title}</h2>
        {step.icon}
      </div>
      <div className="mb-4 bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>
      <p>{step.content}</p>
      {step.showControls && (
        <div className="flex justify-between mt-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="bg-blue-400 text-gray-800 px-4 py-2 rounded-md"
          >
            {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
      {step.showSkip && (
        <button
          onClick={skipTour}
          className="px-4 py-2 rounded-md bg-slate-300 text-gray-800"
        >
          Skip
        </button>
      )}
      {arrow}
    </div>
  );
};

export default CustomCard;
