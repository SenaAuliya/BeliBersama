"use state"
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['Makanan', 'Minuman'];

  return (
    <div className="relative inline-block justify-center text-center items-center rounded-lg">
      <button className="flex items-center" onClick={() => setIsOpen((prev) => !prev)}>
        <span className="mb-2">Kategori</span> {!isOpen ? (
          <div className="ml-1">
            <ChevronDown />
          </div>
        ) : (
          <div className="ml-1">
            <ChevronUp />
          </div>
        )}
      </button>

      {isOpen && (
        <div className="flex flex-col gap-1 absolute top-10 justify-center items-center p-4 rounded-md bg-white text-base font-medium shadow-md border-t-2 border-secondary">
          {categories.map((category, idx) => (
            <Link href={`/${category}`} key={idx}>
              {category}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
