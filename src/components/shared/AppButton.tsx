import { Button } from "../ui/button"
import type { ComponentProps } from "react";

const AppButton = ({ className, title , ...props }: ComponentProps<'button'>) => {
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