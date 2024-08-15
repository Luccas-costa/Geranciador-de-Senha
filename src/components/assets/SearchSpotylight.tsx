import { LockKey, LockKeyOpen } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

interface SearchSpotylightProps {
  Posicao: string;
  origem: string;
  email: string;
  senha: string;
}

export default function SearchSpotylight({
  Posicao,
  origem,
  email,
  senha,
}: SearchSpotylightProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

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
    <div
      className={`bg-neutral-800/80 hover:bg-neutral-900/80 w-[700px] p-6 shadow-2xl text-zinc-300 
        ${Posicao === "sozinho" && "rounded-2xl"}
        ${Posicao === "primeiro" && "rounded-t-2xl border-b border-zinc-300/50"}
        ${Posicao === "meio" && "rounded-none border-b border-zinc-300/50"}
        ${Posicao === "ultimo" && "rounded-b-2xl"}
        `}
    >
      <div className='px-2 flex items-center justify-between'>
        <div>
          <div>{origem}</div>
          <div className='text-sm'>
            Email: {isPasswordVisible ? email : obfuscateText(email)}
          </div>
          <div className='text-sm'>
            Senha: {isPasswordVisible ? senha : obfuscateText(senha)}
          </div>
        </div>
        <div>
          {isPasswordVisible ? (
            <LockKeyOpen
              size={30}
              weight='regular'
              color='white'
              onClick={handleLockClick}
            />
          ) : (
            <LockKey
              size={30}
              weight='regular'
              color='white'
              onClick={handleLockClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
