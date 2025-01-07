import { Courgette } from 'next/font/google';
import Image from 'next/image';
import Motion from "./../Motion"
const courgette = Courgette({
  subsets: ['latin'],
  weight: ['400'],  // Optional, specify weights you need
});
import React from 'react'

export default function Body() {
  return (
  <div className='flex flex-col justify-center items-center'>
    <h1 className="text-[#2D4756] text-[40px] md:text-[80px]">Your daily dose of</h1>
    <div className='flex flex-col md:flex-row gap-5'>
    <p className={`text-[#FF621C]  text-center text-[40px] md:text-[60px] ${courgette.className}`}>Delicious</p>
      <div className='flex gap-3'>
        <div className='flex-col gap-1 justify-center items-center '>
        <Image className='rounded-full shake' src={"/pizza.jpeg"} width={80} height={50} alt="pizza"/>
        <p className='font-semibold min-h-[50px]'>piporany pizza</p>
        </div>
        <div className='flex-col justify-center gap-1 items-center '>
        <Image className='rounded-full  min-h-[80px] shake' src={"/cheese.jpg"} width={80} height={50} alt="pizza"/>
        <p className='font-semibold'>grilled cheese</p>
        </div>
        <div className='flex-col justify-center items-center gap-1'>
        <Image className='rounded-full min-h-[80px] shake' src={"/burger.jpg"} width={80} height={50} alt="pizza"/>
        <p className='font-semibold'>Burger bills</p>
        </div>
      </div>
    </div>
    <h2 className={`text-[30px] md:text-[40px] ${courgette.className}`}>Here is our special meals</h2>
    <Motion/>
  </div>
  )
}
