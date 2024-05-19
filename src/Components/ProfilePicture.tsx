import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { ProfilePicture } from '@/app/function/interface'
import Link from 'next/link'

export default function Profile({ image, userName, email }: ProfilePicture) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {image && (
          <div className="w-16 h-16">
            <Image src={image || "/img/profile.png"} height={40} width={40} alt="profile" className="w-full h-full object-cover rounded-full" />
          </div>
        )}
      </button>
      {isOpen && (
        <div className='absolute top-full flex flex-col justify-between items-center right-0 mt-2 bg-thirdary shadow-md rounded-md text-[18px] font-medium w-[290px] h-[200px] p-5'>
                    <div className='flex flex-col items-center'>
                    <p className="font-medium text-[20px]">{userName}</p>
                    <p className="font-medium text-[16px]">{email}</p>
                    </div>
          <button className="block p-4 w-[134px] hover:bg-hijau bg-secondary rounded-md text-center text-thirdary font-semibold hover:" onClick={() => signOut()}>Keluar</button>
        </div>
      )}
    </div>
  )
}
