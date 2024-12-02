import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Profile } from './types/profile';

interface ProfileDetailsProps {
  profile: Profile;
  onClose: () => void;
  isOpen: boolean;
}

export function ProfileModal({ profile, onClose, isOpen }: ProfileDetailsProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Profile Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-64 object-cover rounded-xl"
        />

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{profile.name}, {profile.age}</h3>
            <p className="text-gray-600">{profile.location}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">About Me</h4>
            <p className="text-gray-600">{profile.bio}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Interests</h4>
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}