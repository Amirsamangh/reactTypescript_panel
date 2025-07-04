import httpService from "./_httpService";

export const getTaskCategoriesService = async () => {
    const res = await httpService('/taskCategories', 'GET')
    if (res.status === 200) return res.data;
    return null
}

export const addOneTaskCategoryService = () => {
    return httpService('/taskCategories', 'POST' , {
        title: "تست 3",
        description: "توضیحات تست 3",
        icon: "work_icon",
        userId: "1",
        createdAt: "2024-01-01T00:00:00.000Z"
      })
}