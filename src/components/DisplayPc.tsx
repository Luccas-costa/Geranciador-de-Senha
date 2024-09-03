import React, { useState } from "react";

import { insertSenhaBD } from "@/utils/insertBD";

import CardASenhasPC from "./assets/CardASenhasPc";
import CardVSenhasPC from "./assets/CardVSenhasPc";
import CardUSenhasPC from "./assets/CardUSenhasPc";
import CardNSenhasPC from "./assets/CardNSenhasPc";
import SpotlightAddPC from "./assets/SpotylightAddPc";

interface DisplayPcProps {
  refreshprops: boolean;
}

export default function DisplayPc({ refreshprops }: DisplayPcProps) {
  const [Add, setAdd] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  // so pra encher linguiça

  return (
    <div className='h-[100vh] w-[calc(100vw-300px)] flex flex-col items-center overflow-y-auto space-y-20 px-[20px]'>
      {!Add ? (
        <>
          <div className='mt-[90px] flex space-x-5'>
            <CardNSenhasPC />
            <CardASenhasPC handlerSoptlightAdd={handlerSoptlightAdd} />
          </div>
          <div>
            <CardVSenhasPC refresh={refresh} refreshprops={refreshprops} />
          </div>
          <div className='pb-[60px]'>
            <CardUSenhasPC />
          </div>
        </>
      ) : (
        <SpotlightAddPC
          onClose={handlerSoptlightAdd}
          handlerInsertBD={handlerInsertBD}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
