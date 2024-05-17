"use client"
import Footer from '@/Components/Footer'
import Headers from '@/Components/Headers'
import AccordionItem from '@/Components/Accordion'
import Image from 'next/image'
import React, { useState } from 'react'

export default function page() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div>
<Headers/>
<div className='flex items-center justify-center w-full h-full'>
        <div className='flex flex-col justify-center items-center lg:w-[1262px] lg:h-[700px] bg-light lg:mb-[51px] w-full h-full'>
            <h1 className='lg:text-[48px] text-[26px] font-semibold text-secondary lg:absolute lg:top-52 lg:mt-0 mt-10'>Frequently Asked Quested</h1>

    <div className='flex lg:flex-row flex-col-reverse justify-between items-center lg:mt-20 mt-7'>
    <div className='lg:w-[692px] w- lg:text-[17px] block'>
            <AccordionItem openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} title={"Apa itu Beli Bersama"}>
              <p>Beli Bersama adalah website penjualan yang berbasis online yang berpusat di SMKN 1 Bangsri.</p>
            </AccordionItem>
            <AccordionItem openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} title={"Bagaimana Cara Memesan Menu di Beli Bersama?"}>
              <p>Untuk memesan, cari menu yang anda inginkan di Beranda atau di Pencarian, tambahkan ke keranjang belanja atau langsung Beli Sekarang, lalu lanjutkan ke proses checkout.</p>
            </AccordionItem>
            <AccordionItem openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} title={"Apakah aman berbelanja di Beli Bersama?"}>
              <p>Sudah pasti website kami dilengkapi keamanan.</p>
            </AccordionItem>
            <AccordionItem openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} title={"Apa saja fitur yang ada di Beli Bersama?"}>
              <p>Seperti website atau aplikasi E-Commerce lainya, kami menyediakan fitur Penjual dan Pembeli, Kategori, dll.</p>
            </AccordionItem>
            <AccordionItem openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} title={"Bagaimana kualitas menu di Beli Beersama?"}>
              <p>Kualitas menu kami patikan yang terbaru dengan begitu Menu tetap terjaga kulitasnya.</p>
            </AccordionItem>
            </div>

            <div className='lg:w-[402px] lg:h-[245px] w-[300px]'>
              <Image src={'/img/makanan.png'} height={400} width={400} className='w-full h-full object-cover' alt='makanan'/>
            </div>

    </div>
           
        </div>
    </div>
<Footer/>
    </div>
  )
}
