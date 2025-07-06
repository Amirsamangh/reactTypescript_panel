import {
    Dialog,
    DialogContent,
    // DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import type { AddCategoryType, CategoryType } from "@/types/taskCategory";
import { successToast } from "@/utils/toastUtils";
import { addOneTaskCategoryService } from "@/services/taskCategory";

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
                            <div>
                                <label className="block mb-2">عنوان</label>
                                <Input
                                    className="border-app_color_3"
                                    placeholder="فقط حروف فارسی"
                                    value={values.title}
                                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block mb-2">توضیحات</label>
                                <Input
                                    className="border-app_color_3"
                                    value={values.description}
                                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                                />
                            </div>
                            <div className="!mb-0 mt-4">
                                <Button type="submit" className="bg-app_color_3 hover:bg-app_color_4 cursor-pointer w-full">ثبت</Button>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddModalDialog;