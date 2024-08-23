"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Squares from "./ui/Squares";

export default function Prohibited() {
  const [inputPIN, setInputPIN] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

  const handlePIN = () => {
    const correctPIN = "1029"; // Defina o PIN correto aqui

    if (inputPIN === correctPIN) {
      setError(null); // Limpa qualquer erro anterior
      setLoading(true); // Ativa o estado de carregamento
      localStorage.setItem("isAuthenticated", "true"); // Armazena o estado de autenticação
      router.replace("/pages/dashboard"); // Redireciona para /dashboard
    } else {
      setError("PIN incorreto. Tente novamente."); // Exibe mensagem de erro
    }
  };

  return (
    <div className='w-screen h-screen bg-black flex flex-col space-y-2 justify-center items-center'>
      <div className='w-screen h-screen absolute' style={{ zIndex: 1 }}>
        <Squares
          speed={0.2}
          size={40} //pixels
          direction='up' // up, down, left, right, diagonal
          borderColor='#1F1F1F'
          hoverFillColor='#7300FF'
        />
      </div>
      <div className='flex flex-col space-y-2' style={{ zIndex: 1 }}>
        <div className='text-white screen16:text-8xl text-7xl font-bold screen16:mb-7 mb-2'>
          VaultKey
        </div>
        <div className='flex flex-col justify-center items-center w-full'>
          {error && <div className='text-red-500 mt-2'>{error}</div>}
          <input
            type='tel'
            value={inputPIN}
            onChange={(e) => setInputPIN(e.target.value)}
            placeholder='PIN'
            className={`w-[calc(100%-1rem)] p-3 bg-neutral-400/40 border ${
              error ? "border-red-600" : "border-gray-300"
            } rounded-lg focus:outline-none ${
              error ? "focus:border-red-600" : "focus:border-[#7300FF]"
            } text-white`}
            disabled={loading} // Desativa o input enquanto carrega
          />
        </div>
        <button
          type='submit'
          onClick={handlePIN}
          className={`text-white font-bold mx-auto w-[calc(100%-1rem)] p-3 rounded-lg ${
            error ? "bg-red-600" : "bg-[#7300FF]"
          } `}
          disabled={loading} // Desativa o botão enquanto carrega
        >
          {loading ? "Carregando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
