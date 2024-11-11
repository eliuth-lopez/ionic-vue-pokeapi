export interface IPokemonAdapter {
    getList(pagination: any): Promise<any>
}