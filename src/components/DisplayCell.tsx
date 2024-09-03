import React, { useState } from "react";

import { insertSenhaBD } from "@/utils/insertBD";

import CardASenhasCell from "./assets/CardASenhasCell";
import CardNSenhasCell from "./assets/CardNSenhasCell";
import CardUSenhasCell from "./assets/CardUSenhasCell";
import CardVSenhasCell from "./assets/CardVSenhasCell";
import SpotlightAddCell from "./assets/SpotlightAddCell";

interface DisplayCellProps {
  refreshprops: boolean;
}

export default function DisplayCell({ refreshprops }: DisplayCellProps) {
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

  return (
    <div className=' h-[calc(100vh-70px)] w-full flex flex-col items-center overflow-y-auto space-y-20'>
      {!Add ? (
        <>
          <div className='mt-[90px]'>
            <CardNSenhasCell refresh={refresh} />
          </div>
          <div>
            <CardASenhasCell handlerSoptlightAdd={handlerSoptlightAdd} />
          </div>
          <div>
            <CardVSenhasCell refresh={refresh} refreshprops={refreshprops} />
          </div>
          <div className='pb-[60px]'>
            <CardUSenhasCell />
          </div>
        </>
      ) : (
        <SpotlightAddCell
          onClose={handlerSoptlightAdd}
          handlerInsertBD={handlerInsertBD}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
