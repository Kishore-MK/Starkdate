import React from 'react';
import { FormData } from './types/form';
import { interestCategories } from './data/interests';

interface SummaryProps {
  formData: FormData;
}

export const Summary: React.FC<SummaryProps> = ({ formData }) => {
  const getCategoryForInterest = (interest: string): string => {
    for (const [category, interests] of Object.entries(interestCategories)) {
      if (interests.includes(interest)) {
        return category;
      }
    }
    return 'Other';
  };

  const groupedInterests = formData.interests.reduce((acc, interest) => {
    const category = getCategoryForInterest(interest);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(interest);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-primary-100">
      <h2 className="text-2xl font-bold mb-6 text-primary-500">Summary</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary-400">Personality Trait</h3>
          <p className="text-primary-300">{formData.personalityTrait}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary-400">Interests</h3>
          {Object.entries(groupedInterests).map(([category, interests]) => (
            <div key={category} className="mb-4">
              <h4 className="text-md font-medium text-primary-300 mb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-primary-100/20 text-primary-500 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary-400">Lifestyle Choice</h3>
          <p className="text-primary-300">{formData.lifestyleChoice}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary-400">Relationship Goal</h3>
          <p className="text-primary-300">{formData.relationshipGoal}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary-400">Zodiac Sign</h3>
          <p className="text-primary-300">{formData.zodiacSign}</p>
        </div>
      </div>
    </div>
  );
};