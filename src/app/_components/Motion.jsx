import Image from 'next/image'
import React from 'react'

function Motion() {
  return (
<div className=' flex-1 flex flex-col justify-center items-center md:flex-row md:gap-4 w-full rounded-lg max-w-[60rem] bg-[url("/table.jpg")] bg-cover bg-center'>
<Image className='rounded-full animate-slowspin ' src={"/dish.png"} width={280} height={80} alt='home'/>
<Image className='rounded-full  animate-slowspin' src={"/dish3.png"} width={280} height={80} alt='home'/>
<Image className='rounded-full  animate-slowspin' src={"/pexels-willpicturethis-2641886-removebg-preview.png"} width={280} height={80} alt='home'/>
  </div>
  )
}

export default Motion
