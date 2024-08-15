import React, { useState } from "react";
import { PlusCircle, ShieldPlus } from "@phosphor-icons/react/dist/ssr";
import SpotlightAdd from "./SpotylightAdd";
export default function CardASenhas() {
  const [Add, setAdd] = useState(false);
  const handlerSoptlightAdd = () => {
    setAdd(!Add);
  }
  return (
    <>
    <div className='w-[650px] h-[350px] bg-[#7300FF]/45 border border-zinc-300/50 relative rounded-xl shadow-2xl transition-all duration-300 hover:bg-[#7300FF]/70 group'
      onClick={handlerSoptlightAdd}
    >
      <div
        className='size-[140px] bg-[#7300FF]/45 border border-zinc-300/50 rounded-full shadow-2xl absolute -top-[19%] left-1/2 translate-x-[-50%] flex items-center justify-center group-hover:bg-[#7300FF]/70 transition-all duration-300'
        style={{ zIndex: 2 }}
      >
        <ShieldPlus size={90} color='white' weight='regular' />
      </div>
      <div className='w-full h-full flex flex-col -space-y-2 mt-3 justify-center items-center'>
        <PlusCircle
          size={200}
          weight='regular'
          className='text-[#e4e4e7e6] group-hover:text-white transition-all duration-300'
        />
        <div className='text-zinc-200/90 group-hover:text-white transition-all duration-300 font-bold'>
          Adicionar nova senha
        </div>
      </div>
    </div>
    {Add && <SpotlightAdd onClose={handlerSoptlightAdd}/> }
    </>
  );
}
