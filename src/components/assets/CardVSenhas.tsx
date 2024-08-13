import React from "react";
import { LockKey } from "@phosphor-icons/react/dist/ssr";
import Details from "./Details";
export default function CardVSenhas() {
  return (
    <div className='w-[650px] h-[350px] bg-[#7300FF]/45 border border-zinc-300/50 relative rounded-xl shadow-2xl'>
      <div
        className='size-[140px] bg-[#7300FF]/45 border border-zinc-300/50 rounded-full shadow-2xl absolute -top-[19%] left-1/2 translate-x-[-50%] flex items-center justify-center'
        style={{ zIndex: 2 }}
      >
        <LockKey size={90} weight='regular' color='white' />
      </div>
      <div className='mt-[75px]  w-full h-[79%] rounded-b-xl overflow-y-auto p-1 overflow-hidden'>
        <hr className='border border-neutral-950/30 bg-neutral-950/30 w-[99%] mb-2 mt-1' />
        <Details
          origem={"globoplay"}
          email={"lucaspcosta70@gmail.com"}
          senha={"luquitas70"}
        />
        <Details origem={"globoplay"} email={"1@gmail.com"} senha={"2"} />
        <Details origem={"testetete"} email={"3@gmail.com"} senha={"4"} />
        <Details origem={"4"} email={"5@gmail.com"} senha={"6"} />
        <div></div>
      </div>
    </div>
  );
}
