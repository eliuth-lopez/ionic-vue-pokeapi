import { BaseListResponseDTO } from "../../../shared/dtos/BaseListResponse.dto";
import { PaginationDTO } from "../../../shared/dtos/Pagination.dto";
import { IPokemonHandler } from "./IPokemonHandler";
import pokeapi from "../../../shared/api";
export class PokemonHandler implements IPokemonHandler {
  /**
   * Fetches a list of Pokémon with pagination support.
   *
   * @param pagination - The pagination parameters including limit and offset.
   * @returns A promise that resolves to a BaseListResponseDTO containing the list of Pokémon.
   */
  async getList(pagination: PaginationDTO): Promise<BaseListResponseDTO> {
    const data = await pokeapi.get<BaseListResponseDTO>(`/pokemon`, {
      params: pagination,
    });
    console.log("handler", data);
    return data;
  }
}
