"use client"
import Footer from "@/Components/Footer";
import Headers from "@/Components/Headers";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import { Products } from "../function/interface";
import Search from "@/Components/Search";
import SkeletonLoader from "@/Components/SkeletonLoader"; // Import the skeleton loader

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      const query = buildQuery(currentPage);
      const fetchedData = await client.fetch(query);
      setData(fetchedData);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, [searchTerm, currentPage]);

  const buildQuery = (page: any) => {
    let query;
    const start = (page - 1) * itemsPerPage;
    if (searchTerm) {
      query = `*[_type == 'Products' && title match "${searchTerm}*"][${start}...${
        start + itemsPerPage
      }] | order(__createdAt desc) {
          _id,
          price,
          title,
          "slug": slug.current,
          "imageUrl": image[0].asset->url
        }`;
    } else {
      query = `*[_type == 'Products'][${start}...${start + itemsPerPage}] | order(__createdAt desc) {
          _id,
          price,
          title,
          "slug": slug.current,
          "imageUrl": image[0].asset->url
        }`;
    }
    return query;
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <Headers />
      <div className="flex flex-col">
        <div className="mt-[30px]">
          <Search onSearch={setSearchTerm} />
        </div>
        <div className="flex flex-col lg:justify-between lg:items-stretch items-center gap-5 text-secondary w-full px-8 my-10">
          <div className="lg:flex lg:flex-row grid grid-cols-2 lg:justify-between gap-[20px] p-0">
            {loading ? (
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            ) : (
              data.map((product: Products) => (
                <div className="bg-thirdary shadow-sm rounded-md flex flex-col justify-between gap-3" key={product._id}> 
                <Link
                  key={product._id}
                  href={`/product/${product.slug}`}
                  className="flex flex-col justify-between items-stretch"
                >
                  <div className="w-[140px] h-[141px] lg:w-[235px] lg:h-[203px] rounded-md">
                    <Image
                      className="w-full object-cover rounded-t-2xl"
                      src={product.imageUrl}
                      height={150}
                      width={150}
                      alt="makananan"
                    />
                  </div>
                  <div className="p-3 text-[20px]">
                  <p >{product.title}</p>
                  </div>
                </Link>
                  <div className="pb-2">
                  <p className="font-medium pb-2">{product.price}</p>
                <p className="text-[13px] lg:text-base">Lihat Selengkapnya</p>
                  </div>
                {/* <button className="bg-thirdary border-light border-2 p-3 rounded-full w-[130px] text-[12px] m-4">
                  Beli Sekarang
                </button> */}
              </div>
              ))
            )}
          </div>
          <div className="lg:w-full h-full flex justify-center items-center"></div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={data.length < itemsPerPage}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
