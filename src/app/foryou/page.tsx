"use client"
import { useState } from 'react';
import { mockProfiles } from '../../components/data/mockProfiles';
import { ProfileCard } from '../../components/ProfileCard';
import { ProfileModal } from '../../components/ProfileModal';
import { SwipeDirection } from '../../components/types/profile';
import { UserIcon } from '@heroicons/react/24/outline';
import Navbar from '../navbar';
import Footer from '@/components/footer';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [likes, setLikes] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);

  const currentProfile = mockProfiles[currentIndex];
  const [showDetails, setShowDetails] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);


  const handleSwipe = (direction: SwipeDirection) => {
    if (!currentProfile) return;

    if (direction === 'right') {
      setLikes(prev => [...prev, currentProfile.id]);
      console.log('Liked profiles:', [...likes, currentProfile.id]);
    } else if (direction === 'left') {
      setDislikes(prev => [...prev, currentProfile.id]);
      console.log('Disliked profiles:', [...dislikes, currentProfile.id]);
    } else if (direction === 'up') {
      setIsProfileOpen(true);
    }

    if (direction === 'left' || direction === 'right') {
      setCurrentIndex(prev => Math.min(prev + 1, mockProfiles.length - 1));
    }
  };

  const handleLike = () => {
    setDirection('right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mockProfiles.length);
      setDirection(null);
    }, 300);
  };

  const handleDislike = () => {
    setDirection('left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mockProfiles.length);
      setDirection(null);
    }, 300);
  };

  return (
    <div><Navbar/>
    
        
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-4">
      <div className="max-w-md mx-auto pt-10">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
          For you
        </h1>


      <div className="max-w-sm mx-auto relative h-[600px]">
        {mockProfiles.map((profile, index) => (
          <ProfileCard 
              onSwipe={handleSwipe}
            key={profile.id}
            profile={profile}
            onLike={handleLike}
            onDislike={handleDislike}
            onViewDetails={() => setShowDetails(true)}
            isVisible={index === currentIndex}
          />
        ))}
      </div>

      <ProfileModal
        profile={currentProfile}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
      />
    

        {!currentProfile && (
          <div className="text-center text-gray-600 mt-10">
            No more profiles to show!
          </div>
        )}
      </div>
    </div>
    
    <Footer/>
    </div>
  );
}

export default App;