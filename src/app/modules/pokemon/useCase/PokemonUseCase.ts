import { PokemonAdapter } from "../adapters/PokemonAdapter";
import { IPokemonUseCase } from "./IPokemonUseCase";

export class PokemonUseCase implements IPokemonUseCase {

  private iPokemonAdapter = new PokemonAdapter();

  async getPage(page: number, perPage: number): Promise<any> {
    console.log(page, perPage);
    
    const { results, count } = await this.iPokemonAdapter.getList({
      limit: perPage,
      offset: page - 1,
    });

    const totalItems = count;
    const totalPages = Math.ceil(totalItems / perPage);
    const pokemons = results;

    console.log({ totalItems, totalPages, pokemons });
    

    return { totalItems, totalPages, pokemons };
  }
}
