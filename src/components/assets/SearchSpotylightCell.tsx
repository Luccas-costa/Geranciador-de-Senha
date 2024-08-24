import { LockKey, LockKeyOpen } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

interface SearchSpotylightCellProps {
  Posicao: string;
  origem: string;
  email: string;
  senha: string;
}

export default function SearchSpotylightCell({
  Posicao,
  origem,
  email,
  senha,
}: SearchSpotylightCellProps) {
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
      className={`bg-zinc-200/80 hover:bg-zinc-300/80 w-[80vw] p-6 shadow-2xl text-neutral-800 
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
              color='#404040'
              onClick={handleLockClick}
            />
          ) : (
            <LockKey
              size={30}
              weight='regular'
              color='#404040'
              onClick={handleLockClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
