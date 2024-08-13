import React, { useState } from "react";
import Image from "next/image";
import Imagem from "../../public/fotoperfil.jpg";
import {
  Gear,
  House,
  MagnifyingGlass,
  PlusCircle,
} from "@phosphor-icons/react";

export default function NavBar() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>();

  return (
    <div className='h-full w-[12%] flex justify-center items-center'>
      <div className='w-[60%] h-[90%] bg-[#7300FF]/45 border border-zinc-300/50 rounded-full py-14 px-4 shadow-2xl relative overflow-hidden'>
        <div className='flex flex-col items-center space-y-6'>
          <div
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
            onMouseEnter={() => setHoveredIcon("search")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <MagnifyingGlass
              size={45}
              weight={hoveredIcon === "search" ? "fill" : "regular"}
              color='white'
            />
          </div>
          <div
            onMouseEnter={() => setHoveredIcon("plus")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <PlusCircle
              size={45}
              weight={hoveredIcon === "plus" ? "fill" : "regular"}
              color='white'
            />
          </div>

          <div
            onMouseEnter={() => setHoveredIcon("gear")}
            onMouseLeave={() => setHoveredIcon(null)}
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
    </div>
  );
}
