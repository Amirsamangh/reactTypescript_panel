
export type TaskListType = {
    id: string
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
