import React from 'react';
import { interestCategories as interests } from './data/interests';

interface InterestSectionProps {
  selectedInterests: Record<string, string[]>;
  onChange: (category: string, interest: string) => void;
}

export function InterestSection({
  selectedInterests,
  onChange,
}: InterestSectionProps) {
  const categories = Object.entries(interests);

  return (
    <div className="space-y-6">
  <h2 className="text-2xl font-bold text-[#8E2A4A]">Interests</h2>

  <div className="space-y-8">
    {categories.map(([category, items]) => (
      <div key={category} className="space-y-2">
        <h3 className="text-lg font-semibold capitalize text-[#D14E70]">
          {category.replace(/([A-Z])/g, ' $1').trim()}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {items.map((interest) => (
            <label
              key={interest}
              className="flex items-center space-x-2 text-sm"
            >
              <input
                type="checkbox"
                checked={selectedInterests[category]?.includes(interest)}
                onChange={() => onChange(category, interest)}
                className="rounded border-[#D14E70] text-[#8E2A4A] focus:ring-[#D14E70]"
              />
              <span className="text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}