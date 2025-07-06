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

const AddModalDialog = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger>افزودن</DialogTrigger>
                <DialogContent className="text-app_color_3">
                    <DialogHeader className="[&>*]:mb-2">
                        <DialogTitle>افزودن دسته بندی جدید</DialogTitle>
                        <div>
                            <label className="block mb-2">عنوان</label>
                            <Input className="border-app_color_3" placeholder="فقط حروف فارسی" />
                        </div>
                        <div>
                            <label className="block mb-2">توضیحات</label>
                            <Input className="border-app_color_3" />
                        </div>
                        <div className="!mb-0 mt-4">
                            <Button className="bg-app_color_3 hover:bg-app_color_4 cursor-pointer w-full">ثبت</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddModalDialog;