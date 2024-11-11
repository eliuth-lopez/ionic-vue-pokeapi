export interface IPokemonUseCase {
    getPage(page: number, perPage: number): Promise<any>
}