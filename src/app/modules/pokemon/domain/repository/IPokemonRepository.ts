import { BaseListResponseDTO } from "@/app/shared/services/pokeapi/shared/dtos/BaseListResponse.dto";
import { PaginationDTO } from "@/app/shared/services/pokeapi/shared/dtos/Pagination.dto";

export interface IPokemonRepository {
    getList(pagination: PaginationDTO): Promise<BaseListResponseDTO>;
}