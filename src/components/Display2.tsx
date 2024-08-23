import React, { useState } from 'react'
import CardASenhas2 from './assets/CardASenhas2'
import CardVSenhas2 from './assets/CardVSenhas2'
import CardUSenhas2 from './assets/CardUSenhas2'
import CardNSenhas2 from './assets/CardNSenhas2'
import SpotlightAdd from './assets/SpotylightAdd'

import { insertSenhaBD } from "@/utils/insertBD";
import SpotlightAdd2 from './assets/SpotlightAdd2'

interface DisplayProps2 {
    refreshprops: boolean;
  }

export default function Display2({
    refreshprops}: DisplayProps2) {
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
            <CardNSenhas2/>
        </div>
        <div>
            <CardASenhas2 handlerSoptlightAdd={handlerSoptlightAdd}/>
        </div>
        <div>
            <CardVSenhas2 refresh={refresh} refreshprops={refreshprops}/>
        </div>
        <div className='pb-[60px]'> 
            <CardUSenhas2 />
        </div>
            </>
        ) : (
          <SpotlightAdd2
            onClose={handlerSoptlightAdd}
            handlerInsertBD={handlerInsertBD}
            isLoading={isLoading}
          />
        )}
    </div>
  )
}
