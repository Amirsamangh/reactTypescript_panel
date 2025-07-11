
export type AddTaskListType = {
    title: string,
    description?: string,
    isDone: boolean,
    taskCategoryId: string,
    repetitionType?: number,
    repetitionItems?: number,
    includeVacation?: boolean,
    startedAt: string,
    endedAt?: string,
    createdAt: string
}

export type TaskListType = AddTaskListType & {
    id: string
}
