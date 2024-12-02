"use client"
import React, { useState } from 'react';
import { Robot } from '../../components/Robot';
import { GradientButton } from '../../components/GradientButton';
import Navbar from '../navbar';
import Footer from '@/components/footer';
import { redirect } from 'next/navigation';

function App() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-[#F9F4F8] flex flex-col items-center justify-center relative overflow-hidden">
    <div className="fixed top-1/4 transform -translate-y-1/2">
      <Robot isHovering={isHovering} />
    </div>
  
      <div className="flex flex-col space-y-6 z-10">
        <GradientButton onHover={setIsHovering}>
          Blind Chain Dates
        </GradientButton>
        
        <GradientButton onHover={setIsHovering} >
          <a onClick={()=>redirect("/foryou")}>For You</a>
        </GradientButton>
        
        <GradientButton onHover={setIsHovering}>
          Mood Based Match
        </GradientButton>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;