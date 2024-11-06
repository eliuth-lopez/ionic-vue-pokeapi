import {AbilityEntity} from "@/app/modules/ability/domain/entities/ability.entity";

export class IAbilityRepository implements IAbilityRepository {
    async search(name: string): Promise<AbilityEntity[]> {
        return [];
    }
}