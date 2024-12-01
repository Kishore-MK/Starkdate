import React from 'react'

import StarknetKit from '@/components/walletconnect'
import Image from 'next/image'
const Navbar = () => {
  return (
    
    <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#D14E70] via-[#8E2A4A] to-[#F7D1D1]">
  <div>
    <Image src="/logo.svg" alt="StarkDate Logo" width={50} height={40} />
  </div>
  <div className='bg-gradient-to-r from-[#8E2A4A] via-[#D14E70] to-[#f57474] rounded-md text-white'>
    <StarknetKit />
  </div>
</div>


  )
}

export default Navbar