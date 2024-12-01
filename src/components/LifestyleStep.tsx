import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import type { LifestyleChoice } from '../types/form';

interface LifestyleStepProps {
  selected: LifestyleChoice | '';
  onChange: (value: LifestyleChoice) => void;
}

export const LifestyleStep: React.FC<LifestyleStepProps> = ({ selected, onChange }) => {
  const options = ['ACTIVE', 'MODERATE', 'RELAXED'] as LifestyleChoice[];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-primary-500">What's your lifestyle?</h2>
      <CheckboxGroup
        options={options}
        selectedValues={selected ? [selected] : []}
        onChange={(values) => onChange(values[values.length - 1] as LifestyleChoice)}
      />
    </div>
  );
};