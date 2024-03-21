import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { ProfilePicture } from '@/app/function/interface'
import Link from 'next/link'

export default function Profile({ image, userName }: ProfilePicture) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {image && (
          <div className="w-16 h-16">
            <Image src={image} height={40} width={40} alt="profile" className="w-full h-full object-cover rounded-full" />
          </div>
        )}
      </button>
      {isOpen && (
        <div className='absolute top-full right-0 mt-2 bg-thirdary shadow-md rounded-md text-[18px] font-medium w-[270px]'>
          <p className="p-4">Hi, {userName}</p>
          <hr className="border-hijau my-3" />
          <Link href={'/tentang-kami'} className="p-4 items-center align-middle">Tentang Kami</Link>
          <hr className="border-hijau my-3" />
          <Link href={'/FAQ'} className="p-4 items-center align-middle mb-4">FAQ</Link>
          <hr className="border-hijau my-3" />
          <button className="block w-full text-left p-4 hover:bg-light" onClick={() => signOut()}>Keluar</button>
        </div>
      )}
    </div>
  )
}
