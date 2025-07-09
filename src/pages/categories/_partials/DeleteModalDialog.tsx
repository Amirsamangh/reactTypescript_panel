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
// import { Button } from "@/components/ui/button"
import { GoTrash } from "react-icons/go";

const DeleteModalDialog = ({ handleClick, text }: { handleClick: any, text: string }) => {
    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                {/* <Button variant="outline"> */}
                    <GoTrash className="inline mr-2 text-rose-600 dark:text-red-200 cursor-pointer hover:translate-y-[-3px] transition-all"  />
                {/* </Button> */}
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-app_color_2 text-app_color_4 dark:bg-app_color_4 dark:text-app_color_2">
                <AlertDialogHeader>
                    <AlertDialogTitle>آیا مطمئن هستید؟</AlertDialogTitle>
                    <AlertDialogDescription className="text-app_color_3 dark:text-app_color_2">
                        {text}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-app_color_3 dark:bg-app_color_2 hover:bg-app_color_4 dark:hover:bg-app_color_6 hover:text-app_color_2 text-app_color_2 dark:text-app_color_5 dark:hover:text-app_color_5 cursor-pointer">انصراف</AlertDialogCancel>
                    <AlertDialogAction onClick={()=>handleClick()} className="bg-rose-600 hover:bg-rose-700 text-app_color_2 cursor-pointer">حذف</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteModalDialog;