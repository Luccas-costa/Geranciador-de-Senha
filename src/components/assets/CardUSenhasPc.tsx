import React from "react";
import { Alien, AlignBottom, Archive } from "@phosphor-icons/react/dist/ssr";

export default function CardUSenhasPc() {
  return (
    <div className='w-[650px] h-[350px] bg-[#7300FF]/45 border border-zinc-300/50 relative rounded-xl shadow-2xl'>
      <div
        className='size-[140px] bg-[#7300FF]/45 border border-zinc-300/50 rounded-full absolute shadow-2xl -top-[19%] left-1/2 translate-x-[-50%] flex items-center justify-center'
        style={{ zIndex: 2 }}
      >
        <AlignBottom size={90} color='white' weight='regular' />
      </div>
      <div className='flex flex-col pb-4 items-center justify-center mt-20'>
        <div className='text-2xl font-semibold text-white'>
          Top senhas mais usadas
        </div>
        <div className='flex space-x-5 w-full h-full justify-center items-center'>
          <div className='flex flex-col-reverse items-center mb-[-78px]'>
            <div className='w-[75px] h-[106px] shadow-2xl bg-[#C0C0C0] flex items-center justify-center'>
              <div className='text-white font-bold'>26</div>
            </div>
            <div className='text-2xl text-center font-semibolds text-[#C0C0C0]'>
              Globoplay
            </div>
          </div>
          <div className='flex flex-col-reverse items-center mb-[-26px]'>
            <div className='w-[75px] h-[160px] shadow-2xl bg-[#ffd700] flex items-center justify-center'>
              <div className='text-white font-bold'>40</div>
            </div>
            <div className='text-2xl text-center font-semibolds text-[#ffd700]'>
              Netflix
            </div>
          </div>
          <div className='flex flex-col-reverse items-center mt-[130px]'>
            <div className='w-[75px] h-[55px] shadow-2xl bg-[#cd7f32] flex items-center justify-center'>
              <div className='text-white font-bold'>12</div>
            </div>
            <div className='text-2xl text-center font-semibolds text-[#cd7f32]'>
              Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
