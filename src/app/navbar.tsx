import React from 'react'

import StarknetKit from '@/components/walletconnect'
import Image from 'next/image'
const Navbar = () => {
  return (
    
    <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
    <div ><Image src="/logo.svg" alt="StarkDate Logo" width={50} height={40} />
    </div>
  <div className='bg-gradient-to-r from-purple-600 via-pink-500 to-pink-500 rounded-md hover:from-pink-500 hover:via-pink-300 hover:to-pink-300'>
    <StarknetKit />
  </div>
</div>

  )
}

export default Navbar