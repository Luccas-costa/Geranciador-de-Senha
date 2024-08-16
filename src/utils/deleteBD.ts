"use server";

import { sql } from "@vercel/postgres";

// Função para apagar um registro da tabela bdimages com base no id
export async function deleteSenhaBD(id: number): Promise<void> {
  try {
    console.log(`Apagando Senha com id: ${id}`);
    // Executa a consulta SQL para deletar o registro correspondente ao id fornecido
    await sql`DELETE FROM senhasbd WHERE id = ${id}`;
    console.log("Senha apagada com sucesso!");
  } catch (error) {
    console.log("Erro ao apagar Senha do banco de dados:", error);
    throw new Error("Erro ao apagar Senha do banco de dados");
  }
}
