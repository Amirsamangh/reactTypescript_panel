import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogTitle,
    // AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { GoXCircle } from "react-icons/go";
// import { Button } from "@/components/ui/button"

const DeleteModalDialog = ({ handleClick, text, open, setOpen }: { handleClick: any, text: string, open: boolean, setOpen: (open: boolean) => void }) => {

    return (
        <>
            {console.log(open)}
            <span className="flex gap-1.5" onClick={() => setOpen(true)} >
                <GoXCircle className="text-gray-800" />
                <span>حذف تسک</span>
            </span>
            <AlertDialog open={open} onOpenChange={setOpen}>
                {/* <AlertDialogTrigger asChild>
                <Button variant="outline">

                </Button>
                </AlertDialogTrigger> */}
                <AlertDialogOverlay onClick={()=>setOpen(false)}>
                    <AlertDialogContent className="bg-app_color_2 text-app_color_4 dark:bg-app_color_4 dark:text-app_color_2">
                        <AlertDialogHeader>
                            <AlertDialogTitle>آیا مطمئن هستید؟</AlertDialogTitle>
                            <AlertDialogDescription className="text-app_color_3 dark:text-app_color_2">
                                {text}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="bg-app_color_3 dark:bg-app_color_2 hover:bg-app_color_4 dark:hover:bg-app_color_6 hover:text-app_color_2 text-app_color_2 dark:text-app_color_5 dark:hover:text-app_color_5 cursor-pointer">انصراف</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleClick()} className="bg-rose-600 hover:bg-rose-700 text-app_color_2 cursor-pointer">حذف</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default DeleteModalDialog;