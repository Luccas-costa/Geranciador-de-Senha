import { LockKey, LockKeyOpen } from "@phosphor-icons/react";
import React, { useState } from "react";

interface DetailsProps {
  origem: string;
  email: string;
  senha: string;
}

export default function Details({ origem, email, senha }: DetailsProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  // Função para gerar asteriscos com base no comprimento do texto
  const obfuscateText = (text: string) => "*".repeat(text.length);

  const handleLockClick = () => {
    if (!isPasswordVisible) {
      // Copia a senha para a área de transferência
      navigator.clipboard.writeText(senha).then(() => {
        // Muda o estado para true após copiar
        setIsPasswordVisible(true);
      });
    } else {
      setIsPasswordVisible(false);
    }
  };

  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col space-y-1 ml-3 font-semibold text-lg'>
          <div className='font-semibold text-lg text-neutral-950/80'>
            Email: {isPasswordVisible ? email : obfuscateText(email)}
          </div>
          <div className='font-semibold text-lg text-neutral-950/80'>
            Senha: {isPasswordVisible ? senha : obfuscateText(senha)}
          </div>
        </div>
        <div className='mr-3 p-1 rounded-lg hover:bg-black/10 cursor-pointer'>
          {isPasswordVisible ? (
            <LockKeyOpen
              size={35}
              color='#0a0a0acc'
              weight='regular'
              onClick={() => setIsPasswordVisible(false)}
            />
          ) : (
            <LockKey
              size={35}
              color='#0a0a0acc'
              weight='regular'
              onClick={handleLockClick}
            />
          )}
        </div>
      </div>
      <div className='flex w-full items-center overflow-hidden text-neutral-950/80 text-lg font-semibold'>
        <hr className='border border-neutral-950/30 bg-neutral-950/30 w-[10%] mr-2' />
        {origem}
        <hr className='border border-neutral-950/30 bg-neutral-950/30 w-[100%] ml-2' />
      </div>
    </div>
  );
}
