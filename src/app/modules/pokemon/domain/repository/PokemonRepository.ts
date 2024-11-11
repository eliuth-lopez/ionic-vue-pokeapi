
import { BaseListResponseDTO } from "@/app/shared/services/pokeapi/shared/dtos/BaseListResponse.dto";
import { PaginationDTO } from "@/app/shared/services/pokeapi/shared/dtos/Pagination.dto";
import { IPokemonRepository } from "./IPokemonRepository";
import { IPokemonHandler } from "@/app/shared/services/pokeapi/services/pokemon/handlers/IPokemonHandler";
import { PokemonHandler } from "@/app/shared/services/pokeapi/services/pokemon/handlers/PokemonHandler";

export class PokemonRepository implements IPokemonRepository{
    private iPokemonService: IPokemonHandler = new PokemonHandler();
    async getList(pagination: PaginationDTO): Promise<BaseListResponseDTO> {
       const result = await this.iPokemonService.getList(pagination);
       console.log("pagination", pagination);
       
       console.log("repository", result);
       
       return result;
    }
}