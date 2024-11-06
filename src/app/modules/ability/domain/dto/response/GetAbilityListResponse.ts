import {BaseListResponse} from "@/app/shared/services/pokeapi/baseListResponse";

export interface GetAbilityListResponse extends BaseListResponse {
    results: Array<{ name: string, url: string }>
}