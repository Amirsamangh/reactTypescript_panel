
export type AddCategoryType = {
    title: string
    description: string
    userId: string
    createdAt: string
    icon: string
}

export type CategoryType = AddCategoryType & {
    id: string
}
