import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <Link href="/" className='p-5 flex items-center gap-2'>
      <div className='size-6 bg-red-500 flex justify-center items-center text-white rounded-full'>
            C
      </div>
      <div>Cooking</div>
    </Link>
  )
}
