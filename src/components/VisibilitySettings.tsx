import React, { useState } from 'react';
import type { Gender } from './types/profile';
import { Label } from './ui/label';

interface VisibilitySettingsProps {
  saved: boolean;
  setSaved: (state:boolean)=>void;
  isPublic: boolean;
  ageRange: {
    min: number;
    max: number;
  };
  genderPreferences: Gender[];
  onChange: (field: string, value: boolean | number | Gender[]) => void;
}

export function VisibilitySettings({
  saved,
  setSaved,
  isPublic,
  ageRange,
  genderPreferences,
  onChange,
}: VisibilitySettingsProps) {
  const [savedgender,setGender]=useState("");
  const handleGenderPreferenceChange = (gender: Gender) => {
    const updatedPreferences = genderPreferences.includes(gender)
      ? genderPreferences.filter((g) => g !== gender)
      : [...genderPreferences, gender];
    onChange('genderPreferences', updatedPreferences);
    setGender(updatedPreferences[0])
  };

  return (
    <div className="space-y-6">
  <h2 className="text-2xl font-bold text-[#8E2A4A]">Visibility Settings</h2>
  
  <div className="space-y-4">
    {/* Public Profile */}
    <label className="flex items-center space-x-2">
      <span className="text-sm font-medium text-[#8E2A4A]">Public Profile</span>
      {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{isPublic}</Label>:
      <input
        type="checkbox"
        checked={isPublic}
        onChange={(e) => onChange('isPublic', e.target.checked)}
        className="rounded border-pink-300 text-[#D14E70] focus:ring-[#D14E70]"
      />}
    </label>

    {/* Age Range Preference */}
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#8E2A4A]">
        Age Range Preference
      </label>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="18"
          max="99"
          value={ageRange.min}
          onChange={(e) => onChange('ageRangeMin', parseInt(e.target.value))}
          className="w-full accent-[#D14E70]"
        />
        <span className="text-sm text-[#8E2A4A]">{ageRange.min}</span>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="18"
          max="99"
          value={ageRange.max}
          onChange={(e) => onChange('ageRangeMax', parseInt(e.target.value))}
          className="w-full accent-[#D14E70]"
        />
        <span className="text-sm text-[#8E2A4A]">{ageRange.max}</span>
      </div>
    </div>

    {/* Gender Preferences */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A] mb-2">
        Gender Preferences
      </label>
      <div className="space-y-2">
      {saved? <Label className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{savedgender}</Label>: <div>
        {(['Male', 'Female', 'Non-binary', 'Other'] as Gender[]).map(
          (gender) => (
            <label key={gender} className="flex items-center space-x-2">
             
              <input
                type="checkbox"
                checked={genderPreferences.includes(gender)}
                onChange={() => handleGenderPreferenceChange(gender)}
                className="rounded border-pink-300 text-[#D14E70] focus:ring-[#D14E70]"
              />
              <span className="text-sm text-[#8E2A4A]">{gender}</span>
            </label>
          )
        )}</div>}
      </div>
    </div>
  </div>
</div>

  );
}