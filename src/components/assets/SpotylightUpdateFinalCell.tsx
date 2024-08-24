import React, { useState } from "react";

interface SpotylightUpdateFinalCellProps {
  id: number;
  origem: string;
  email: string;
  senha: string;
  IsLoading: boolean;
  handlerUpdateBD: (data: {
    id: number;
    origem: string;
    email: string;
    senha: string;
  }) => void;
}

export default function SpotylightUpdateFinalCell({
  origem,
  email,
  senha,
  IsLoading,
  id,
  handlerUpdateBD,
}: SpotylightUpdateFinalCellProps) {
  const [Origem, setOrigem] = useState<string>(origem);
  const [Email, setEmail] = useState<string>(email);
  const [Senha, setSenha] = useState<string>(senha);

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <div>
        <form className='flex flex-col space-y-3 items-center justify-center'>
          <div className='text-2xl font-semibold text-white'>
            Troque quaisquer dados e envie.
          </div>
          <input
            type='text'
            className='bg-zinc-200/80 w-[80vw] p-6 rounded-xl shadow-2xl text-neutral-900 placeholder:text-neutral-900'
            value={Origem}
            onChange={(e) => setOrigem(e.target.value)}
            autoFocus
          />
          <input
            type='text'
            className='bg-zinc-200/80 w-[80vw] p-6 rounded-xl shadow-2xl text-neutral-900 placeholder:text-neutral-900'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            className='bg-zinc-200/80 w-[80vw] p-6 rounded-xl shadow-2xl text-neutral-900 placeholder:text-neutral-900'
            value={Senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              handlerUpdateBD({
                id,
                origem: Origem,
                email: Email,
                senha: Senha,
              });
            }}
            className='bg-zinc-200/80 w-[80vw] p-6 rounded-xl shadow-2xl text-neutral-900 placeholder:text-neutral-900'
          >
            {IsLoading ? "Alterando..." : "Alterar"}
          </button>
        </form>
      </div>
    </div>
  );
}
