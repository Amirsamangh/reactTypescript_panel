import {
    Dialog,
    DialogContent,
    // DialogDescription,
    DialogHeader,
    DialogTitle,
    // DialogTrigger,
} from "@/components/ui/dialog"
import AppInput from "@/components/shared/AppInput"
import AppSelect from "@/components/shared/AppSelect"
import { useState } from "react"
import type { AddCategoryType } from "@/types/taskCategory";
import AppButton from "@/components/shared/AppButton";

const initialValues = {
    title: "",
    description: "",
    createdAt: new Date().toISOString(),
    userId: "1",
    icon: "test_icon",
};

type AddTaskModalType = {
    open: boolean
    setOpen: (open: boolean) => void
}

const AddTaskModal = ({ open, setOpen }: AddTaskModalType) => {
    const [values, setValues] = useState<AddCategoryType>(initialValues)

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="text-app_color_3 dark:text-app_color_2">
                    <DialogHeader>
                        <DialogTitle className="mb-5">افزودن تسک جدید</DialogTitle>
                        <form className="space-y-5">
                            <div className="flex flex-col">
                                <AppSelect title="دسته بندی" className="w-full" />
                                <AppInput
                                    id="title"
                                    title="عنوان"
                                    placeholder="فقط حروف فارسی"
                                    required
                                    value={values.title}
                                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                                    className="mt-3"
                                />
                            </div>
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

export default AddTaskModal;