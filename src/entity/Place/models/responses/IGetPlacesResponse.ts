export interface IGetPlacesResponse {
    id: string
    name: string
    description: string
    images: {
        id: string
        name: string
    }[]
}