import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import type { ZodiacSign } from './types/form';

interface ZodiacStepProps {
  selected: ZodiacSign | '';
  onChange: (value: ZodiacSign) => void;
}

export const ZodiacStep: React.FC<ZodiacStepProps> = ({ selected, onChange }) => {
  const options = [
    'ARIES',
    'TAURUS',
    'GEMINI',
    'CANCER',
    'LEO',
    'VIRGO',
    'LIBRA',
    'SCORPIO',
    'SAGITTARIUS',
    'CAPRICORN',
    'AQUARIUS',
    'PISCES',
  ] as ZodiacSign[];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-primary-500">What's your zodiac sign?</h2>
      <CheckboxGroup
        options={options}
        selectedValues={selected ? [selected] : []}
        onChange={(values) => onChange(values[values.length - 1] as ZodiacSign)}
      />
    </div>
  );
};