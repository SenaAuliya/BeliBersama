"use client"
import React, { useEffect, useState } from 'react';
import { client } from '../../../../sanity/lib/client';
import { DetailedProduct } from '@/app/function/interface';
import Footer from '@/Components/Footer';
import ImageComponent from '@/Components/ImageComponent';
import Headers from '@/Components/Headers';
import { Star } from 'lucide-react';
import Image from 'next/image';

async function GetData(slug: string) {
  const query = `*[_type == 'Products' && slug.current == "${slug}"][0]{
    _id,
    image,
    price,
    title,
    description,
    "slug":slug.current,
    "category":category->name,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default function ProductDetailedPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<DetailedProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const productData: DetailedProduct = await GetData(params.slug);
      setProduct(productData);
    };

    fetchData();
  }, [params.slug]);

  if (!product) {
    return   <div className="flex justify-center items-center mt-20">
    <div className="border-t-4 border-b-4 border-gray-400 rounded-full w-52 h-52 animate-spin"><Image src={'/img/Rectangle 3.png'} className='w-52' width={500} height={500} alt='123'  /></div>
  </div>
  }
console.log(product)
  return (
    <div>
      <Headers />
      <div className="bg-thirdary mb-28 mt-5">
        <div className="mx-auto max-w-screen-xl px-4 md:mx-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageComponent image={product.image} />
            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-secondary">{product.category}</span>
                <h2 className="text-2xl font-bold text-secondary  lg:text-3xl">{product.title}</h2>
              </div>
              <div className="mb-6 flex items-center gap-3 md:mb-10">
              <button className=" bg-hijau flex p-3 rounded-full gap-x-2 text-white">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5 " />
              </button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Rantings
              </span>
            </div>
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-secondary md:text-2xl">Rp {product.price}</span>
                  <span className="mb-0.5 text-red line-through">Rp {product.price + 3000}</span>
                </div>
                <span className="text-sm text-secondary">{product.description}</span>
              </div>
              <div className="mb-6 flex items-center gap-2 text-secondary"></div>
              <div className="flex gap-2.5">
                <button className='bg-hijau h-[60px] px-10 rounded-[12px] text-thirdary lg:text-lg text-[16px]'>Check Out Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
