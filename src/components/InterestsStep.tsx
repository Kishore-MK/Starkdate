import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { interestCategories } from './data/interests';

interface InterestsStepProps {
  selected: string[];
  onChange: (interests: string[]) => void;
}

export const InterestsStep: React.FC<InterestsStepProps> = ({ selected, onChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-primary-500">Select your interests</h2>
      <div className="space-y-8">
        {Object.entries(interestCategories).map(([category, interests]) => (
          <CheckboxGroup
            key={category}
            label={category}
            options={interests}
            selectedValues={selected.filter((s) => interests.includes(s))}
            onChange={(values) => {
              const otherInterests = selected.filter((s) => !interests.includes(s));
              onChange([...otherInterests, ...values]);
            }}
          />
        ))}
      </div>
    </div>
  );
};