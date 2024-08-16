import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";
import SearchSpotylight from "./SearchSpotylight";
import { searchSenhasByOrigem } from "@/lib/dataSearch";
import { Senha } from "@/types/BD";

interface ConfirmacaoSpotylightTrashProps {
  onClose: () => void;
  handlerDeleteBD: (id: number) => void;
  id: number;
  isLoading: boolean;
}

export default function ConfirmacaoSpotylightTrash({ onClose, handlerDeleteBD, id , isLoading}: ConfirmacaoSpotylightTrashProps) {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <div
        className='relative flex flex-col space-y-4 transition-all duration-100'
      >
        <div className="text-2xl text-zinc-300 font-semibold">{isLoading ? "Apagando..." : "Certeza que deseja apagar essa senha?"}</div> <div className="text-2xl text-zinc-300 font-semibold">Tem certeza que deseja apagar essa senha?</div>
        <div className="flex space-x-4">
            <button className='bg-neutral-800/80 w-[440px] p-6 rounded-full shadow-2xl text-zinc-300' onClick={() => handlerDeleteBD(id)}>Apagar</button>
            <button className='bg-neutral-800/80 w-[440px] p-6 rounded-full shadow-2xl text-zinc-300' onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
