import { PlusCircle, ShieldPlus } from "@phosphor-icons/react";
import React from "react";

interface CardASenhasPcProps {
  handlerSoptlightAdd: () => void;
}

export default function CardASenhasPc({
  handlerSoptlightAdd,
}: CardASenhasPcProps) {
  return (
    <div
      className='w-[calc(45vw-150px)] cursor-pointer h-[350px] bg-zinc-200/60 border border-neutral-300/50 relative rounded-xl shadow-2xl transition-all duration-300 hover:bg-zinc-200 group'
      onClick={handlerSoptlightAdd}
    >
      <div
        className='size-[120px] bg-zinc-200/60 border border-neutrals-300/50 rounded-full shadow-2xl absolute -top-[19%] left-1/2 translate-x-[-50%] flex items-center justify-center group-hover:bg-zinc-200 transition-all duration-300'
        style={{ zIndex: 2 }}
      >
        <ShieldPlus size={90} color='#404040' weight='regular' />
      </div>
      <div className='w-full h-full flex flex-col -space-y-2 mt-3 justify-center items-center'>
        <PlusCircle
          size={200}
          weight='regular'
          className='text-[#404040] group-hover:text-[#222222] transition-all duration-300'
        />
        <div className='text-[#404040] group-hover:text-[#222222] transition-all duration-300 font-bold'>
          Adicionar nova senha
        </div>
      </div>
    </div>
  );
}
