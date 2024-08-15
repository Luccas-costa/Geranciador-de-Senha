import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";

interface SpotlightAddProps {
  onClose: () => void;
}

export default function SpotlightAdd({ onClose }: SpotlightAddProps) {
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
      <div ref={spotlightRef}>
        <form action="" className="flex flex-col space-y-3 items-center justify-center"> 
          <div className='text-2xl font-semibold text-white'>Preencha os dados para adicionar uma nova senha</div>
          <input
            type='text'
            placeholder='Nome da origem'
            className='bg-neutral-800/80 w-[700px] p-6 rounded-xl shadow-2xl text-zinc-300'
          />
          <input
            type='text'
            placeholder='example@gmail.com'
            className='bg-neutral-800/80 w-[700px] p-6 rounded-xl shadow-2xl text-zinc-300'
          />
          <input
            type='text'
            placeholder='Senha'
            className='bg-neutral-800/80 w-[700px] p-6 rounded-xl shadow-2xl text-zinc-300'
          />
          <button type="submit" className="bg-neutral-800/80 w-[700px] p-6 rounded-xl shadow-2xl text-zinc-300">Adicionar Senha</button>
        </form>
      </div>
    </div>
  );
}
