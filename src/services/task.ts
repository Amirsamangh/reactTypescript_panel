import type { AddTaskListType } from "@/types/task"
import httpService from "./_httpService"

export const getTasksService = ()=>{
    return httpService('/tasks' , 'GET')
}

export const editTaskService = (taskId: string, values: Partial<AddTaskListType>)=>{
    return httpService(`/tasks/${taskId}`, 'PATCH' , values)
}

export const addTaskService = (values: AddTaskListType)=>{
    return httpService('/tasks' , 'POST' , values)
}

export const deleteTaskService = (taskId: string)=>{
    return httpService(`/tasks/${taskId}` , 'DELETE')
}