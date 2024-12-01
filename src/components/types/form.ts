export type PersonalityTrait = 'Introvert' | 'Extrovert' | 'Ambhivert';
export type LifestyleChoice = 'Active' | 'Moderate' | 'Relaxed';
export type RelationshipGoal = 'Casual' | 'Serious' | 'Friendship' | 'Others';
export type ZodiacSign =
  | 'ARIES'
  | 'TAURUS'
  | 'GEMINI'
  | 'CANCER'
  | 'LEO'
  | 'VIRGO'
  | 'LIBRA'
  | 'SCORPIO'
  | 'SAGITTARIUS'
  | 'CAPRICORN'
  | 'AQUARIUS'
  | 'PISCES';

export interface FormData {
  personalityTrait: PersonalityTrait | '';
  interests: string[];
  lifestyleChoice: LifestyleChoice | '';
  relationshipGoal: RelationshipGoal | '';
  zodiacSign: ZodiacSign | '';
}