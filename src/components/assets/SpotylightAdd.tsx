import React, { useState, useEffect, useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SpotlightAddProps {
  onClose: () => void;
  handlerInsertBD: (data: {
    origem: string;
    email: string;
    senha: string;
  }) => void;
  isLoading: boolean;
}

export default function SpotlightAdd({
  onClose,
  isLoading,
  handlerInsertBD,
}: SpotlightAddProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Estados para os valores dos inputs
  const [origem, setOrigem] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função para fechar o spotlight ao clicar fora
  const handleClickOutside = (event: MouseEvent) => {
    if (
      spotlightRef.current &&
      !spotlightRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode manipular os valores dos inputs
    console.log({ origem, email, senha });
    // Limpar os campos após o envio, se necessário
    setOrigem("");
    setEmail("");
    setSenha("");
  };

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
      <div ref={spotlightRef}>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-3 items-center justify-center'
        >
          <div className='text-2xl font-semibold text-white'>
            Preencha os dados para adicionar uma nova senha
          </div>
          <input
            type='text'
            placeholder='Nome da origem'
            className='bg-neutral-800/80 w-[700px] p-6 rounded-xl shadow-2xl text-zinc-300'
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
          <input
            type='text'
            placeholder='example@gmail.com'
            className='bg-neutral-800/80 w-[700px] p-6 rounded-xl shadow-2xl text-zinc-300'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Senha'
            className='bg-neutral-800/80 w-[700px] p-6 rounded-xl shadow-2xl text-zinc-300'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            type='submit'
            onClick={() => handlerInsertBD({ origem, email, senha })}
            className='bg-neutral-800/80 w-[700px] p-6 rounded-xl shadow-2xl text-zinc-300'
          >
            {isLoading ? "Adicionando..." : "Adicionar Senha"}
          </button>
        </form>
      </div>
    </div>
  );
}
