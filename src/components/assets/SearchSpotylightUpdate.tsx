import { LockKey, LockKeyOpen } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

interface SearchSpotylightUpdateProps {
  Posicao: string;
  id: number;
  origem: string;
  handlerTeste: (id: number) => void;
  handlerEscolha: (origem: string) => void;
}

export default function SearchSpotylightUpdate({
  Posicao,
  origem,
  id,
  handlerTeste,
  handlerEscolha,
}: SearchSpotylightUpdateProps) {
  const handlerSla = () => {
    handlerTeste(id);
    handlerEscolha(origem);
  }
  return (
    <div
      onClick={handlerSla}
      className={`bg-neutral-800/80 hover:bg-neutral-900/80 w-[700px] p-6 shadow-2xl text-zinc-300 
        ${Posicao === "sozinho" && "rounded-2xl"}
        ${Posicao === "primeiro" && "rounded-t-2xl border-b border-zinc-300/50"}
        ${Posicao === "meio" && "rounded-none border-b border-zinc-300/50"}
        ${Posicao === "ultimo" && "rounded-b-2xl"}
        `}
    >
      <div className='px-2 flex items-center justify-center'>
        <div>
          <div className='text-2xl'>{origem}</div>
        </div>
      </div>
    </div>
  );
}
