import React from 'react';

interface FormStepProps {
  currentStep: number;
  stepNumber: number;
  children: React.ReactNode;
}

export const FormStep: React.FC<FormStepProps> = ({
  currentStep,
  stepNumber,
  children,
}) => {
  if (currentStep !== stepNumber) return null;
  
  return <div className="animate-fadeIn">{children}</div>;
};