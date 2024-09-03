import React, { useEffect, useState } from "react";
import { LockKey } from "@phosphor-icons/react/dist/ssr";
import Details from "./Details";
import { getSenhasList } from "@/lib/data";
import styles from "@/style/loading.module.css";

interface Senha {
  id: number;
  origem: string;
  email: string;
  senha: string;
}

interface CardVSenhasCellProps {
  refresh: boolean;
  refreshprops: boolean;
}

export default function CardVSenhasCell({
  refresh,
  refreshprops,
}: CardVSenhasCellProps) {
  const [senhas, setSenhas] = useState<Senha[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Começa o carregamento
      try {
        const senhasData = await getSenhasList();
        setSenhas(senhasData);
      } catch (error) {
        console.log("Erro ao buscar senhas:", error);
      } finally {
        setIsLoading(false); // Termina o carregamento
      }
    }
    fetchData();
  }, [refresh, refreshprops]);

  return (
    <div className='w-[calc(90vw-20px)] h-[350px] bg-zinc-200/60 border border-neutral-300/50 relative rounded-xl shadow-2xl transition-all duration-300 hover:bg-zinc-200 group'>
      <div
        className='size-[120px] bg-zinc-200/60 border border-neutrals-300/50 rounded-full shadow-2xl absolute -top-[19%] left-1/2 translate-x-[-50%] flex items-center justify-center group-hover:bg-zinc-200 transition-all duration-300'
        style={{ zIndex: 2 }}
      >
        <LockKey size={90} color='#404040' weight='regular' />
      </div>
      {isLoading ? (
        <div className='w-full h-full flex items-center justify-center'>
          <div className={`${styles.loader}`}>
            <div className={`${styles.loadersquare}`}></div>
            <div className={`${styles.loadersquare}`}></div>
            <div className={`${styles.loadersquare}`}></div>
            <div className={`${styles.loadersquare}`}></div>
            <div className={`${styles.loadersquare}`}></div>
            <div className={`${styles.loadersquare}`}></div>
            <div className={`${styles.loadersquare}`}></div>
          </div>
        </div>
      ) : (
        <div className='mt-[75px] w-full h-[78%] rounded-b-xl overflow-y-auto p-1 overflow-hidden'>
          <hr className='border border-neutral-950/30 bg-neutral-950/30 w-[99%] mb-2 mt-1' />
          {senhas.map((senha) => (
            <Details
              key={senha.id}
              origem={senha.origem}
              email={senha.email}
              senha={senha.senha}
            />
          ))}
        </div>
      )}
    </div>
  );
}
