import Headers from "@/Components/Headers";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";
import { client } from "../../sanity/lib/client";
import { Products } from "./function/interface";
async function getData() {
  const query = `*[_type == 'Products'][0...4]| order(__createdAt desc) {
    _id,
      price,
      title,
      "slug": slug.current,
    "imageUrl": image[0].asset->url}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: Products[] = await getData();
  return (
    <div className="overflow-x-hidden">
      <Headers />
      <div className="px-[88px] flex flex-col items-center w-full justify-center">

        <div className="flex lg:flex-row justify-between lg:p-10 bg-light lg:w-full lg:rounded-md flex-col-reverse items-center w-screen">
          <div className="flex flex-col gap-5">
            <h4 className="lg:text-[38px] font-medium lg:w-[588px] text-secondary text-[28px] w-[382px]">
              Dapatkan barang berkualitas dengan belanja di sini
            </h4>
            <Link href={'/product'} className="bg-secondary lg:w-[213px] h-[68px] rounded-xl flex items-center justify-center text-white my-7 w-full text-[20px] text-thirdary">
              Beli Sekarang
            </Link>
          </div>
          <div className="lg:w-[450px] lg:h-[234px] w-[372px] h-[234px] p-5">
            <Image
              src={"/img/makanan.png"}
              width={150}
              height={150}
              className="w-full h-full object-cover"
              alt="makanan"
            />
          </div>
        </div>

        <div className="flex flex-col lg:justify-between lg:items-stretch items-center gap-5 text-secondary w-full px-8 my-10">

          <h6 className="lg:text-[24px] text-[20px] font-medium justify-start w-screen ml-10 lg:w-full text-start">
            Rekomendasi untuk anda
          </h6>
          <div className="flex justify-between gap-4">
            {data.map((product) => (
                <div className="bg-thirdary shadow-sm rounded-md flex flex-col gap-3" key={product._id}> 
                <Link
                  key={product._id}
                  href={`/product/${product.slug}`}
                  
                >
                  <div className="w-[163px] h-[141px] lg:w-[235px] lg:h-[203px] rounded-md">
                    <Image
                      className="w-full object-cover rounded-t-2xl"
                      src={product.imageUrl}
                      height={150}
                      width={150}
                      alt="makananan"
                    />
                  </div>
                  <div className="m-3 text-[20px]">
                  <p >{product.title}</p>
                  <p className="font-medium">{product.price}</p>
                  </div>
                </Link>
                <button className="bg-thirdary border-light border-2 p-3 rounded-full w-[141px] bottom-0 m-4">
                  Beli Sekarang
                </button>
              </div>
            ))}
          </div>
          <div className="lg:w-full h-full flex justify-center items-center">
            <Link href={'/product'} className="bg-thirdary border-light border-2 py-3 px-5 rounded-full lg:w-[236px] w-[200px]">
              Lihat Selengkapnya
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:justify-between lg:items-stretch items-center gap-5 text-secondary w-full my-10">
          <h6 className="lg:text-[24px] text-[20px] font-medium justify-start w-screen ml-10 lg:w-full text-start">Paling Populer</h6>
          <div className="flex justify-between gap-4">
            {data.map((product) => {
              return (
                <div className="bg-thirdary shadow-sm rounded-md flex flex-col gap-3" key={product._id}> 
                  <Link
                    key={product._id}
                    href={`/product/${product.slug}`}
                    
                  >
                    <div className="w-full">
                      <Image
                        className="w-full object-cover rounded-t-2xl"
                        src={product.imageUrl}
                        height={150}
                        width={150}
                        alt="makananan"
                      />
                    </div>
                    <div className="m-3 text-[20px]">
                    <p >{product.title}</p>
                    <p className="font-medium">{product.price}</p>
                    </div>
                  </Link>
                  <button className="bg-thirdary border-light border-2 p-3 rounded-full w-[141px] bottom-0 m-4">
                  Beli Sekarang
                </button>
                </div>
              );
            })}
          </div>
          <div className="lg:w-full h-full flex justify-center items-center">
            <Link href={'/product'} className="bg-thirdary border-light border-2 py-3 px-5 rounded-full lg:w-[236px] w-[200px]">
              Lihat Selengkapnya
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center text-secondary bg-light lg:w-full w-screen lg:rounded-lg py-[34px] pl-[72px] pr-[50px] mb-[114px] gap-5">
          <div className="flex flex-col justify-center items-center  gap-3 lg:w-[688px] lg:pr-[150px]">
            <div className="flex flex-col gap-2">
            <h1 className="lg:text-[56px] text-[33px] font-semibold">Kategori</h1>
            <p className="lg:text-[28px] text-[17px] font-medium lg:w-full w-[314px]">
              Pilih kategori yang sesuai seleramu dan pilih dengan seksama
            </p>
            </div>
            <div className="flex lg:justify-between items-center justify-center gap-5">
              <div className="lg:w-full w-[56px]">
                <Image
                  src={"/img/rectangle 4.png"}
                  height={150}
                  width={150}
                  alt="makanan"
                />
              </div>
              <div className="lg:w-full w-[56px]">
                <Image
                  src={"/img/rectangle 3.png"}
                  height={150}
                  width={150}
                  alt="makanan"
                />
              </div>
              <div className="lg:w-full w-[56px]">
                <Image
                  src={"/img/rectangle 5.png"}
                  height={150}
                  width={150}
                  alt="makanan"
                />
              </div>
              <div className="lg:w-full w-[56px]">
                <Image
                  src={"/img/rectangle 6.png"}
                  height={150}
                  width={150}
                  alt="makanan"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[26px]">
            <div className="flex flex-row justify-center items-center gap-[24px]">
              <button className="bg-thirdary lg:w-[267px] w-[156px] h-[60px] rounded-full lg:text-[24px] text-[14px] font-medium">
                Minuman
              </button>
              <button className="bg-thirdary lg:w-[267px] w-[156px] h-[60px] rounded-full lg:text-[24px] text-[14px] font-medium">
                Minuman Jus
              </button>
            </div>
            <div className="flex flex-row justify-center items-center gap-[24px]">
              <button className="bg-thirdary lg:w-[267px] w-[156px] h-[60px] rounded-full lg:text-[24px] text-[14px] font-medium">
                Kue
              </button>
              <button className="bg-thirdary lg:w-[267px] w-[156px] h-[60px] rounded-full lg:text-[24px] text-[14px] font-medium">
                Makanan Penutup
              </button>
            </div>
            <div className="flex flex-row justify-center items-center gap-[24px]">
              <button className="bg-thirdary lg:w-[267px] w-[156px] h-[60px] rounded-full lg:text-[24px] text-[14px] font-medium">
                Makanan
              </button>
              <button className="bg-thirdary lg:w-[267px] w-[156px] h-[60px] rounded-full lg:text-[24px] text-[14px] font-medium">
                Camilan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
