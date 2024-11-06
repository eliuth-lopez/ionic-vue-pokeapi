import IAbilityAdapter from "@/app/modules/ability/adapters/IAbilityAdapter";
import {AbilityServices} from "@/app/modules/ability/services/AbilityServices";
import {AbilityEntity} from "@/app/modules/ability/domain/entities/ability.entity";

export class AbilityAdapter implements IAbilityAdapter {

    private abilityServices = new AbilityServices();

    async search(name: string): Promise<AbilityEntity> {
        const serviceResult = await this.abilityServices.search({name});
        return serviceResult;
    }

    async list(): Promise<{ name: string, url: string }[]> {
        const serviceResult = await this.abilityServices.list({offset: 0, limit: 10});
        return serviceResult.results;
    }
}