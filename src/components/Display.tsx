import React, { useState } from "react";
import Image from "next/image";

import CardNSenhas from "./assets/CardNSenhas";
import CardASenhas from "./assets/CardASenhas";
import CardVSenhas from "./assets/CardVSenhas";
import CardUSenhas from "./assets/CardUSenhas";
import SpotlightAdd from "./assets/SpotylightAddPc";

import { insertSenhaBD } from "@/utils/insertBD";

interface DisplayProps {
  refreshprops: boolean;
}

export default function Display({ refreshprops }: DisplayProps) {
  const [Add, setAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handlerSoptlightAdd = () => {
    setAdd(!Add);
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
    const id = idAleatorio();
    await insertSenhaBD({
      id: id,
      origem: data.origem,
      email: data.email,
      senha: data.senha,
    });
    console.log("dados inseridos com sucesso");
    setIsLoading(false);
    setAdd(false);
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <div className='screen14:w-[88%] w-full h-full flex flex-col space-y-20 items-center pt-8 relative'>
        <div className='absolute top-1 right-1 text-4xl font-bold text-[#7300FF]/40 flex space-x-2 items-center'>
          VaultKey
          <Image src='/loog2.png' width={40} height={40} alt='logo' />
        </div>

        <div className='w-full flex screen14:flex-row flex-col screen14:justify-evenly'>
          <CardNSenhas />
          <CardASenhas handlerSoptlightAdd={handlerSoptlightAdd} />
        </div>
        <div className='w-full flex screen14:flex-row flex-col screen14:justify-evenly'>
          <CardVSenhas refresh={refresh} refreshprops={refreshprops} />
          <CardUSenhas />
        </div>
      </div>
      <div
        className={`w-full h-full absolute top-0 left-0 ${
          Add ? "z-10" : "-z-10"
        }`}
      >
        {Add && (
          <SpotlightAdd
            onClose={handlerSoptlightAdd}
            handlerInsertBD={handlerInsertBD}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
}
