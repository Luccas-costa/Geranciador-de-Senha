import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";
import SearchSpotylight from "./SearchSpotylightPc";
import { searchSenhasByOrigem } from "@/lib/dataSearch";
import { Senha } from "@/types/BD";

interface SpotlightPcProps {
  onClose: () => void;
}

export default function SpotlightPc({ onClose }: SpotlightPcProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [searchResults, setSearchResults] = useState<Senha[]>([]);
  const [searchText, setSearchText] = useState<string>("");

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

  useEffect(() => {
    const fetchData = async () => {
      if (searchText) {
        const results = await searchSenhasByOrigem(searchText);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    };
    fetchData();
  }, [searchText]);

  const getPosition = (index: number, length: number) => {
    if (length === 1) return "sozinho";
    if (index === 0) return "primeiro";
    if (index === length - 1) return "ultimo";
    return "meio";
  };

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <div
        ref={spotlightRef}
        className='relative flex flex-col space-y-4 transition-all duration-100'
      >
        <input
          type='text'
          placeholder='Qual senha quer achar?'
          className='bg-zinc-200/80 w-[700px] p-6 rounded-full shadow-2xl text-neutral-900 placeholder:text-neutral-900'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          autoFocus
        />
        <div className='absolute top-[20px] right-4 transform -translate-y-1/2 cursor-pointer'>
          <MagnifyingGlass size={30} color='#404040' />
        </div>
        {/* Parte das respostas */}
        <div className='flex flex-col max-h-[449px] overflow-y-auto'>
          {searchResults.map((senha, index) => (
            <SearchSpotylight
              key={index}
              Posicao={getPosition(index, searchResults.length)}
              origem={senha.origem}
              email={senha.email}
              senha={senha.senha}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
