import React, { useState } from "react";
import Image from "next/image";
import Imagem from "../../public/fotoperfil.jpg";
import {
  ArrowsClockwise,
  Gear,
  House,
  MagnifyingGlass,
  PlusCircle,
} from "@phosphor-icons/react";
import Spotylight from "./assets/Spotylight";
import SpotylightAdd from "./assets/SpotylightAdd";
import SpotylightUpdate from "./assets/SpotylightUpdate";
import { insertSenhaBD } from "@/utils/insertBD";

interface NavBarProps {
  handlerRefresh: (estado: boolean) => void;
}

export default function NavBar({ handlerRefresh }: NavBarProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>();
  const [Spotlight, setSpotlight] = useState(false);
  const [SpotlightAdd, setSpotlightAdd] = useState(false);
  const [SpotylightUpdate2, setSpotylightUpdate2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlerSoptlightAdd = () => {
    setSpotlightAdd(!SpotlightAdd);
  };

  const handlerSoptlightUpdate = () => {
    setSpotylightUpdate2(false);
  };
  const handlerSoptlight = () => {
    setSpotlight(!Spotlight);
  };

  const idAleatorio = () => {
    const id = Math.floor(10000 + Math.random() * 90000);
    return id;
  };

  const handlerInsertBD = async (data: {
    origem: string;
    email: string;
    senha: string;
  }) => {
    setIsLoading(true);
    handlerRefresh(true);
    const id = idAleatorio();
    await insertSenhaBD({
      id: id,
      origem: data.origem,
      email: data.email,
      senha: data.senha,
    });
    console.log("dados inseridos com sucesso");
    setIsLoading(false);
    handlerSoptlightAdd();
    handlerRefresh(false);
  };

  return (
    <div className='h-full w-[12%] flex justify-center items-center'>
      <div className='w-[60%] h-[90%] bg-[#7300FF]/45 border border-zinc-300/50 rounded-full py-14 px-4 shadow-2xl relative overflow-hidden'>
        <div className='flex flex-col items-center space-y-8'>
          <div
            className='hover:cursor-pointer'
            onMouseEnter={() => setHoveredIcon("house")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <House
              size={45}
              weight={hoveredIcon === "house" ? "fill" : "regular"}
              color='white'
            />
          </div>
          <div
            className='hover:cursor-pointer'
            onMouseEnter={() => setHoveredIcon("search")}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => setSpotlight(!Spotlight)}
          >
            <MagnifyingGlass
              size={45}
              weight={hoveredIcon === "search" ? "fill" : "regular"}
              color='white'
            />
          </div>
          <div
            className='hover:cursor-pointer'
            onMouseEnter={() => setHoveredIcon("plus")}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => setSpotlightAdd(!SpotlightAdd)}
          >
            <PlusCircle
              size={45}
              weight={hoveredIcon === "plus" ? "fill" : "regular"}
              color='white'
            />
          </div>
          <div
            className='hover:cursor-pointer'
            onClick={() => setSpotylightUpdate2(!SpotylightUpdate2)}
          >
            <ArrowsClockwise size={45} weight='regular' color='white' />
          </div>

          <div
            onMouseEnter={() => setHoveredIcon("gear")}
            onMouseLeave={() => setHoveredIcon(null)}
            className='hover:cursor-pointer'
          >
            <Gear
              size={45}
              weight={hoveredIcon === "gear" ? "fill" : "regular"}
              color='white'
            />
          </div>
        </div>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 size-[142px] bg-white border border-zinc-300/50 rounded-full flex items-center justify-center'>
          <div className='size-[50px] rounded-full bg-[#7300FF] first-letter:border border-zinc-300/50 overflow-hidden flex justify-center items-center'>
            <Image src={Imagem} alt='perfil' />
          </div>
        </div>
      </div>
      {Spotlight && <Spotylight onClose={handlerSoptlight} />}
      {SpotlightAdd && (
        <SpotylightAdd
          onClose={handlerSoptlightAdd}
          handlerInsertBD={handlerInsertBD}
          isLoading={isLoading}
        />
      )}
      {SpotylightUpdate2 && (
        <SpotylightUpdate
          onClose={handlerSoptlightUpdate}
          handlerRefresh={handlerRefresh}
        />
      )}
    </div>
  );
}
