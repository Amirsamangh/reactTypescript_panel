import type { AddListTaskListType } from "@/types/task"
import httpService from "./_httpService"

export const getTasksService = ()=>{
    return httpService('/tasks' , 'GET')
}

export const editTaskService = (taskId: string, values: Partial<AddListTaskListType>)=>{
    return httpService(`/tasks/${taskId}`, 'PATCH' , values)
}