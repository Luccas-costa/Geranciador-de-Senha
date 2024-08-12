"use server";

import { sql } from "@vercel/postgres";
import { Senha } from "@/types/BD";

// Função para buscar todos os registros da tabela SenhasBD

export async function fetchSenhas(): Promise<Senha[]> {
  try {
    const result = await sql`SELECT id, Origem, email, senha FROM SenhasBD`;
    const senhas: Senha[] = result.rows.map((row) => ({
      id: row.id,
      origem: row.origem,
      email: row.email,
      senha: row.senha,
    }));
    return senhas;
  } catch (error) {
    console.log("Erro ao buscar senhas do banco de dados:", error);
    throw new Error("Erro ao buscar dados do banco de dados");
  }
}
