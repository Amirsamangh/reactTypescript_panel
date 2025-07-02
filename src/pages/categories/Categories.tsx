import { useEffect, useState } from "react";
import { getTaskCategoriesService } from "../../services/taskCategory";

type CategoryType =   {
    id?: string
    title?: string
    description?:string
    icon?: string
    userId?:string
    createdAt?:string
  }

const Categories = () => {
    const [categories, setCategories] = useState([])

    const handleGetTaskCategories = async () => {
        const data = await getTaskCategoriesService()
        setCategories(data)
    }

    useEffect(() => {
        handleGetTaskCategories()
    }, [])

    return (
        <>
            <div>
                {
                    categories.map((cat: CategoryType)=> (
                        <div>{cat.id}</div>
                    ))
                }
            </div>
        </>
    )
}

export default Categories;