import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";
import SearchSpotylight from "./SearchSpotylight";
import { searchSenhasByOrigem } from "@/lib/dataSearch";
import { Senha } from "@/types/BD";

interface ConfirmacaoSpotylightTrashProps {
  id: number | undefined;
  isLoading: boolean;
  onClose: () => void;
  handlerDeleteBD: (id: number) => void;
}

export default function ConfirmacaoSpotylightTrash({
  onClose,
  handlerDeleteBD,
  id,
  isLoading,
}: ConfirmacaoSpotylightTrashProps) {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <div className='relative flex flex-col space-y-4 transition-all duration-100'>
        <div className='text-3xl text-zinc-300 font-semibold text-center'>
          {isLoading
            ? "Apagando..."
            : "Tem certeza que deseja apagar essa senha?"}
        </div>
        <div className='flex space-x-4'>
          <button
            className='bg-red-900/70 hover:bg-red-900/90 w-[340px] p-6 rounded-2xl shadow-2xl text-zinc-300'
            onClick={() => id !== undefined && handlerDeleteBD(id)}
          >
            Apagar
          </button>
          <button
            className='bg-green-900/70 hover:bg-green-900/90 w-[340px] p-6 rounded-2xl shadow-2xl text-zinc-300'
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
