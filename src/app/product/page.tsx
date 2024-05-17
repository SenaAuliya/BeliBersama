"use client"
import Footer from "@/Components/Footer";
import Headers from "@/Components/Headers";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import { Products } from "../function/interface";
import Search from "@/Components/Search";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Ubah sesuai dengan jumlah item yang ingin ditampilkan per halaman

  useEffect(() => {
    const fetchData = async () => {
      const query = buildQuery(currentPage);
      const fetchedData = await client.fetch(query);
      setData(fetchedData);
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
      <div className="flex flex-col gap-20">
        <div className="mt-[30px]">
          <Search onSearch={setSearchTerm} />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[60px] lg:p-[20px]">
          {data.map((product: Products) => (
            <div
              className="bg-thirdary shadow-sm rounded-md flex flex-col gap-3 items-center justify-center"
              key={product._id}
            >
              <Link key={product._id} href={`/product/${product.slug}`}>
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
                  <p>{product.title}</p>
                  <p className="font-medium">{product.price}</p>
                </div>
                <button className="bg-thirdary border-light border-2 p-3 rounded-full m-4">
                  Lihat Barang
                </button>
              </Link>
            </div>
          ))}
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
