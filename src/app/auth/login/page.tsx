"use client"
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {ShieldAlert} from "lucide-react"

export default function Page({ searchParams }: any) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const callbackURL = searchParams.callbackUrl || "/";

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: callbackURL
      });
      if (!res?.error) {
        e.target.reset();
        setIsLoading(false);
        push(callbackURL);
      } else {
        setIsLoading(false);
        if (res.status === 401) {
          setError('Password Tidak Benar');
        } else {
          setError('Login gagal. Silakan coba lagi.');
        } 
      }
    } catch (err) {
      console.log(err);
      setError('Terjadi kesalahan. Silakan coba lagi.');
      setIsLoading(false);
    }
  };

  return (
    <div className='lg:flex lg:flex-row justify-center items-center h-screen flex flex-col bg-light p-5'>
      <div className='lg:bg-thirdary lg:w-[826px] h-full flex flex-col items-center justify-center bg-light'>
        <div className='lg:w-[315px] lg:h-[213px] w-[203px] h-[124px]'>
          <Image className='w-full h-full' src={'/img/LogoMakanan.png'} height={150} width={150} alt='Makanan' />
        </div>
        <div className='lg:w-[350px] lg:h-[180px]'>
          <Image className='lg:w-full lg:h-full' src={'/img/Logo.png'} height={150} width={150} alt='Logo' />
        </div>
      </div>
      
      <div className='lg:h-full flex flex-col lg:items-center lg:justify-center lg:w-full bg-light text-secondary gap-6'>
        <div>
          <p className='lg:text-[20px] text-[15px] font-medium'>Selamat Datang</p>
          <h6 className='lg:text-[32px] text-[24px] font-semibold'>Login ke Akunmu</h6>
        </div>


        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col lg:items-center gap-6 sm:bg-light">
          <div className="flex flex-col">
            <label htmlFor="email" className="lg:text-[18px] text-[13px]">Email</label>
            <input type="email" id="email" name="email" required className="lg:w-[514px] lg:h-[60px] h-[44px] border border-primary rounded-[12px] px-3" placeholder='Masukkan Email' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="lg:text-[18px] text-[13px]">Password</label>
            <input type="password" id="password" name="password" required className="lg:w-[514px] w-[334px] lg:h-[60px] h-[44px] border border-primary rounded-[12px] px-3" placeholder='Masukkan Password' />
        {error && (
          <div className="flex items-center text-[18px] mt-2 gap-2 text-[red]" role="alert">
            <ShieldAlert size={"20px"} color='red'/><span className="block sm:inline">{error}</span><ShieldAlert size={"20px"} color='red'/>
          </div>
        )}
          </div>

          <button disabled={isLoading} type="submit" className="lg:w-[514px] w-[334px] lg:h-[60px] h-[44px] bg-primary rounded-[12px] text-thirdary text-[20px] font-semibold">
            {isLoading ? 'Loading ...' : 'Sign In'}
          </button>
        </form>

        <button type='button' onClick={() => signIn('google', { callbackUrl: "", redirect: false })} className="bg-thirdary lg:w-[514px] w-[334px] h-[45px] lg:h-[60px] flex lg:align-middle justify-center items-center lg:text-[18px] lg:rounded-[12px] rounded-[8px] border-primary border-[1px] text-[13px]">
          <Image src={'/img/logoGoogle.png'} height={30} width={30} alt='LogoGoogle' />Lanjutkan dengan Google
        </button>

        <div className='flex justify-center items-center'>
          <h6 className='lg:text-[18px] text-[13px]'>Belum mempunyai akun? <Link href={'/auth/register'} className='underline'>Daftar</Link></h6>
        </div>
      </div>
    </div>
  )
}
