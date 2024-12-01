import React from 'react';
import { Check, Circle } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep
                ? 'bg-primary-300 text-white'
                : index === currentStep
                ? 'bg-primary-500 text-white'
                : 'bg-primary-100'
            }`}
          >
            {index < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <Circle className="w-5 h-5" />
            )}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`h-0.5 w-8 ${
                index < currentStep ? 'bg-primary-300' : 'bg-primary-100'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};