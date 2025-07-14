
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

type DeleteTaskModalType = {
    handleClick: (taskId: string) => void
    title: string
    open: boolean
    setOpen: (open: boolean) => void
    taskId: string
}
const DeleteTaskModal = ({ handleClick, title, open, setOpen, taskId }: DeleteTaskModalType) => {

    return (
        <>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent className="bg-app_color_2 text-app_color_4 dark:bg-app_color_4 dark:text-app_color_2">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="mb-5">افزودن تسک جدید</AlertDialogTitle>
                        <AlertDialogDescription>
                            {`آیا از حذف ${title} اطمینان دارید؟`}
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                            <AlertDialogCancel
                                title='انصراف'
                                onClick={() => setOpen(false)}
                                className="bg-app_color_3 dark:bg-app_color_2 hover:bg-app_color_4 dark:hover:bg-app_color_6 hover:text-app_color_2 text-app_color_2 dark:text-app_color_5 dark:hover:text-app_color_5 cursor-pointer"
                            >
                                انصراف
                            </AlertDialogCancel>

                            <Button
                                title='حذف'
                                onClick={() => handleClick(taskId)}
                                className="bg-rose-600 hover:bg-rose-700 text-app_color_2 cursor-pointer"
                            >
                                حذف
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DeleteTaskModal;