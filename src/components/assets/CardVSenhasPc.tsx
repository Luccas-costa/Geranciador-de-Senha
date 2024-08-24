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

interface CardVSenhasPcProps {
  refresh: boolean;
  refreshprops: boolean;
}

export default function CardVSenhasPc({
  refresh,
  refreshprops,
}: CardVSenhasPcProps) {
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
    <div className='w-[650px] h-[350px] bg-[#7300FF]/45 border border-zinc-300/50 relative rounded-xl shadow-2xl'>
      <div
        className='size-[140px] bg-[#7300FF]/45 border border-zinc-300/50 rounded-full shadow-2xl absolute -top-[19%] left-1/2 translate-x-[-50%] flex items-center justify-center'
        style={{ zIndex: 2 }}
      >
        <LockKey size={90} weight='regular' color='white' />
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
