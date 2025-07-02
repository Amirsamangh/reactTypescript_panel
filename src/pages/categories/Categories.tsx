import { useEffect, useState } from "react";
import { getTaskCategoriesService } from "../../services/taskCategory";
import type { CategoryType } from "../../types/taskCategory";

const Categories = () => {
    const [categories, setCategories] = useState<CategoryType[]>([])

    const handleGetTaskCategories = async () => {
        const data = await getTaskCategoriesService()
        setCategories(data)
    }

    useEffect(() => {
        handleGetTaskCategories()
    }, [])

    return (
        <>
            <table className="table w-full rounded-lg overflow-hidden shadow-sm text-app_color_1 bg-app_color_3 dark:bg-app_color_5 dark:shadow-app_color_4">
                <thead>
                    <tr className="border-b h-12 [&>th]:px-2 [&>th]:md:px-3 [&>th]:text-center">
                        <th className="hidden md:table-cell">#</th>
                        <th>عنوان</th>
                        <th>توضیحات</th>
                        <th>تاریخ ایجاد</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody className="md:text-3 bg-app_color_2 text-app_color_5">
                    {
                        categories.map(item=>(
                            <tr 
                                key={item.id}
                                className="h-10 border-b border-dashed dark:border-gray-500 [&>td]:px-2 [&>td]:md:px-3 [&>td]:text-center"    
                            >
                                <td className="hidden md:table-cell">{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.createdAt}</td>
                                <td>Actions</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Categories;