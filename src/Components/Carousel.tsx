"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Carousel2 = ({ items }: { items: { imageUrl: string; name: string; job: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <button onClick={prevSlide} className="left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg"><ChevronLeft/></button>
        <div className="w-[500px] h-[300px] relative">
          <Image
            src={items[currentIndex].imageUrl}
            alt={items[currentIndex].name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <button onClick={nextSlide} className="right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg"><ChevronRight/></button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white text-center py-2">
        <p>{items[currentIndex].name}</p>
        <p>{items[currentIndex].job}</p>
      </div>
    </div>
  );
};

export default Carousel2;
