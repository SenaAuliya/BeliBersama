"use client"
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, FAQ }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-black rounded w-full">
      <div className="flex justify-between items-center p-4 cursor-pointer w-[692px]" onClick={() => setIsOpen((prev) => !prev)}>
        <h2 className="text-lg font-semibold w-full">{title}</h2>
        <span>{!isOpen ? (
            <div><ChevronRight/></div>
        )  : (
            <div><ChevronDown/></div>
        ) }</span>
      </div>
      
      {isOpen && (
        <div className="p-4">
          <p>{FAQ}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
