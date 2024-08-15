import React, { useState } from "react";
import Image from "next/image";

import CardNSenhas from "./assets/CardNSenhas";
import CardASenhas from "./assets/CardASenhas";
import CardVSenhas from "./assets/CardVSenhas";
import CardUSenhas from "./assets/CardUSenhas";
import SpotlightAdd from "./assets/SpotylightAdd";

export default function Display() {
  const [Add, setAdd] = useState(false);
  const handlerSoptlightAdd = () => {
    setAdd(!Add);
  }
  return (
    <> 
    <div className='w-[88%] h-full flex flex-col space-y-20 items-center pt-8 relative'>
      <div className='absolute top-1 right-1 text-4xl font-bold text-[#7300FF]/40 flex space-x-2 items-center'>
        VaultKey
        <Image src='/loog2.png' width={40} height={40} alt='logo' />
      </div>

      <div className='w-full flex justify-evenly'>
        <CardNSenhas />
        <CardASenhas handlerSoptlightAdd={handlerSoptlightAdd}/>
      </div>
      <div className='w-full flex justify-evenly'>
        <CardVSenhas />
        <CardUSenhas />
      </div>
    </div>
    <div className={`w-full h-full absolute top-0 left-0 ${Add ? "z-10" : "-z-10"}`}>   
      {Add && <SpotlightAdd onClose={handlerSoptlightAdd}/> }
    </div>
    </>
  );
}
