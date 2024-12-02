import { Profile } from '../types/profile';

export const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 28,
    bio: 'Adventure seeker and coffee enthusiast. Love hiking and photography.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    location: 'New York, NY',
    interests: ["one","two","three"]
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 31,
    bio: 'Tech entrepreneur by day, chef by night. Looking for someone to share meals with.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    location: 'San Francisco, CA',
    interests: ["one","two","three"]

  },
  {
    id: '3',
    name: 'Emma Wilson',
    age: 26,
    bio: 'Yoga instructor and wellness coach. Passionate about mindful living.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    location: 'Los Angeles, CA',
    interests: ["one","two","three"]

  }
];