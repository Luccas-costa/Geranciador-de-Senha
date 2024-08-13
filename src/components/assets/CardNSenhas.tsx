import { ArrowUp } from "@phosphor-icons/react";
import { ArrowRight, Archive } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function CardNSenhas() {
  return (
    <div className='w-[650px] h-[350px] bg-[#7300FF]/45 border border-zinc-300/50 relative rounded-xl shadow-2xl'>
      <div
        className='size-[140px] bg-[#7300FF]/45 border border-zinc-300/50 rounded-full shadow-2xl absolute -top-[19%] left-1/2 translate-x-[-50%] flex items-center justify-center'
        style={{ zIndex: 2 }}
      >
        <Archive size={90} color='white' weight='regular' />
      </div>
      <div className='text-3xl mt-20 text-white font-bold text-center'>
        Quantas senhas você tem?
      </div>
      <div className='flex items-center justify-center space-x-2 font-bold text-center mt-8 ml-6 text-8xl text-zinc-200/90'>
        47
        <ArrowUp size={90} color='#e4e4e7e6' weight='bold' />
      </div>
    </div>
  );
}
