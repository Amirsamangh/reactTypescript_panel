export const getTaskCategoriesService = async () => {
    const response = await fetch('http://localhost:3001/taskCategories')
    const res = await response.json()

    return res;
}