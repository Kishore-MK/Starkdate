import React from 'react';
import { X } from 'lucide-react';

type InterestCardProps = {
  interest: string;
  onRemove: (interest: string) => void;
};

export function InterestCard({ interest, onRemove }: InterestCardProps) {
  return (
    <div className="inline-flex items-center bg-pink-100 text-pink-800 rounded-full px-4 py-2 m-1">
      <span className="mr-2">{interest}</span>
      <button
        onClick={() => onRemove(interest)}
        className="hover:bg-pink-200 rounded-full p-1"
        aria-label="Remove interest"
      >
        <X size={14} />
      </button>
    </div>
  );
}