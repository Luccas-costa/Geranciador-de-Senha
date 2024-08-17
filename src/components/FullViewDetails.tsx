import { LockKeyOpen, LockKey } from "@phosphor-icons/react";
import React, { useState } from "react";

interface FullViewDetailsProps {
  origem: string;
  email: string;
  senha: string;
}

export default function FullViewDetails({
  origem,
  email,
  senha,
}: FullViewDetailsProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
    <div className='h-[90px] border-b border-zinc-400/70 shadow flex items-center justify-between px-8'>
      <div className='flex flex-col'>
        <div className='font-bold text-lg'>~ {origem} ~</div>
        <div>
          <span className='font-bold'>Email:</span>{" "}
          {isPasswordVisible ? email : obfuscateText(email)}
        </div>
        <div>
          <span className='font-bold'>Senhas:</span>{" "}
          {isPasswordVisible ? senha : obfuscateText(senha)}
        </div>
      </div>
      <div>
        {isPasswordVisible ? (
          <LockKeyOpen
            size={50}
            color='#0a0a0acc'
            weight='light'
            className='cursor-pointer p-1 rounded-lg hover:bg-black/10'
            onClick={() => setIsPasswordVisible(false)}
          />
        ) : (
          <LockKey
            size={50}
            color='#0a0a0acc'
            weight='light'
            className='cursor-pointer p-1 rounded-lg hover:bg-black/10'
            onClick={handleLockClick}
          />
        )}
      </div>
    </div>
  );
}
