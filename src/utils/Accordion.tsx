"use client"
import React, {  useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, openAccordion, setOpenAccordion }: { title: string; children: React.ReactNode; openAccordion: string | null; setOpenAccordion: (id: string | null) => void; }) => {
  const isOpen = openAccordion === title;

  return (
    <div className="border-b-secondary border-1 rounded w-full relative inline-block">
      <div className="flex justify-between items-center p-4 cursor-pointer lg:w-[692px]  mr-5" onClick={() => setOpenAccordion(isOpen ? null : title)}>
        <h2 className="lg:text-xl text-lg font-semibold w-full">{title}</h2>
        <span>{!isOpen ? (
            <div><ChevronRight/></div>
        )  : (
            <div><ChevronDown/></div>
        ) }</span>
      </div>
      
      {isOpen && (
        <div className="block p-4 border-b border-secondary mx-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
