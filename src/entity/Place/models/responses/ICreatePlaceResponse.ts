export interface ICreatePlaceResponse {
    id: string
    name: string
    description: string
    imageIds: {
        id: string
        name: string
    }[]
}