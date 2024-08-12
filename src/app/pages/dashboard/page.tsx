"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated !== "true") {
      router.push("/"); // Redireciona para a página inicial ou para o componente Prohibited
    }
  }, [router]);

  return (
    <div>
      {/* Conteúdo do dashboard */}
      <h1>Bem-vindo ao Dashboard</h1>
    </div>
  );
}
