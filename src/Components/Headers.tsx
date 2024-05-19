"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import Profile from "./ProfilePicture";
import { Menu, Search, X } from "lucide-react";

export default function Headers() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const categories = ['Makanan', 'Minuman']
  return (
    <header className="lg:border-secondary lg:border-t-[20px] p-5 min-h-[80px] shadow-sm text-secondary sticky top-0 z-50   bg-thirdary">
      <nav className="flex justify-between text-primary">
        <div className="flex flex-row justify-start gap-5 items-center">
          <div className="lg:w-16 lg:h-16 w-[40px] h-[40px] ">
            <Link href={'/'}><Image
              src={"/img/LogoNew.png"}
              height={150}
              width={150}
              alt="Logo"
              className="w-full h-full"
            /></Link>
          </div>
          <h1 className="lg:text-xl text-[15px] font-semibold">Beli Bersama</h1>
        </div>

        <ul className="lg:flex lg:flex-row lg:gap-7 lg:text-xl items-center justify-center hidden">
          <li>
            <Link href={"/"}>Beranda</Link>
          </li>
          <li>
            <Link href={'/FAQ'}>FAQ</Link>
          </li>
          <li>
            <Link href={'/about'}>Tentang</Link>
          </li>
        </ul>

        <div className="gap-5 items-center hidden lg:flex">
          <Link href={'/product'}> <Search/> </Link>
          <div className="flex items-center">
            {status === "authenticated" ? (
              <Profile image={session?.user?.image || "/img/profile.png"} userName={session?.user?.fullname} email={session?.user?.email}/>
            ) : (
              <div>
                <button onClick={() => signIn()}>Sign In</button>
              </div>
            )}
          </div>
        </div>

          <div className="lg:hidden flex flex-row-reverse items-center gap-3">
          <button className="" onClick={() => setIsOpen((prev) => !prev)}>
              {!isOpen ? (<><Menu/></>):(<><X/></>)}
          </button>
          <Link href={'/product'}> <Search className="lg:w-16 lg:h-16"/> </Link>
          </div>
          {isOpen && (
  <div ref={ref} className={`h-screen bg-white text-primary flex flex-col items-center fixed w-[70%] transition-all right-0 top-0 bg-thirdary`}>

    <div className="flex flex-col items-center mt-10 gap-2">
     {status === 'authenticated' ? (
       <div className="w-full flex flex-col gap-5 justify-center items-center">
        <div className="w-[46px] h-[46px]">
       <Image src={session?.user?.image || "/img/profile.png"} height={150} width={150} alt="profile" className="w-full h-full rounded-full"/>
     </div>
       <p className="font-medium text-[16px] min-w-full">Hi {session?.user?.fullname}</p>
       </div>
     ): (
      <div className="w-[46px] h-[46px]">
      <Image src="/img/profile.png" height={150} width={150} alt="profile" className="w-full h-full rounded-full"/>
    </div>
     )}
    </div>

    <div className="mt-6 items-start flex flex-col justify-center">
      <Link href={'/'} className="mb-[15px] text-[20px]">Beranda</Link>
      <hr className="border-primary border opacity-[20%] w-[147px]"/>
    </div>
    <div className="mt-6 items-start flex flex-col justify-center">
      <Link href={'/'} className="mb-[15px] text-[20px]">Kategori</Link>
      <hr className="border-primary border opacity-[20%] w-[147px]"/>
    </div>
    <div className="mt-6 items-start flex flex-col justify-center">
      <Link href={'/FAQ'} className="mb-[15px] text-[20px]">FAQ</Link>
      <hr className="border-primary border opacity-[20%] w-[147px]"/>
    </div>
    <div className="mt-6 items-start flex flex-col justify-center">
      <Link href={'/about'} className="mb-[15px] text-[20px]">Tentang Kami</Link>
      <hr className="border-primary border opacity-[20%] w-[147px]"/>
    </div>

    <div className="flex justify-center">
            {status === 'authenticated' ? (
                  <button className="w-[227px] h-[46px] bg-secondary justify-center flex items-center p-4 text-[white] bottom-0 absolute rounded-[7px] my-5" onClick={() => signOut()}>Keluar</button>
            ):(
              <button className="w-[227px] h-[46px] bg-secondary justify-center flex items-center p-4 text-[white] bottom-0 absolute rounded-[7px] my-5" onClick={() => signIn()}>LogIn</button>
            )}
    </div>

  </div>
)}

      </nav>
    </header>
  );
}
