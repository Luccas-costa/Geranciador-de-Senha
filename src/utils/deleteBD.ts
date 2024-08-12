"use server";

import { sql } from "@vercel/postgres";

// Função para apagar um registro da tabela bdimages com base no id
export async function deleteImageById(id: string): Promise<void> {
  try {
    console.log(`Apagando imagem com id: ${id}`);
    // Executa a consulta SQL para deletar o registro correspondente ao id fornecido
    await sql`DELETE FROM bdimages WHERE id = ${id}`;
    console.log("Imagem apagada com sucesso!");
  } catch (error) {
    console.log("Erro ao apagar imagem do banco de dados:", error);
    throw new Error("Erro ao apagar imagem do banco de dados");
  }
}
