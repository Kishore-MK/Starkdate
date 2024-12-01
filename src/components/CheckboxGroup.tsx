import React from 'react';

interface CheckboxGroupProps {
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  label?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
  label,
}) => {
  const handleChange = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(newValues);
  };

  return (
    <div className="space-y-4">
      {label && <h3 className="text-lg font-semibold mb-3 text-primary-400">{label}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((option) => (
          <label
            key={option}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
              selectedValues.includes(option)
                ? 'border-primary-300 bg-primary-100/10'
                : 'border-primary-100 hover:bg-primary-100/5'
            }`}
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={() => handleChange(option)}
              className="h-4 w-4 text-primary-500 border-primary-200 focus:ring-primary-400"
            />
            <span className="ml-3 text-primary-400">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};