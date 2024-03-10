export interface TourEntity {
    id: string
    name: string
    description: string
    price: number
    dateStart: Date
    dateEnd: Date
    tourFrom: {
        id: string
        description: string
        name: string
    }
    tourTo: {
        id: string
        description: string
        name: string
    }
    images: {
        id: string
        name: string
    }[]
}