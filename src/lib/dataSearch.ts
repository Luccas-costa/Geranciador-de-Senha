import { fetchSenhas } from "@/utils/searchBD";
import { Senha } from "@/types/BD";

export async function searchSenhasByOrigem(origem: string): Promise<Senha[]> {
  try {
    const senhas = await fetchSenhas();
    // Filtra as senhas com base na origem
    const filteredSenhas = senhas.filter((senha) =>
      senha.origem.toLowerCase().includes(origem.toLowerCase())
    );
    return filteredSenhas;
  } catch (error) {
    console.log("Erro ao obter a lista de senhas:", error);
    throw new Error("Erro ao obter a lista de senhas");
  }
}
