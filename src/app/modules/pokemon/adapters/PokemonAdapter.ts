import { PokemonRepository } from "../domain/repository/PokemonRepository";
import { IPokemonAdapter } from "./IPokemonAdapter";

export class PokemonAdapter implements IPokemonAdapter {
  private iPokemonRepository = new PokemonRepository();
  async getList(pagination: any): Promise<any> {
    const result = await this.iPokemonRepository.getList(pagination);
    console.log("adapter", result);
    
    return result;
  }
}
