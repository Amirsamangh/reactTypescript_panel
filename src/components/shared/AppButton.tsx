import { Button } from "../ui/button"
import { type ComponentProps, type ReactNode } from "react";

const AppButton = ({ className, title , ...props }: Omit<ComponentProps<'button'> , 'title'> & {title?: string | ReactNode}) => {
    return (
        <Button
            type="submit"
            className={`bg-app_color_3 hover:bg-app_color_4 dark:bg-app_color_2 dark:hover:bg-app_color_6 cursor-pointer w-full ${className}`}
            {...props}
        >
            {title || 'ثبت'}
        </Button>
    )
}

export default AppButton;