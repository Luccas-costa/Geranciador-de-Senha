import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";
import SearchSpotylight from "./SearchSpotylightPc";
import { searchSenhasByOrigem } from "@/lib/dataSearch";
import { Senha } from "@/types/BD";
import SearchSpotylightUpdate from "./SearchSpotylightUpdatePc";
import { updateSenhaBD } from "@/utils/updateBD";
import SearchSpotylightUpdate2 from "./SearchSpotylightUpdateCell";
import SpotylightUpdateFinal2 from "./SpotylightUpdateFinalCell";
import SearchSpotylightUpdateCell from "./SearchSpotylightUpdateCell";
import SpotylightUpdateFinalCell from "./SpotylightUpdateFinalCell";

interface SpotlightUpdateCellProps {
  onClose: () => void;
  handlerRefresh: (estado: boolean) => void;
}

export default function SpotlightUpdateCell({
  onClose,
  handlerRefresh,
}: SpotlightUpdateCellProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [searchResults, setSearchResults] = useState<Senha[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [chosenSenha, setChosenSenha] = useState<Senha | null>(null);
  const [teste, setTeste] = useState<boolean>(true);
  const [IsLoading, setIsLoading] = useState(false);

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

  const handlerEscolha = (senha: Senha) => {
    setChosenSenha(senha);
    setTeste(false);
  };

  const handlerUpdateBD = async (data: {
    id: number;
    origem: string;
    email: string;
    senha: string;
  }) => {
    setIsLoading(true);
    await updateSenhaBD(data);
    setIsLoading(false);
    setChosenSenha(null);
    setTeste(true);
    handlerRefresh(true);
    onClose();
  };

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <div
        ref={spotlightRef}
        className='relative flex flex-col space-y-4 transition-all duration-100'
      >
        {teste && (
          <>
            <input
              type='text'
              placeholder='Qual senha você deseja atualizar?'
              className='bg-zinc-200/80 w-[80vw] p-6 rounded-full shadow-2xl text-neutral-900 placeholder:text-neutral-900'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />
            <div className='absolute top-[20px] right-4 transform -translate-y-1/2 cursor-pointer'>
              <MagnifyingGlass size={30} color='white' />
            </div>
          </>
        )}
        <div className='flex flex-col max-h-[321px] overflow-y-auto'>
          {chosenSenha ? (
            <SpotylightUpdateFinalCell
              handlerUpdateBD={handlerUpdateBD}
              id={chosenSenha.id}
              origem={chosenSenha.origem}
              email={chosenSenha.email}
              senha={chosenSenha.senha}
              IsLoading={IsLoading}
            />
          ) : (
            <>
              {searchResults.map((senha, index) => (
                <SearchSpotylightUpdateCell
                  key={index}
                  Posicao={getPosition(index, searchResults.length)}
                  origem={senha.origem}
                  handlerEscolha={() => handlerEscolha(senha)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
