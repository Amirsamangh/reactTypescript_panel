import type { AddCategoryType, CategoryType } from "@/types/taskCategory";
import httpService from "./_httpService";

export const getTaskCategoriesService = async () => {
    const res = await httpService('/taskCategories', 'GET')
    if (res.status === 200) return res.data;
    return null
}

export const addOneTaskCategoryService = (values: AddCategoryType) => {
    return httpService('/taskCategories', 'POST', values)
}

export const deleteTaskCategoryService = (catId: string)=>{
    return httpService(`/taskCategories/${catId}` , 'DELETE')
}

export const updateTaskCategoryService = (catId: string , values: AddCategoryType) => {
    return httpService(`/taskCategories/${catId}` , 'PUT' , values)
}