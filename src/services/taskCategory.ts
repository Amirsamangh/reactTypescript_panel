export const getTaskCategoriesService = async () => {
    const response = await fetch('http://localhost:3001/taskCategories')
    if (response.ok) {
        const res = await response.json()
        return res;
    }
    return null
}