
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type DeleteTaskModalType = {
    handleClick: any,
    title: string,
    open: boolean,
    setOpen: (open: boolean) => void
}
const DeleteTaskModal = ({ handleClick, title, open, setOpen }: DeleteTaskModalType) => {
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
                            <div className="flex gap-x-2 w-auto justify-around">

                                <AlertDialogCancel
                                    title='انصراف'
                                    onClick={() => setOpen(false)}
                                    className="bg-app_color_3 dark:bg-app_color_2 hover:bg-app_color_4 dark:hover:bg-app_color_6 hover:text-app_color_2 text-app_color_2 dark:text-app_color_5 dark:hover:text-app_color_5 cursor-pointer"
                                >
                                    انصراف
                                </AlertDialogCancel>

                                <AlertDialogAction
                                    title='حذف'
                                    onClick={() => handleClick()}
                                    className="bg-rose-600 hover:bg-rose-700 text-app_color_2 cursor-pointer"
                                >
                                    حذف
                                </AlertDialogAction>

                            </div>
                        </AlertDialogFooter>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DeleteTaskModal;