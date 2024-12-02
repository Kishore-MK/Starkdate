"use client"
import React, { useState } from 'react';
import { FormStep } from '../../components/FormStep';
import { StepIndicator } from '../../components/StepIndicator';
import { NavigationButtons } from '../../components/NavigationButtons';
import { Summary } from '../../components/Summary';
import { PersonalityStep } from '../../components/PersonalityStep';
import { InterestsStep } from '../../components/InterestsStep';
import { LifestyleStep } from '../../components/LifestyleStep';
import { RelationshipStep } from '../../components/RelationshipStep';
import { ZodiacStep } from '../../components/ZodiacStep';
import type {
  FormData,
  PersonalityTrait,
  LifestyleChoice,
  RelationshipGoal,
  ZodiacSign,
} from '../../components/types/form';
import Navbar from '../navbar';
import Footer from '@/components/footer';

const TOTAL_STEPS = 6;

export default function Profile() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalityTrait: '',
    interests: [],
    lifestyleChoice: '',
    relationshipGoal: '',
    zodiacSign: '',
  });

  const handleNext = () => {
    if (currentStep === TOTAL_STEPS) {
      console.log('Form submitted:', formData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !formData.personalityTrait;
      case 2:
        return formData.interests.length === 0;
      case 3:
        return !formData.lifestyleChoice;
      case 4:
        return !formData.relationshipGoal;
      case 5:
        return !formData.zodiacSign;
      default:
        return false;
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-8 mb-8">
          <FormStep currentStep={1} stepNumber={currentStep}>
            <PersonalityStep
              selected={formData.personalityTrait}
              onChange={(value) => setFormData({ ...formData, personalityTrait: value })}
            />
          </FormStep>

          <FormStep currentStep={2} stepNumber={currentStep}>
            <InterestsStep
              selected={formData.interests}
              onChange={(interests) => setFormData({ ...formData, interests })}
            />
          </FormStep>

          <FormStep currentStep={3} stepNumber={currentStep}>
            <LifestyleStep
              selected={formData.lifestyleChoice}
              onChange={(value) => setFormData({ ...formData, lifestyleChoice: value })}
            />
          </FormStep>

          <FormStep currentStep={4} stepNumber={currentStep}>
            <RelationshipStep
              selected={formData.relationshipGoal}
              onChange={(value) => setFormData({ ...formData, relationshipGoal: value })}
            />
          </FormStep>

          <FormStep currentStep={5} stepNumber={currentStep}>
            <ZodiacStep
              selected={formData.zodiacSign}
              onChange={(value) => setFormData({ ...formData, zodiacSign: value })}
            />
          </FormStep>

          <FormStep currentStep={6} stepNumber={currentStep}>
            <Summary formData={formData} />
          </FormStep>

          <NavigationButtons data={formData}
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            onPrevious={handlePrevious}
            onNext={handleNext}
            isNextDisabled={isNextDisabled()}
          />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
