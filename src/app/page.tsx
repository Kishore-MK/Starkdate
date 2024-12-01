

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


export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  

  return (
    <div className="min-h-screen">
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
          onClick={() => setIsSignupOpen(true)}
          className="btn-primary text-lg bg-white text-[#8E2A4A] py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
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
        <Button
          onClick={() => setIsSignupOpen(true)}
          className="btn-primary text-lg bg-[#8E2A4A] text-white py-3 px-6 rounded-full shadow-xl hover:bg-opacity-90 transition-all duration-300"
        >
          Join StarkDate Now
        </Button>
      </section>

      <footer className="bg-[#8E2A4A] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">StarkDate</h3>
              <p>Where Connections Spark Securely</p>
            </div>
            
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#D14E70]">About Us</a></li>
                <li><a href="#" className="hover:text-[#D14E70]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D14E70]">Terms of Service</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#D14E70]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#D14E70]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 0c-2.462 0-3.71.014-5.01.065-1.303.048-2.38.219-3.178.48a6.86 6.86 0 00-2.573 1.692A6.86 6.86 0 001.48 6.97c-.261.798-.432 1.875-.48 3.178-.051 1.3-.065 2.548-.065 5.01s.014 3.71.065 5.01c.048 1.303.219 2.38.48 3.178a6.86 6.86 0 001.692 2.573A6.86 6.86 0 004.97 22.52c.798.261 1.875.432 3.178.48 1.3.051 2.548.065 5.01.065s3.71-.014 5.01-.065c1.303-.048 2.38-.219 3.178-.48a6.86 6.86 0 002.573-1.692A6.86 6.86 0 0022.52 17.03c.261-.798.432-1.875.48-3.178.051-1.3.065-2.548.065-5.01s-.014-3.71-.065-5.01c-.048-1.303-.219-2.38-.48-3.178a6.86 6.86 0 00-1.692-2.573A6.86 6.86 0 0017.03 1.48c-.798-.261-1.875-.432-3.178-.48C15.71.014 14.462 0 12 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

</main>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card bg-[#F7D1D1] bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 rounded-lg p-6 shadow-lg">
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
