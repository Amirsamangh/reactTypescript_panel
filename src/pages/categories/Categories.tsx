import { useEffect, useState } from "react";
import { addOneTaskCategoryService, getTaskCategoriesService } from "../../services/taskCategory";
import type { CategoryType } from "../../types/taskCategory";
import { convertMiladiToJalali } from "../../utils/dateUtils";
import { GoPencil, GoTrash } from "react-icons/go";
import { errorToast, successToast } from "../../utils/toastUtils";

const Categories = () => {
    const [categories, setCategories] = useState<CategoryType[]>([])

    const handleGetTaskCategories = async () => {
        const data = await getTaskCategoriesService()
        if (data) {
            setCategories(data)
        } else {
            errorToast()
        }
    }

    const handleAddTaskCategory = async () => {
        const res = await addOneTaskCategoryService()
        if(res) {
            setCategories([...categories , res.data])
            successToast()
        }
    }

    useEffect(() => {
        handleGetTaskCategories()
    }, [])

    return (
        <>
            <div className="flex justify-between items-center my-3">
                <h1 className="text-lg font-bold text-app_color_4 dark:text-app_color_2 mx-2">لیست دسته بندی وظایف :</h1>
                <button className="px-4 py-2 bg-app_color_3 hover:bg-app_color_4 text-app_color_2 dark:bg-app_color_2 dark:hover:bg-app_color_6 dark:text-app_color_5 dark:hover:text-app_color_5 rounded-lg cursor-pointer  transition-all"
                    onClick={handleAddTaskCategory}
                >
                    <span>افزودن دسته بندی</span>
                </button>
            </div>
            <table className="table w-full rounded-lg overflow-hidden shadow-sm text-app_color_1 bg-app_color_3 dark:bg-app_color_5">
                <thead>
                    <tr className="border-b h-12 [&>th]:!px-2 [&>th]:!md:px-3 [&>th]:!text-center">
                        <th className="hidden md:table-cell">#</th>
                        <th>عنوان</th>
                        <th className="hidden md:table-cell">توضیحات</th>
                        <th>تاریخ ایجاد</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody className="md:text-3 bg-app_color_2 dark:bg-app_color_6 text-app_color_5">
                    {
                        categories.map(item => (
                            <tr
                                key={item.id}
                                className="h-10 border-b last:border-b-0 border-dashed dark:border-gray-500 [&>td]:!px-2 [&>td]:md:!px-3 [&>*]:!text-center"
                            >
                                <td className="hidden md:table-cell">{item.id}</td>
                                <td>{item.title}</td>
                                <td className="hidden md:table-cell">{item.description}</td>
                                <td>{convertMiladiToJalali(item.createdAt, 'dddd ، jD jMMMM jYYYY')}</td>
                                <td>
                                    <GoTrash className="inline mr-2 text-red-700 cursor-pointer hover:translate-y-[-3px] transition-all" />
                                    <GoPencil className="inline mr-2 text-yellow-700 cursor-pointer hover:translate-y-[-3px] transition-all" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Categories;