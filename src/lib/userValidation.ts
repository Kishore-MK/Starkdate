import { z } from "zod";

const personalityTraitEnum = z.enum(["INTROVERT", "EXTROVERT", "AMBIVERT"]);
const zodiacSignEnum = z.enum([
  "ARIES",
  "TAURUS",
  "GEMINI",
  "CANCER",
  "LEO",
  "VIRGO",
  "LIBRA",
  "SCORPIO",
  "SAGITTARIUS",
  "CAPRICORN",
  "AQUARIUS",
  "PISCES",
]);
const relationshipGoalEnum = z.enum(["CASUAL", "SERIOUS", "FRIENDSHIP", "OTHER"]);
const lifestyleEnum = z.enum(["ACTIVE", "MODERATE", "RELAXED"]);

export const userProfileSchema = z.object({
  id: z.string().optional(), // MongoDB ObjectId as a string
  name: z.string().min(1, "Name is required"),
  address: z.string(),
  personalityTrait: personalityTraitEnum,
  interests: z.array(z.string()).min(1, "At least one interest is required"),
  lifestyle: lifestyleEnum,
  relationshipGoal: relationshipGoalEnum,
  zodiacSign: zodiacSignEnum,
  education: z.string().optional(),
  profession: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;
