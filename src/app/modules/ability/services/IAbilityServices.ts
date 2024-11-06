import {GetAbilityResponse} from "@/app/modules/ability/domain/dto/response/GetAbilityResponse";
import {GetAbilityRequest} from "@/app/modules/ability/domain/dto/request/GetAbilityRequest";
import {PaginationAbilityRequest} from "@/app/modules/ability/domain/dto/request/PaginationAbilityRequest";
import {GetAbilityListResponse} from "@/app/modules/ability/domain/dto/response/GetAbilityListResponse";

export interface IAbilityServices {
    search(request: GetAbilityRequest): Promise<GetAbilityResponse>;

    list(request: PaginationAbilityRequest): Promise<GetAbilityListResponse>
}