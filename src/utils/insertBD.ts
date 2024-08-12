"use server";

import { sql } from "@vercel/postgres";

export async function insertSenhaBD({
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
    console.log("Inserindo dados na tabela SenhasBD...");
    await sql`INSERT INTO SenhasBD (id, Origem, email, senha) VALUES (${id}, ${origem}, ${email}, ${senha})`;
    console.log("Dados inseridos com sucesso!");
  } catch (error) {
    console.log("Erro ao inserir dados na tabela SenhasBD:", error);
  }
}
