export type Gender = 'Male' | 'Female' | 'Non-binary' | 'Other';
export type PersonalityTrait = 'INTROVERT' | 'EXTROVERT' | 'AMBIVERT';
export type ZodiacSign =
  | 'Aries'
  | 'Taurus'
  | 'Gemini'
  | 'Cancer'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces';

export type LifestyleChoice = 'ACTIVE' | 'MODERATE' | 'RELAXED';
export type RelationshipGoal = 'CASUAL' | 'SERIOUS' | 'FRIENDSHIP' | 'OTHER';
export type DietPreference = 'Vegetarian' | 'Non-Vegetarian' | 'Vegan' | 'Other';

export interface UserProfile {
  
  basicInfo: {
    profilePicture: string;
    name: string;
    age: number;
    gender: Gender;
    location: string;
  };
  aboutMe: {
    bio: string;
    personalityTrait: PersonalityTrait;
    zodiacSign: ZodiacSign;
  };
  interests: {
    selfCare: string[];
    sports: string[];
    creativity: string[];
    goingOut: string[];
    filmAndTv: string[];
    reading: string[];
    foodAndDrink: string[];
    traveling: string[];
    pets: string[];
  };
  lifestyle: {
    lifestyleChoice: LifestyleChoice;
    relationshipGoal: RelationshipGoal;
    smoking: boolean;
    drinking: boolean;
    dietPreference: DietPreference;
  };
  visibility: {
    isPublic: boolean;
    ageRange: {
      min: number;
      max: number;
    };
    genderPreferences: Gender[];
  };
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  image: string;
  location: string;
  interests: string[];
}
export type SwipeDirection = 'left' | 'right' | 'up' | null;