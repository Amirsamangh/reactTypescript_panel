
export type AddListTaskListType = {
    title: string,
    description: string,
    isDone: boolean,
    taskCategoryId: string,
    repetitionType: number,
    repetitionItems: number,
    includeVacation: boolean,
    startedAt: string,
    endedAt: string,
    createdAt: string
}

export type TaskListType = AllListTaskListType & {
    id: string
}
