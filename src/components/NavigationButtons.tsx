import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isNextDisabled,
}) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 1 && (
        <button
          onClick={onPrevious}
          className="flex items-center px-4 py-2 text-sm font-medium text-primary-500 bg-white border border-primary-200 rounded-md hover:bg-primary-100/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
      )}
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`flex items-center px-4 py-2 text-sm font-medium text-white rounded-md ml-auto ${
          isNextDisabled
            ? 'bg-primary-100 cursor-not-allowed'
            : 'bg-primary-500 hover:bg-primary-400'
        }`}
      >
        {currentStep === totalSteps ? 'Submit' : 'Next'}
        {currentStep !== totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
      </button>
    </div>
  );
};