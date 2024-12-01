import React from 'react';
import { Camera } from 'lucide-react';
import type { Gender } from './types/profile';

interface BasicInfoProps {
  profilePicture: string;
  name: string;
  age: number;
  gender: Gender;
  location: string;
  onChange: (field: string, value: string | number) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BasicInfo({
  profilePicture,
  name,
  age,
  gender,
  location,
  onChange,
  onImageUpload,
}: BasicInfoProps) {
  return (
    <div className="space-y-6">
  <h2 className="text-2xl font-bold text-[#8E2A4A]">Basic Information</h2>
  
  {/* Profile Picture */}
  <div className="relative w-32 h-32 mx-auto">
    <img
      src={profilePicture || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'}
      alt="Profile"
      className="w-full h-full rounded-full object-cover border-4 border-[#D14E70]"
    />
    <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer">
      <Camera className="w-5 h-5 text-[#8E2A4A]" />
      <input
        type="file"
        className="hidden"
        accept="image/*"
        onChange={onImageUpload}
      />
    </label>
  </div>

  {/* Input Fields */}
  <div className="space-y-4">
    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A]">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => onChange('name', e.target.value)}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
      />
    </div>

    {/* Age */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A]">Age</label>
      <input
        type="number"
        min="18"
        max="99"
        value={age}
        onChange={(e) => onChange('age', parseInt(e.target.value))}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
      />
    </div>

    {/* Gender */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A]">Gender</label>
      <select
        value={gender}
        onChange={(e) => onChange('gender', e.target.value)}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Other">Other</option>
      </select>
    </div>

    {/* Location */}
    <div>
      <label className="block text-sm font-medium text-[#8E2A4A]">Location</label>
      <input
        type="text"
        value={location}
        onChange={(e) => onChange('location', e.target.value)}
        className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-[#D14E70] focus:ring-[#D14E70]"
        placeholder="City, Country"
      />
    </div>
  </div>
</div>

  );
}