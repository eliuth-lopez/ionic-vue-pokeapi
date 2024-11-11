import { BaseListResponseDTO } from "../../../shared/dtos/BaseListResponse.dto";
import { PaginationDTO } from "../../../shared/dtos/Pagination.dto";

export interface IPokemonHandler {
    getList(pagination: PaginationDTO):Promise<BaseListResponseDTO>;
}