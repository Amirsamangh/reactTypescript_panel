import type { TaskListType } from "./task"

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

export type CategoryWithTaskListItemType = CategoryType & {
    tasks: TaskListType[]
}
