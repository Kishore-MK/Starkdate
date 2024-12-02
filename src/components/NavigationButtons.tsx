import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FormData } from './types/form';
import { redirect } from 'next/navigation';

interface NavigationButtonsProps {
  data: FormData,
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  data,
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
  onClick={() => {
    if (currentStep === totalSteps) {
      handleSubmit(); // Function invoked on submit
    } else {
      onNext(); // Function invoked on next
    }
  }}
  disabled={isNextDisabled}
  className={`flex items-center px-4 py-2 text-sm font-medium text-white rounded-md ml-auto transition duration-150 ease-in-out ${
    isNextDisabled
      ? "bg-primary-100 cursor-not-allowed"
      : "bg-primary-500 hover:bg-primary-400"
  }`}
>
  {currentStep === totalSteps ? "Submit" : "Next"}
  {currentStep !== totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
</button>

    </div>
  );
  async function handleSubmit(){
    const user= {
      name: 'test',
      address: '0x123',
      personalityTrait: 'Extrovert',
      interests: [ 'Cats' ],
      lifestyleChoice: 'MODERATE',
      relationshipGoal: 'Other',
      zodiacSign: 'CAPRICORN',
      education: 'nothing',
      profession: 'nothing'
    }
    const response = await fetch("/api/starkdate-v1", {
      method: "POST",
      body: JSON.stringify(
        user
      ),
    });
    if (!response.ok) throw Error("Status code: " + response.status);
    redirect("userprofile");
  }
};

