import React from "react";
import Image from "next/image";
import styles from "@/style/border.module.css";
import Link from "next/link";
import Imagem from "../../public/fotoperfil.jpg";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

interface FullViewNavBarProps {
  setSearchQuery: (query: string) => void;
}

export default function FullViewNavBar({
  setSearchQuery,
}: FullViewNavBarProps) {
  return (
    <div className='h-[70px] w-full flex items-center justify-between border-b border-zinc-400/70 shadow-lg'>
      <div className='p-2 flex items-center space-x-2'>
        <div className='mr-2'>
          <Image
            src='/logo-tranparente.png'
            alt='logo'
            width={50}
            height={50}
          />
        </div>
        <div className={`text-xl text-black/70 font-bold ${styles.navItem}`}>
          <Link href='/pages/dashboard' className='flex items-center'>
            <span className='text-2xl'>{"<-"}</span> Voltar ao Dashboard
          </Link>
        </div>
      </div>
      <div className='flex mr-3 space-x-4 items-center'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Pesquisar Senhas...'
            onChange={(e) => setSearchQuery(e.target.value)}
            className='text-black placeholder:text-black/70 placeholder:font-semibold border border-zinc-300/50 rounded-xl px-2 py-[6px] bg-black/20 w-[300px]'
          />
          <div className='absolute top-[18px] right-2 transform -translate-y-1/2 cursor-pointer'>
            <MagnifyingGlass size={25} color='black' />
          </div>
        </div>
        <div className='size-[45px] mr-4 rounded-full bg-[#7300FF] first-letter:border border-zinc-700/50 overflow-hidden flex justify-center items-center'>
          <Image src={Imagem} alt='perfil' />
        </div>
      </div>
    </div>
  );
}
