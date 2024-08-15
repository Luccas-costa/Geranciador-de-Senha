import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";

interface SpotlightProps {
  onClose: () => void;
}

export default function Spotlight({ onClose }: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Função para fechar o spotlight ao clicar fora
  const handleClickOutside = (event: MouseEvent) => {
    if (
      spotlightRef.current &&
      !spotlightRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <div ref={spotlightRef} className="relative">
        <input
          type='text'
          placeholder='Qual senha quer achar?'
          className='bg-neutral-800/80 w-[700px] p-6 rounded-full shadow-2xl text-zinc-300'
        />
        <div className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'>
          <MagnifyingGlass size={30} color='white' />
        </div>
      </div>
    </div>
  );
}
