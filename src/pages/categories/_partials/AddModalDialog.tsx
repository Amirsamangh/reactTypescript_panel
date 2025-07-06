import {
    Dialog,
    DialogContent,
    // DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from "react";
import type { AddCategoryType, CategoryType } from "@/types/taskCategory";
import { successToast } from "@/utils/toastUtils";
import { addOneTaskCategoryService } from "@/services/taskCategory";
import AppInput from "@/components/shared/AppInput";
import AppButton from "@/components/shared/AppButton";

const AddModalDialog = ({ setCategories }: {
    setCategories: (data: CategoryType) => void
}) => {
    const [values, setValues] = useState<AddCategoryType>({
        title: '',
        description: '',
        createdAt: new Date().toISOString(),
        userId: '1',
        icon: 'test_icon',
    })

    const handleAddTaskCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await addOneTaskCategoryService(values)
        if (res) {
            setCategories(res.data)
            successToast()
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger>افزودن</DialogTrigger>
                <DialogContent className="text-app_color_3 transition-all duration-300">
                    <DialogHeader className="[&>*]:mb-2">
                        <DialogTitle>افزودن دسته بندی جدید</DialogTitle>
                        <form onSubmit={handleAddTaskCategory}>
                            <AppInput
                                id="title"
                                title="عنوان"
                                required
                                value={values.title}
                                onChange={(e)=>setValues({...values , title: e.target.value})}
                            />
                            <AppInput
                                id="description"
                                title="توضیحات"
                                required
                                value={values.description}
                                onChange={(e)=>setValues({...values , description: e.target.value})}
                            />
                            <div className="!mb-0 mt-4">
                                <AppButton />
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddModalDialog;