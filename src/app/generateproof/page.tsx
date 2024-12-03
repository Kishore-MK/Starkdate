"use client"
import Footer from "@/components/footer";
import React, { useState } from "react";
import Navbar from "../navbar";

type ImageUploaderProps = {
  onGenerateProof: (image: File | null) => void;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ onGenerateProof }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleGenerateProof = () => {
    onGenerateProof(selectedImage);
  };

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    
    <div className="flex-grow  flex flex-col items-center justify-center space-y-6 bg-[#F9F4F8] p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold text-[#D14E70]">Upload Secure QR</h2>
  
      <div className="relative w-40 h-40 bg-gradient-to-r from-[#D14E70] via-[#F2994A] to-[#F7B267] rounded-full overflow-hidden shadow-lg">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white font-bold text-center">
            No Image
          </div>
        )}
        <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#D14E70]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16V12a4 4 0 014-4h4m4-4h4a4 4 0 014 4v4m-8 16v-4m-8 4H8m8 4h4"
            />
          </svg>
        </label>
      </div>
  
      <button
        onClick={handleGenerateProof}
        disabled={!selectedImage}
        className={`px-8 py-3 rounded-full text-white font-bold text-lg shadow-lg transition-all duration-300 ${
          selectedImage
            ? "bg-gradient-to-r from-[#D14E70] via-[#F2994A] to-[#F7B267] hover:scale-105 hover:shadow-xl"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Generate Proof
      </button>
    </div>
  
    <Footer />
  </div>
  
  );
};

export default ImageUploader;
