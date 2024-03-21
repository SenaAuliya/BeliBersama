import Footer from '@/Components/Footer'
import Headers from '@/Components/Headers'
import AccordionItem from '@/utils/DropdownFAQ'
import React from 'react'

export default function page() {
  return (
    <div>
<Headers/>
<div className='flex items-center justify-center w-full h-full'>
        <div className='flex flex-col justify-center items-center lg:w-[1262px] lg:h-[879px] bg-light lg:mb-[51px]'>
            <h1 className='lg:text-[48px] font-semibold text-secondary'>Frequently Asked Quested</h1>

            <div>
            <AccordionItem title={"Apa itu Beli Bersama"} FAQ={"Beli Bersama adalah website penjualan yang berbasis online yang berpusat di SMKN 1 Bangsri."}/>
            </div>

        </div>
    </div>
<Footer/>
    </div>
  )
}
