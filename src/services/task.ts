import httpService from "./_httpService"

export const getTasksService = ()=>{
    return httpService('/tasks' , 'GET')
}