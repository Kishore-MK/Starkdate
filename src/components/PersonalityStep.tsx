import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import type { PersonalityTrait } from './types/form';

interface PersonalityStepProps {
  selected: PersonalityTrait | '';
  onChange: (value: PersonalityTrait) => void;
}

export const PersonalityStep: React.FC<PersonalityStepProps> = ({ selected, onChange }) => {
  const options = ['Introvert', 'Extrovert', 'Ambivert'] as PersonalityTrait[];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-primary-500">What's your personality type?</h2>
      <CheckboxGroup
        options={options}
        selectedValues={selected ? [selected] : []}
        onChange={(values) => onChange(values[values.length - 1] as PersonalityTrait)}
      />
    </div>
  );
};