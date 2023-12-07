

export interface Picture {
    id: string
    name: string
}

export interface CreatePictureInput {
    name: string
    categories: string[]
}