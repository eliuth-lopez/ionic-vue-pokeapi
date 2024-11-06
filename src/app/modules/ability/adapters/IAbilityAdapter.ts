import {AbilityEntity} from "@/app/modules/ability/domain/entities/ability.entity";

export default interface IAbilityAdapter {
    search(name: string): Promise<AbilityEntity>;

    list(): Promise<{name: string, url: string}[]>;
}