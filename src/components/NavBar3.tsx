import {
  ArrowsClockwise,
  Gear,
  ListBullets,
  MagnifyingGlass,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";
import Imagem from "../../public/fotoperfil.jpg";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Spotlight from "./assets/Spotylight";
import SpotlightAdd from "./assets/SpotylightAdd";

export default function NavBar3() {
  const [Spotlight, setSpotlight] = useState(false);
  const [SpotlightAdd, setSpotlightAdd] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>();
  const [SpotylightTrash2, setSpotylightTrash2] = useState(false);
  const [SpotylightUpdate2, setSpotylightUpdate2] = useState(false);
  return (
    <div className='w-[300px] h-full flex flex-col rounded-r-2xl bg-white border-r border-neutral-700/30 shadow-2xl'>
      <div className='flex space-x-2 my-3 items-center'>
        <div className='size-[45px] mx-4 rounded-full bg-[#7300FF] first-letter:border border-zinc-700/50 overflow-hidden flex justify-center items-center'>
          <Image src={Imagem} alt='perfil' />
        </div>
        <div className='text-3xl text-neutral-700'>Luccas</div>
      </div>
      <div className='flex flex-1 flex-col space-y-1 mt-6'>
        <Link href='/pages/dashboard/fullview'>
          <div
            className='flex items-center space-x-2 w-full roundedd-xl h-[70px] hover:bg-zinc-200/60 pl-4 rounded-lg cursor-pointer'
            onMouseEnter={() => setHoveredIcon("house")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className='hover:cursor-pointer'>
              <ListBullets
                size={40}
                weight={hoveredIcon === "house" ? "fill" : "regular"}
                color={"#404040"}
              />
            </div>
            <span className='text-2xl text-neutral-700'>Vizualizar</span>
          </div>
        </Link>

        <div
          className='flex items-center space-x-2 w-full roundedd-xl h-[70px] hover:bg-zinc-200/60 pl-4 rounded-lg cursor-pointer'
          onClick={() => setSpotlight(!Spotlight)}
          onMouseEnter={() => setHoveredIcon("search")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className='hover:cursor-pointer'>
            <MagnifyingGlass
              size={40}
              weight={hoveredIcon === "search" ? "fill" : "regular"}
              color={"#404040"}
            />
          </div>
          <span className='text-2xl text-neutral-700'>Pesquisar</span>
        </div>

        <div
          className='flex items-center space-x-2 w-full roundedd-xl h-[70px] hover:bg-zinc-200/60 pl-4 rounded-lg cursor-pointer'
          onClick={() => setSpotlightAdd(!SpotlightAdd)}
          onMouseEnter={() => setHoveredIcon("plus")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className='hover:cursor-pointer'>
            <PlusCircle
              size={40}
              weight={hoveredIcon === "plus" ? "fill" : "regular"}
              color={"#404040"}
            />
          </div>
          <span className='text-2xl text-neutral-700'>Adicionar</span>
        </div>

        <div
          className='flex items-center space-x-2 w-full roundedd-xl h-[70px] hover:bg-zinc-200/60 pl-4 rounded-lg cursor-pointer'
          onClick={() => setSpotylightUpdate2(!SpotylightUpdate2)}
        >
          <div className='hover:cursor-pointer'>
            <ArrowsClockwise size={40} weight='regular' color={"#404040"} />
          </div>
          <span className='text-2xl text-neutral-700'>Alterar</span>
        </div>

        <div
          className='flex items-center space-x-2 w-full roundedd-xl h-[70px] hover:bg-zinc-200/60 pl-4 rounded-lg cursor-pointer'
          onClick={() => setSpotylightTrash2(!SpotylightTrash2)}
          onMouseEnter={() => setHoveredIcon("trash")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className='hover:cursor-pointer'>
            <Trash
              size={40}
              weight={hoveredIcon === "trash" ? "fill" : "regular"}
              color={"#404040"}
            />
          </div>
          <span className='text-2xl text-neutral-700'>Deletar</span>
        </div>

        <div
          className='flex items-center space-x-2 w-full roundedd-xl h-[70px] hover:bg-zinc-200/60 pl-4 rounded-lg cursor-pointer'
          onMouseEnter={() => setHoveredIcon("gear")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className='hover:cursor-pointer'>
            <Gear
              size={40}
              weight={hoveredIcon === "gear" ? "fill" : "regular"}
              color={"#404040"}
            />
          </div>
          <span className='text-2xl text-neutral-700'>Configurações</span>
        </div>
      </div>
      <div className='w-full h-[40px] bg-zinc-200 shadow-2xl rounded-b-xl' />
    </div>
  );
}
