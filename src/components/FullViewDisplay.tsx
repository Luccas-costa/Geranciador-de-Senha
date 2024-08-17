"use client";
import React, { useEffect, useState } from "react";
import FullViewDetails from "./FullViewDetails";
import { Senha } from "@/types/BD";
import { getSenhasList } from "@/lib/data";
import styles from "@/style/loading.module.css";

interface FullViewDisplayProps {
  searchQuery: string;
}

export default function FullViewDisplay({ searchQuery }: FullViewDisplayProps) {
  const [senhas, setSenhas] = useState<Senha[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const senhasData = await getSenhasList();
        setSenhas(senhasData);
      } catch (error) {
        console.log("Erro ao buscar senhas:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filtrar as senhas com base na pesquisa
  const filteredSenhas = senhas.filter((senha) =>
    senha.origem.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='w-full h-full'>
      {isLoading ? (
        <div className='w-full h-full flex items-center justify-center'>
          <div className={`${styles.loader}`}>
            <div className={`${styles.loadersquare2}`}></div>
            <div className={`${styles.loadersquare2}`}></div>
            <div className={`${styles.loadersquare2}`}></div>
            <div className={`${styles.loadersquare2}`}></div>
            <div className={`${styles.loadersquare2}`}></div>
            <div className={`${styles.loadersquare2}`}></div>
            <div className={`${styles.loadersquare2}`}></div>
          </div>
        </div>
      ) : (
        <div className='w-full h-[calc(100vh-75px)] overflow-y-auto'>
          {filteredSenhas.map((senha) => (
            <FullViewDetails
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
