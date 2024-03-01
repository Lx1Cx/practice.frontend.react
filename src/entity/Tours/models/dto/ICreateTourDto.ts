export interface ICreateTourDto {
    name?: string
    description?: string
    price?: number
    dateStart?: Date
    dateEnd?: Date
    tourPlaceFrom?: string
    tourPlaceTo?: string
    images_Ids?: string[]
}