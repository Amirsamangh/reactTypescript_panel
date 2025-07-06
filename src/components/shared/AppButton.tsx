import { Button } from "../ui/button"
import { Component, type ComponentProps, type ReactNode } from "react";

const AppButton = ({ className, title , ...props }: Omit<ComponentProps<'button'> , 'title'> & {title?: string | ReactNode}) => {
    return (
        <Button
            type="submit"
            className={`bg-app_color_3 hover:bg-app_color_4 cursor-pointer w-full ${className}`}
            {...props}
        >
            {title || 'ثبت'}
        </Button>
    )
}

export default AppButton;