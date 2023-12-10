import { Category } from "./category"


export interface Picture {
    id: string
    name: string,
    categories: Category[]
}

export interface CreatePictureInput {
    name: string
    categories: string[]
}