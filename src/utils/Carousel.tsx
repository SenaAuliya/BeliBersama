"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Carousel = ({ items }: { items: { imageUrl: string; name: string; job: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative flex justify-center items-center lg:my-0 my-5">
      <button onClick={prevSlide} className=" left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg"><ChevronLeft /></button>
      <div className='bg-thirdary flex flex-col lg:w-[270px] justify-center items-center rounded-b-[12px] lg:pb-2 transition-all'>
        <div className='lg:w-[270px] transition-transform'>
          <Image height={1000} width={1000} src={currentItem.imageUrl} alt="Slide" className="rounded-t-lg w-full h-full object-cover" />
        </div>
        <p className="text-center my-2 lg:text-[24px] transition-opacity">{currentItem.name}</p>
        <p className='text-center font-semibold lg:text-[24px] mb-2 transition-opacity'>{currentItem.job}</p>
      </div>
      <button onClick={nextSlide} className=" right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg"><ChevronRight /></button>
    </div>
  );
};

export default Carousel;
