import {AbilityEntity} from "@/app/modules/ability/domain/entities/ability.entity";

export interface IAbilityRepository {
    search(name: string): Promise<AbilityEntity[]>
}