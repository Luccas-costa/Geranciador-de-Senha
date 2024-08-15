import { fetchSenhas } from "@/utils/searchBD";
import { Senha } from "@/types/BD";

export async function getSenhasList(): Promise<Senha[]> {
  try {
    // Aguarda a função fetchSenhas obter os dados do banco de dados
    const senhas = await fetchSenhas();

    // Retorna a lista de objetos Senha
    return senhas;
  } catch (error) {
    console.log("Erro ao obter a lista de senhas:", error);
    throw new Error("Erro ao obter a lista de senhas");
  }
}
