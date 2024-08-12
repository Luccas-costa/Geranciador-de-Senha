"use server";

import { sql } from "@vercel/postgres";

export async function insertImageURL({
  id,
  urlimages,
}: {
  id: string;
  urlimages: string;
}) {
  try {
    console.log("Enviando URL da imagem para o banco de dados...");
    await sql`INSERT INTO bdimages (id, urlimages) VALUES (${id}, ${urlimages})`;
    console.log("Enviado com sucesso!");
  } catch (error) {
    console.log("Erro ao enviar URL da imagem:", error);
  }
}
