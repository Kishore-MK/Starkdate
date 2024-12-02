import React from 'react';
import type {
  LifestyleChoice,
  RelationshipGoal,
  DietPreference,
} from './types/profile';
import { Label } from './ui/label';

interface LifestylePreferencesProps {
  saved: boolean;
  setSaved: (state:boolean)=>void;
  lifestyleChoice: LifestyleChoice;
  relationshipGoal: RelationshipGoal;
  smoking: boolean;
  drinking: boolean;
  dietPreference: DietPreference;
  onChange: (field: string, value: string | boolean) => void;
}

export function LifestylePreferences({
  saved,
  setSaved,
  lifestyleChoice,
  relationshipGoal,
  smoking,
  drinking,
  dietPreference,
  onChange,
}: LifestylePreferencesProps) {
  return (
    <div className="space-y-6">
  <h2 className="text-2xl font-bold text-[#8E2A4A]">Lifestyle & Preferences</h2>
  
  <div className="space-y-4">
    {/* Lifestyle Choice */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A]">
        Lifestyle Choice
      </label>
      {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{lifestyleChoice}</Label>:
      <select
        value={lifestyleChoice}
        onChange={(e) => onChange('lifestyleChoice', e.target.value)}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
      >
        <option value="ACTIVE">Active</option>
        <option value="MODERATE">Moderate</option>
        <option value="RELAXED">Relaxed</option>
      </select>}
    </div>

    {/* Relationship Goal */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A]">
        Relationship Goal
      </label>
      {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{relationshipGoal}</Label>:
      <select
        value={relationshipGoal}
        onChange={(e) => onChange('relationshipGoal', e.target.value)}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
      >
        <option value="CASUAL">Casual</option>
        <option value="SERIOUS">Serious</option>
        <option value="FRIENDSHIP">Friendship</option>
        <option value="OTHER">Other</option>
      </select>}
    </div>

    {/* Smoking and Drinking */}
    <div className="flex space-x-4">
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-[#8E2A4A]">Smoking</span>
        {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{smoking}</Label>:
        <input
          type="checkbox"
          checked={smoking}
          onChange={(e) => onChange('smoking', e.target.checked)}
          className="rounded border-pink-300 text-[#D14E70] focus:ring-[#D14E70]"
        />}
      </label>

      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-[#8E2A4A]">Drinking</span>
        {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{drinking}</Label>:<input
          type="checkbox"
          checked={drinking}
          onChange={(e) => onChange('drinking', e.target.checked)}
          className="rounded border-pink-300 text-[#D14E70] focus:ring-[#D14E70]"
          />}
      </label>
    </div>

    {/* Diet Preference */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A]">
        Diet Preference
      </label>
      {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{dietPreference}</Label>:<select
        value={dietPreference}
        onChange={(e) => onChange('dietPreference', e.target.value)}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
      >
        <option value="Vegetarian">Vegetarian</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Other">Other</option>
      </select>}
    </div>
  </div>
</div>

  );
}