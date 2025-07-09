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
// import { successToast } from "@/utils/toastUtils";
import { addOneTaskCategoryService } from "@/services/taskCategory";
import AppInput from "@/components/shared/AppInput";
import AppButton from "@/components/shared/AppButton";
import AppSpinnerLoad from "@/components/shared/AppSpinnerLoad";
import { successToast } from "@/utils/toastUtils";

const initialValues = {
    title: '',
    description: '',
    createdAt: new Date().toISOString(),
    userId: '1',
    icon: 'test_icon',
}

const AddModalDialog = ({ setCategories }: {
    setCategories: (data: CategoryType) => void
}) => {
    const [values, setValues] = useState<AddCategoryType>(initialValues)
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleAddTaskCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 4000);
        e.preventDefault()
        const res = await addOneTaskCategoryService(values)
        if (res) {
            setCategories(res.data)
            successToast('درخواست با موفقیت انجام شد')
            setOpen(false)
            setValues(initialValues)
            setIsLoading(false)
        }
    }

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>افزودن</DialogTrigger>
                <DialogContent className="text-app_color_3 dark:text-app_color_2 transition-all duration-300">
                    <DialogHeader className="[&>*]:mb-2">
                        <DialogTitle>افزودن دسته بندی جدید</DialogTitle>
                        <form onSubmit={handleAddTaskCategory}>
                            <AppInput
                                title="عنوان"
                                required
                                value={values.title}
                                onChange={(e) => setValues({ ...values, title: e.target.value })}
                            />
                            <AppInput
                                title="توضیحات"
                                required
                                value={values.description}
                                onChange={(e) => setValues({ ...values, description: e.target.value })}
                            />
                            <div className="!mb-0 mt-4">
                                {
                                    isLoading ? (
                                        <AppButton disabled title={<AppSpinnerLoad />} />
                                    ) : (
                                        <AppButton />
                                    )
                                }
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddModalDialog;