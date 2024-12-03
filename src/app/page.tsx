

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Shield, Zap, Users } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from './navbar'
import StarknetKit from '@/components/walletconnect'
import Footer from '@/components/footer'
import { redirect } from 'next/navigation'


export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  

  return (
    <div className="min-h-screen bg-[#fc9db5]">
       <Navbar/>
       
      

       <main>
        <div className="relative z-0">
        <Image
          src="/lip1.png"
          width={180}
          height={145}
          alt="Image lip"
          className="absolute top-7 right-1/4 transform rotate-45 opacity-50"
        />
      </div>
      
      <section className="container mx-auto mt-3 px-4 py-20 text-center bg-gradient-to-r from-[#8E2A4A] to-[#D14E70] rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Where Connections Spark Securely
        </h1>
        <p className="text-xl text-white mb-8 opacity-90 leading-relaxed">
          Join StarkDate and experience a new era of private, secure, and exciting connections.
        </p>
        <Button
          onClick={() => redirect("/profilesetup")}
          className="btn-primary text-lg bg-white text-[#8E2A4A] hover:bg-[#b8526d] hover:text-white py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
        >
          Get Started
        </Button>
      </section>
     
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-center text-[#8E2A4A] mb-12 drop-shadow-lg">
          Why Choose StarkDate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-[#8E2A4A] drop-shadow-md" />}
            title="Secure Connections"
            description="Our zk-proof technology ensures your personal information stays private."
          />
          
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-[#8E2A4A] drop-shadow-md" />}
            title="Privacy-First Matchmaking"
            description="Find your perfect match without compromising your data."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-[#8E2A4A] drop-shadow-md" />}
            title="Tokenized Interactions"
            description="Fair and transparent dating experiences powered by blockchain."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-[#8E2A4A] to-[#D14E70] rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard
            number={1}
            title="Sign Up"
            description="Create your account and connect your Argent X wallet."
          />
          <StepCard
            number={2}
            title="Verify"
            description="Complete a simple zk-proof to verify your identity."
          />
          <StepCard
            number={3}
            title="Match"
            description="Browse profiles and find your perfect match."
          />
          <StepCard
            number={4}
            title="Connect"
            description="Start chatting and build meaningful connections."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-[#8E2A4A] mb-6 drop-shadow-lg">
          Ready to Find Your Spark?
        </h2>
        <Button onClick={()=>{redirect("/foryou")}}
          className="btn-primary text-lg bg-[#b12753] text-white py-3 px-6 rounded-full shadow-xl hover:bg-[#a01d47] transition-all duration-300"
        >
          Join StarkDate Now
        </Button>
      </section>

      <Footer/>

</main>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card bg-[#F7D1D1] bg-opacity-90 hover:bg-[#fdbcbc] transition-all duration-300 rounded-lg p-6 shadow-lg">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#8E2A4A] mb-2">{title}</h3>
      <p className="text-[#5A3D42]">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="card bg-[#F7D1D1] bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 p-4 rounded-md shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#D14E70] text-white text-2xl font-bold flex items-center justify-center">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[#8E2A4A] mb-2">{title}</h3>
      <p className="text-[#5A3D42]">{description}</p>
    </div>
  )
}
