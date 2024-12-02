import React from 'react'

import StarknetKit from '@/components/walletconnect'
import Image from 'next/image'
import { redirect } from 'next/navigation'
const Navbar = () => {
  return (
    
    <div className="flex items-center justify-between px-4 py-8 bg-gradient-to-r from-[#c95977] via-[#8E2A4A] to-[#c75a5a] h-16">
  <div className='flex space-x-1 justify-center align-middle cursor-pointer' onClick={()=>redirect("/home")}>
  <h2 className='text-2xl mt-1 font-extrabold text-[#ffffff] ml-4'>STARK</h2>
  <Image className='mt-1 ' src={"/logo1.png"} alt={"LOGO"} width={40} height={40}/>

<h2 className='text-2xl mt-1 font-extrabold text-[#ffffff] ml-4'>DATE</h2>
  </div>
  <div className='bg-gradient-to-r from-[#8E2A4A] via-[#D14E70] to-[#f57474] rounded-md text-white'>
    <StarknetKit val="Connect wallet"/>
  </div>
</div>


  )
}

export default Navbar