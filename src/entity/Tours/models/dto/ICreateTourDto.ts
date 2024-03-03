export interface ICreateTourDto {
    name?: string
    description?: string
    price?: number
    dateStart?: Date
    dateEnd?: Date
    from?: string
    to?: string
    images_Ids?: string[]
}