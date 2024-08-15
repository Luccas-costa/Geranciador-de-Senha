"use server";

import { sql } from "@vercel/postgres";

// Função para buscar a senha atual com base na origem
export async function fetchSenhaByOrigem(origem: string) {
  try {
    console.log("Buscando dados da tabela SenhasBD...");
    const result = await sql`
      SELECT * FROM SenhasBD WHERE Origem = ${origem}
    `;
    return result.rows[0]; // Retorna o primeiro resultado encontrado
  } catch (error) {
    console.log("Erro ao buscar dados na tabela SenhasBD:", error);
    return null;
  }
}

// Função para atualizar a senha no banco de dados
export async function updateSenhaBD({
  id,
  origem,
  email,
  senha,
}: {
  id: number;
  origem: string;
  email: string;
  senha: string;
}) {
  try {
    console.log("Atualizando dados na tabela SenhasBD...");
    await sql`
      UPDATE SenhasBD
      SET email = ${email}, senha = ${senha}, origem = ${origem}
      WHERE id = ${id}
    `;
    console.log("Dados atualizados com sucesso!");
  } catch (error) {
    console.log("Erro ao atualizar dados na tabela SenhasBD:", error);
  }
}
