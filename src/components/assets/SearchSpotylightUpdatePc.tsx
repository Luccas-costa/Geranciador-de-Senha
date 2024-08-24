import { LockKey, LockKeyOpen } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

interface SearchSpotylightUpdatePcProps {
  Posicao: string;
  id?: number;
  origem: string;
  handlerTeste?: (id: number) => void;
  handlerEscolha: (origem: string) => void;
}

export default function SearchSpotylightUpdatePc({
  Posicao,
  origem,
  id,
  handlerTeste,
  handlerEscolha,
}: SearchSpotylightUpdatePcProps) {
  const handlerSla = () => {
    if (handlerTeste && id) {
      handlerTeste(id);
    }
    handlerEscolha(origem);
  };
  return (
    <div
      onClick={handlerSla}
      className={`bg-zinc-200/80 hover:bg-zinc-300/80 w-[700px] p-6 shadow-2xl text-neutral-900 
        ${Posicao === "sozinho" && "rounded-2xl"}
        ${
          Posicao === "primeiro" &&
          "rounded-t-2xl border-b border-neutral-700/50"
        }
        ${Posicao === "meio" && "rounded-none border-b border-neutral-700/50"}
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
