import {AbilityEntity} from "@/app/modules/ability/domain/entities/ability.entity";
import {IAbilityRepository} from "@/app/modules/ability/domain/repository/IAbility.repository";

export class AbilityRepository implements IAbilityRepository {
    async search(name: string): Promise<AbilityEntity[]> {
        console.log(name)
        return [];
    }
}