import React from 'react';
import type { PersonalityTrait, ZodiacSign } from './types/profile';
import { Label } from './ui/label';
import { Select } from './ui/select';

interface AboutMeProps {
  saved: boolean;
  setSaved: (state:boolean)=>void;
  bio: string;
  personalityTrait: PersonalityTrait;
  zodiacSign: ZodiacSign;
  onChange: (field: string, value: string) => void;
}

export function AboutMe({
  saved,
  setSaved,
  bio,
  personalityTrait,
  zodiacSign,
  onChange,
}: AboutMeProps) {
  const zodiacSigns: ZodiacSign[] = [
    'Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpio',
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  return (
    <div className="space-y-6">
  <h2 className="text-2xl font-bold text-[#8E2A4A]">About Me</h2>
  
  <div className="space-y-4">
    {/* Bio */}
    <div>
      <Label className="block text-sm font-medium text-[#8E2A4A]">Bio</Label>
      {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{bio}</Label>:
        <div>
      <textarea
        value={bio}
        onChange={(e) => onChange('bio', e.target.value)}
        maxLength={250}
        rows={4}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70] placeholder-pink-400"
        placeholder="Tell us about yourself..."
      />
      <p className="text-sm text-pink-500 mt-1">{bio.length}/250 characters</p>
      </div>}
    </div>

    {/* Personality Trait */}
    <div>
      <Label className="block text-sm font-medium text-[#8E2A4A]">
        Personality Trait
      </Label>
      
      {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{personalityTrait}</Label>:
      <select
        value={personalityTrait}
        onChange={(e) => onChange('personalityTrait', e.target.value)}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
      >
        <option value="INTROVERT">Introvert</option>
        <option value="EXTROVERT">Extrovert</option>
        <option value="AMBIVERT">Ambivert</option>
      </select>}
    </div>

    {/* Zodiac Sign */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A]">
        Zodiac Sign
      </label>
      {saved? <Label         className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        >{zodiacSign}</Label>:
      <select
        value={zodiacSign}
        onChange={(e) => onChange('zodiacSign', e.target.value as ZodiacSign)}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
      >
        {zodiacSigns.map((sign) => (
          <option key={sign} value={sign}>
            {sign}
          </option>
        ))}
      </select>}
    </div>
  </div>
</div>

  );
}