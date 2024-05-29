import Footer from "@/Components/Footer";
import Headers from "@/Components/Headers";
import Carousel from "@/Components/Carousel";
import Carousel2 from "@/Components/Carousel";
import React from "react";
import Image from "next/image";

const items = [
  { imageUrl: "/img/akhdan.jpeg", name: "Sena Auliya", job:"Programmer" },
  { imageUrl: "/img/dimas.png", name: "Dimas Aditya" , job:"Designer"},
];

export default function page() {
  return (
    <div>
      <Headers />
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-light text-secondary lg:w-[1262px] w-full lg:h-[879px] rounded-b-[12px] lg:mb-[43px] flex flex-col justify-center items-center ">
          <h1 className="lg:text-[48px] text-[28px] font-semibold lg:mt-[54px] mt-[50px] lg:absolute lg:top-52">
            Tentang Kami
          </h1>

          <div className="flex lg:flex-row flex-col justify-between items-center gap-7 font-light lg:text-[24px] text-[19px] mt- p-[35px]">
            <div className="lg:w-[616px] flex flex-col gap-4">
              <p>
                Website Beli Bersama adalah website yang berisi tentang
                Penjualan/media promosi yang menjualkan produk yang dibuat oleh
                anak PKK di SMKN 1 Bangsri.
              </p>
              <p>
                Kami menyediakan banyak fitur, antara lain, Beranda, Terbaru,
                Kategori, FAQ, dll.
              </p>
            </div>

            {/* <Carousel items={items} /> */}
            <Carousel items={items}/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
