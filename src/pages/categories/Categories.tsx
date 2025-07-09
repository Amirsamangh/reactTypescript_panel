import { useEffect, useState } from "react";
import { deleteTaskCategoryService, getTaskCategoriesService } from "../../services/taskCategory";
import type { CategoryType } from "../../types/taskCategory";
import { convertMiladiToJalali } from "../../utils/dateUtils";
import { GoPencil } from "react-icons/go";
// import { errorToast, successToast } from "../../utils/toastUtils";
import AddModalDialog from "./_partials/AddModalDialog";
import DeleteModalDialog from "@/pages/categories/_partials/DeleteModalDialog";
import { errorToast, successToast } from "@/utils/toastUtils";

const Categories = () => {
    const [open, setOpen] = useState(false)
    const [selectedItem , setSelectedItem] = useState<CategoryType>()
    const [categories, setCategories] = useState<CategoryType[]>([])

    const handleGetTaskCategories = async () => {
        const data = await getTaskCategoriesService()
        if (data) {
            setCategories(data)
        } else {
            errorToast(`خطا ${data.status}`)
        }
    }
    useEffect(() => {
        handleGetTaskCategories()
    }, [])

    const handleChangeCategoriesList = (data: CategoryType) => {
        setCategories([...categories, data])
    }

    const handleDeleteItem = async (item: CategoryType) => {
        const res = await deleteTaskCategoryService(item.id)
        if (res.status === 200) {
            setCategories(last => last.filter(c => c.id != item.id))
            // toast.success(`${"(" + item.title + ")"} حذف شد`)
            successToast(`${"(" + item.title + ")"} حذف شد`)
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center my-3">
                <h1 className="text-lg font-bold text-app_color_4 dark:text-app_color_2 mx-2">لیست دسته بندی وظایف :</h1>
            <AddModalDialog selectedItem={selectedItem} setSelectedItem={setSelectedItem} setCategories={handleChangeCategoriesList} open={open} setOpen={setOpen} />
            </div>
            <table className="table w-full rounded-lg overflow-hidden shadow-sm text-app_color_1 bg-app_color_3 dark:bg-app_color_6 dark:text-app_color_4">
                <thead>
                    <tr className="border-b h-12 [&>th]:!px-2 [&>th]:!md:px-3 [&>th]:!text-center">
                        <th className="hidden md:table-cell">#</th>
                        <th>عنوان</th>
                        <th className="hidden md:table-cell">توضیحات</th>
                        <th>تاریخ ایجاد</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody className="md:text-3 bg-app_color_2 dark:bg-app_color_3 dark:text-app_color_2 text-app_color_5">
                    {
                        categories.map(item => (
                            <tr
                                key={item.id}
                                className="h-10 border-b last:border-b-0 border-dashed dark:border-gray-500 [&>td]:!px-2 [&>td]:md:!px-3 [&>*]:!text-center hover:bg-gray-200 dark:hover:bg-[#425f6f]"
                            >
                                <td className="hidden md:table-cell">{item.id}</td>
                                <td>{item.title}</td>
                                <td className="hidden md:table-cell">{item.description}</td>
                                <td>{convertMiladiToJalali(item.createdAt, 'dddd ، jD jMMMM jYYYY')}</td>
                                <td>
                                    <DeleteModalDialog handleClick={() => handleDeleteItem(item)} text={`آیا از حذف ${"(" + item.title + ")"} اطمینان دارید؟`} />
                                    <GoPencil
                                        onClick={() =>{setOpen(true); setSelectedItem(item)}}
                                        className="inline mr-2 text-amber-700 dark:text-amber-300 cursor-pointer hover:translate-y-[-3px] transition-all"
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Categories;