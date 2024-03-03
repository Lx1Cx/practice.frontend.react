export interface IUpdatePlaceResponse {
    id: string
    name: string
    description: string
    imageIds: {
        id: string
        name: string
    }[]
}