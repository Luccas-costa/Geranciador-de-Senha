import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";
import SearchSpotylight from "./SearchSpotylight";
import { searchSenhasByOrigem } from "@/lib/dataSearch";
import { Senha } from "@/types/BD";
import SearchSpotylightUpdate from "./SearchSpotylightUpdate";
import SpotylightUpdateFinal from "./SpotylightUpdateFinal";
import { updateSenhaBD } from "@/utils/updateBD";
import ConfirmacaoSpotylightTrash from "./ConfirmacaoSpotylightTrash";
import { deleteSenhaBD } from "@/utils/deleteBD";

interface SpotylightTrashProps {
  onClose: () => void;
  handlerRefresh: (estado: boolean) => void;
}

export default function SpotylightTrash({
  onClose,
  handlerRefresh,
}: SpotylightTrashProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [searchResults, setSearchResults] = useState<Senha[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [chosenSenha, setChosenSenha] = useState<Senha | null>(null);
  const [teste, setTeste] = useState<boolean>(true);
  const [IsLoading, setIsLoading] = useState(false);
  const [Teste2, setTeste2] = useState<number>();

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

  const handlerDeleteBD = async (id: number) => {
    setIsLoading(true);
    await deleteSenhaBD(id);
    setIsLoading(false);
    setChosenSenha(null);
    setTeste(true);
    handlerRefresh(true);
    onClose();
  };

  const handlerTeste = (id: number) => {
    setTeste2(id);
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
              placeholder='Qual senha você deseja Apagar?'
              className='bg-neutral-800/80 w-[700px] p-6 rounded-full shadow-2xl text-zinc-300'
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
            <ConfirmacaoSpotylightTrash onClose={onClose} handlerDeleteBD={handlerDeleteBD} id={Teste2}  isLoading={IsLoading}/>      
          ) : (
            <>
              {searchResults.map((senha, index) => (
                <SearchSpotylightUpdate
                  key={index}
                  Posicao={getPosition(index, searchResults.length)}
                  origem={senha.origem}
                  id={senha.id}
                  handlerTeste={handlerTeste}
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
