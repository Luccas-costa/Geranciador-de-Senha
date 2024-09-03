"use client";
import { Archive, ArrowUp } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { getSenhasList } from "@/lib/data";

interface CardNSenhasCellProps {
  refresh: boolean;
}

export default function CardNSenhasCell({ refresh }: CardNSenhasCellProps) {
  const [numSenhas, setNumSenhas] = useState<number>(0);

  useEffect(() => {
    async function fetchSenhas() {
      try {
        const senhas = await getSenhasList();
        setNumSenhas(senhas.length);
      } catch (error) {
        console.log("Erro ao obter o número de senhas:", error);
      }
    }

    fetchSenhas();
  }, [refresh]);

  return (
    <div className='w-[calc(90vw-20px)] h-[350px] bg-zinc-200/60 border border-neutral-300/50 relative rounded-xl shadow-2xl transition-all duration-300 hover:bg-zinc-200 group'>
      <div
        className='size-[120px] bg-zinc-200/60 border border-neutrals-300/50 rounded-full shadow-2xl absolute -top-[19%] left-1/2 translate-x-[-50%] flex items-center justify-center group-hover:bg-zinc-200 transition-all duration-300'
        style={{ zIndex: 2 }}
      >
        <Archive size={90} color='#404040' weight='regular' />
      </div>
      <div className='text-3xl mt-20 text-[#404040] font-bold text-center'>
        Quantas senhas você tem?
      </div>
      <div className='flex items-center justify-center space-x-2 font-bold text-center mt-8 ml-6 text-8xl text-[#404040]'>
        {numSenhas}
        <ArrowUp size={90} color='#404040' weight='bold' />
      </div>
    </div>
  );
}
