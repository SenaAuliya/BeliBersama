import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['Makanan', 'Minuman']
  return (
    <div className="relative flex flex-col items-center rounded-lg">
      <button className="flex items-center " onClick={() => setIsOpen((prev) => !prev)}>
        <span className="m-2">Kategori</span> {!isOpen ? (
            <div>
                <ChevronDown/>
            </div>
        ):(
            <div>
                <ChevronUp/>
            </div>
        )}
      </button>

      {isOpen && (
        <div className="flex flex-col gap-1 absolute top-10 justify-center items-center p-4 rounded-[4px] bg-white text-[18px] font-medium" >
            {categories.map((categori, idx) => (
                <Link href={`/${categori}`}>{categori}</Link>
            ))}
        </div>
      )}
    </div>
  );
}
