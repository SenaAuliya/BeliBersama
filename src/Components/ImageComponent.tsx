"use client";

import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { useState } from "react";

interface ImageComponentProps {
  image: any[];
}

export default function ImageComponent({ image }: ImageComponentProps) {
  const [bigImage, setBigImage] = useState(image[0]);

  const handleSmallImgClick = (clickedImage: any) => {
    setBigImage(clickedImage);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {image.map((img: any, idx: number) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100 lg:w-full lg:h-auto w-[30%]">
            <Image
              src={urlForImage(img)}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImgClick(img)}
            />
          </div>
        ))}
      </div>
      <div className="lg:relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlForImage(bigImage)}
          alt="photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />

        <span className="absolute lg:left-0 top-[100px] lg:top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
