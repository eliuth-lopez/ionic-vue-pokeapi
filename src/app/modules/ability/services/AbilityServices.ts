import {GetAbilityResponse} from "@/app/modules/ability/domain/dto/response/GetAbilityResponse";
import {GetAbilityRequest} from "@/app/modules/ability/domain/dto/request/GetAbilityRequest";
import {IAbilityServices} from "@/app/modules/ability/services/IAbilityServices";
import api from "@/app/shared/services/pokeapi/api";
import {GetAbilityListResponse} from "@/app/modules/ability/domain/dto/response/GetAbilityListResponse";
import {PaginationAbilityRequest} from "@/app/modules/ability/domain/dto/request/PaginationAbilityRequest";

export class AbilityServices implements IAbilityServices {
    async search(request: GetAbilityRequest): Promise<GetAbilityResponse> {
        try {
            const {data} = await api.get<GetAbilityResponse>(`ability/${request.name}`);
            return data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }

    async list(request: PaginationAbilityRequest): Promise<GetAbilityListResponse> {
        try {
            const {data} = await api.get<GetAbilityListResponse>(`ability`, {params: request});
            return data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }
}