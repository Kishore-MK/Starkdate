"use client"
import React, { useState } from 'react';
import { BasicInfo } from '../../components/BasicInfo';
import { AboutMe } from '../../components/AboutMe';
import { InterestSection } from '../../components/InterestSection';
import { LifestylePreferences } from '../../components/LifestylePreferences';
import { VisibilitySettings } from '../../components/VisibilitySettings';
import type { UserProfile } from '../../components/types/profile';
import { interestCategories } from '../../components/data/interests';

function App() {
  const [profile, setProfile] = useState<UserProfile>({
    basicInfo: {
      profilePicture: '',
      name: '',
      age: 18,
      gender: 'Male',
      location: '',
    },
    aboutMe: {
      bio: '',
      personalityTrait: 'AMBIVERT',
      zodiacSign: 'Aries',
    },
    interests: Object.fromEntries(
      Object.keys(interestCategories).map((category) => [category, []])
    ) as UserProfile['interests'],
    lifestyle: {
      lifestyleChoice: 'MODERATE',
      relationshipGoal: 'CASUAL',
      smoking: false,
      drinking: false,
      dietPreference: 'Non-Vegetarian',
    },
    visibility: {
      isPublic: true,
      ageRange: {
        min: 18,
        max: 99,
      },
      genderPreferences: ['Female'],
    },
  });

  const handleBasicInfoChange = (field: string, value: string | number) => {
    setProfile((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [field]: value,
      },
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleBasicInfoChange('profilePicture', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAboutMeChange = (field: string, value: string) => {
    setProfile((prev) => ({
      ...prev,
      aboutMe: {
        ...prev.aboutMe,
        [field]: value,
      },
    }));
  };

  const handleInterestChange = (category: string, interest: string) => {
    setProfile((prev) => {
      const currentInterests = prev.interests[category as keyof typeof interests];
      const updatedInterests = currentInterests.includes(interest)
        ? currentInterests.filter((i) => i !== interest)
        : [...currentInterests, interest];

      return {
        ...prev,
        interests: {
          ...prev.interests,
          [category]: updatedInterests,
        },
      };
    });
  };

  const handleLifestyleChange = (field: string, value: string | boolean) => {
    setProfile((prev) => ({
      ...prev,
      lifestyle: {
        ...prev.lifestyle,
        [field]: value,
      },
    }));
  };

  const handleVisibilityChange = (
    field: string,
    value: boolean | number | string[]
  ) => {
    setProfile((prev) => {
      if (field === 'ageRangeMin') {
        return {
          ...prev,
          visibility: {
            ...prev.visibility,
            ageRange: {
              ...prev.visibility.ageRange,
              min: value as number,
            },
          },
        };
      }
      if (field === 'ageRangeMax') {
        return {
          ...prev,
          visibility: {
            ...prev.visibility,
            ageRange: {
              ...prev.visibility.ageRange,
              max: value as number,
            },
          },
        };
      }
      return {
        ...prev,
        visibility: {
          ...prev.visibility,
          [field]: value,
        },
      };
    });
  };

  const handleSaveProfile = () => {
    console.log('Profile Data:', profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 py-8">
  <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
    <h1 className="text-3xl font-bold text-center text-[#8E2A4A] mb-8">Dating Profile</h1>
    
    <div className="space-y-12">
      <BasicInfo
        {...profile.basicInfo}
        onChange={handleBasicInfoChange}
        onImageUpload={handleImageUpload}
      />
      
      <hr className="border-[#D14E70]" />
      
      <AboutMe
        {...profile.aboutMe}
        onChange={handleAboutMeChange}
      />
      
      <hr className="border-[#D14E70]" />
      
      <InterestSection
        selectedInterests={profile.interests}
        onChange={handleInterestChange}
      />
      
      <hr className="border-[#D14E70]" />
      
      <LifestylePreferences
        {...profile.lifestyle}
        onChange={handleLifestyleChange}
      />
      
      <hr className="border-[#D14E70]" />
      
      <VisibilitySettings
        {...profile.visibility}
        onChange={handleVisibilityChange}
      />
      
      <div className="flex justify-center pt-6">
        <button
          onClick={handleSaveProfile}
          className="bg-[#D14E70] text-white px-6 py-2 rounded-md hover:bg-[#8E2A4A] focus:outline-none focus:ring-2 focus:ring-[#D14E70] focus:ring-offset-2"
        >
          Save Profile
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;