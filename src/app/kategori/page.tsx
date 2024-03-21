import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className="flex justify-center h-full  items-center mt-20">
    <div className="border-t-4 border-b-4 border-gray-400 rounded-full w-52 h-52 animate-spin"><Image src={'/img/Rectangle 3.png'} className='w-52' width={500} height={500} alt='123'  /><Image src={'/img/Rectangle 3.png'} className='w-52' width={500} height={500} alt='123'  /><Image src={'/img/Rectangle 3.png'} className='w-52' width={500} height={500} alt='123'  /><Image src={'/img/Rectangle 3.png'} className='w-52' width={500} height={500} alt='123'  /><Image src={'/img/Rectangle 3.png'} className='w-52' width={500} height={500} alt='123'  /></div>
  </div>
  )
}
