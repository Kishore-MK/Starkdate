'use client';

import Footer from '@/components/footer';
import React, { useState } from 'react';
import Navbar from '../navbar';
import Image from 'next/image';
interface Soulmate {
  id: number;
  profileImage: string;
  experience: string;
  status: 'pending' | 'approved';
  nftCount: number;
  walletAddress: string;
}

const Home: React.FC = () => {
  const initialSoulmates: Soulmate[] = [
    {
      id: 1,
      profileImage: 'https://via.placeholder.com/150',
      experience: '',
      status: 'pending',
      nftCount: 0,
      walletAddress: '0x123...abc',
    },
    {
      id: 2,
      profileImage: 'https://via.placeholder.com/150',
      experience: 'This is a static data',
      status: 'approved',
      nftCount: 0,
      walletAddress: '0x456...def',
    },
  ];

  const [soulmates, setSoulmates] = useState<Soulmate[]>(initialSoulmates);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');

  const handleSubmitForm = (id: number, experience: string) => {
    setSoulmates((prev) =>
      prev.map((soulmate) =>
        soulmate.id === id ? { ...soulmate, experience, status: 'approved' } : soulmate
      )
    );
  };

  const filteredSoulmates = soulmates.filter(
    (soulmate) => filter === 'all' || soulmate.status === filter
  );

  return (
    <div> <Navbar/>
    <div className=" min-h-screen bg-[#e495b6] flex flex-col p-6 px-12">
     <div className='container mx-auto'>
  {/* Header */}
  <header className="w-full mb-6">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-extrabold text-white text-left">LOVE LEDGER</h1>
    </div>
    <div className="relative z-0">
        <Image
          src="/lipbg14.png"
          width={280}
          height={145}
          alt="Image lip"
          className="absolute -top-32 left-20 transform rotate-12 opacity-50"
        />
      </div>
    <div className="flex justify-between items-center mt-2">
      <p className="text-[#ffffff] text-xl font-semibold">Soulmate NFTs</p>
      <div>
        <label className="text-[#ffffff] font-semibold mr-2">Filter by Status:</label>
        <select
          className="px-4 py-2 border-2 text-black border-[#F57474] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D14E70]"
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'all' | 'pending' | 'approved')}
        >
          <option className="text-black" value="all">All</option>
          <option className="text-black" value="pending">Pending</option>
          <option className="text-black" value="approved">Approved</option>
        </select>
      </div>
    </div>
  </header>

  {/* Display Soulmates */}
  <div className="flex-grow w-full ">
    {filteredSoulmates.map((soulmate) => (
      <div
        key={soulmate.id}
        className="bg-[#fc61613a] shadow-xl rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-all duration-300 mb-6 w-full"
      >
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={soulmate.profileImage}
            alt={`Soulmate ${soulmate.id}`}
            className="w-28 h-28 rounded-full border-4 border-[#F57474] shadow-lg"
          />
        </div>
        
        {/* Form Content */}
        <div className="flex-1">
          <h2 className="text-[#D14E70] font-semibold text-lg mb-2">Experience:</h2>
          {soulmate.status === 'pending' ? (
            <textarea
              rows={3}
              className="bg-[#F7D1D1] text-black placeholder-black w-full mt-2 px-4 py-2 border-2 border-[#F57474] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D14E70]"
              placeholder="Write your experience about this soulmate..."
              value={soulmate.experience}
              onChange={(e) =>
                setSoulmates((prev) =>
                  prev.map((s) =>
                    s.id === soulmate.id
                      ? { ...s, experience: e.target.value }
                      : s
                  )
                )
              }
            />
          ) : (
            <p className="mt-2 text-black">{soulmate.experience}</p>
          )}
        </div>

        {/* Submit Button (Visible for Pending) */}
        {soulmate.status === 'pending' && (
          <div className="flex items-start">
            <button
              className="bg-[#bb2b52] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#D14E70] transition-all duration-200"
              onClick={() => handleSubmitForm(soulmate.id, soulmate.experience)}
            >
              Submit
            </button>
          </div>
        )}

        {/* Extra Information (Visible for Approved) */}
        {soulmate.status === 'approved' && (
          <div className="text-right text-[#000000]">
            <p>{soulmate.nftCount} Staked NFTs</p>
            <p>{soulmate.walletAddress}</p>
          </div>
        )}
      </div>
    ))}
  </div>
      
    </div>
    </div><Footer/>
    </div>
  );
};

export default Home;