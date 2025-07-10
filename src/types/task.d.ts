
export type AddTaskType = {
    groupCode: string,
    title: string,
    description: string,
    isDone: boolean,
    taskCategoryId: string,
    repetitionType: number,
    repetitionItems: number,
    includeVacation: boolean,
    startedAt: string | null,
    endedAt: string | null,
    createdAt: string
}

export type TaskType = AddTaskType & {
    id: string
}