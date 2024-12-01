import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import type { RelationshipGoal } from './types/form';

interface RelationshipStepProps {
  selected: RelationshipGoal | '';
  onChange: (value: RelationshipGoal) => void;
}

export const RelationshipStep: React.FC<RelationshipStepProps> = ({ selected, onChange }) => {
  const options = ['Casual', 'Serious', 'Friendship', 'Other'] as RelationshipGoal[];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-primary-500">What are you looking for?</h2>
      <CheckboxGroup
        options={options}
        selectedValues={selected ? [selected] : []}
        onChange={(values) => onChange(values[values.length - 1] as RelationshipGoal)}
      />
    </div>
  );
};