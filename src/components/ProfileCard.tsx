import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { Profile, SwipeDirection } from './types/profile';
import { useState } from 'react';
import { Heart, X, Info } from 'lucide-react';

import clsx from 'clsx';
import { Check } from 'lucide-react';


interface ProfileCardProps {
  onSwipe: (direction: SwipeDirection) => void;
  className?: string;
  profile: Profile;
  onLike: () => void;
  onDislike: () => void;
  onViewDetails: () => void;
  isVisible: boolean;
}

export function ProfileCard({onSwipe, profile, onLike, onDislike, onViewDetails, isVisible }: ProfileCardProps) {
  const [dragDirection, setDragDirection] = useState<SwipeDirection>(null);

//   const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//     const swipeThreshold = 100;
//     const yThreshold = 150;
    
//     if (info.offset.y < -yThreshold) {
//       onSwipe('up');
//     } else if (Math.abs(info.offset.x) > swipeThreshold) {
//       onSwipe(info.offset.x > 0 ? 'right' : 'left');
//     }
//   };

//   const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//     const swipeThreshold = 50;
//     const yThreshold = 100;

//     if (info.offset.y < -yThreshold) {
//       setDragDirection('up');
//     } else if (Math.abs(info.offset.x) > swipeThreshold) {
//       setDragDirection(info.offset.x > 0 ? 'right' : 'left');
//     } else {
//       setDragDirection(null);
//     }
//   };

//   return (
//     <motion.div
//       drag
//       dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//       dragElastic={0.9}
//       onDragEnd={handleDragEnd}
//       onDrag={handleDrag}
//       className={clsx(
//         'relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing',
//         className
//       )}
//     >
//       <img
//         src={profile.imageUrl}
//         alt={profile.name}
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      
//       {/* Swipe Indicators */}
//       <div
//         className={clsx(
//           'absolute inset-0 flex items-center justify-center transition-opacity',
//           dragDirection === 'left' ? 'opacity-100' : 'opacity-0'
//         )}
//       >
//         <span className="text-4xl text-red-500 font-bold border-4 border-red-500 rounded-full px-6 py-2 rotate-[-25deg]">
//           NOPE
//         </span>
//       </div>
//       <div
//         className={clsx(
//           'absolute inset-0 flex items-center justify-center transition-opacity',
//           dragDirection === 'right' ? 'opacity-100' : 'opacity-0'
//         )}
//       >
//         <span className="text-4xl text-green-500 font-bold border-4 border-green-500 rounded-full p-3  rotate-12">
//           <Check className='font-extrabold w-10 h-10'/>
//         </span>
//       </div>
//       <div
//         className={clsx(
//           'absolute inset-0 flex items-center justify-center transition-opacity',
//           dragDirection === 'up' ? 'opacity-100' : 'opacity-0'
//         )}
//       >
        
//       </div>

//       {/* Profile Info */}
//       <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//         <h2 className="text-2xl font-bold">
//           {profile.name}, {profile.age}
//         </h2>
//         <p className="text-sm mt-1">{profile.location}</p>
//         <p className="text-sm mt-2 line-clamp-2">{profile.bio}</p>
//       </div>
//     </motion.div>
//   );
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="absolute w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative aspect-[3/4]">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">{profile.name}, {profile.age}</h2>
              <p className="text-white/90">{profile.location}</p>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex gap-2 flex-wrap">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>

            <p className="text-gray-600">{profile.bio}</p>

            <div className="flex justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onDislike}
                className="p-4 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition-colors"
              >
                <X size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onViewDetails}
                className="p-4 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition-colors"
              >
                <Info size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onLike}
                className="p-4 rounded-full bg-green-100 text-green-500 hover:bg-green-200 transition-colors"
              >
                <Heart size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
