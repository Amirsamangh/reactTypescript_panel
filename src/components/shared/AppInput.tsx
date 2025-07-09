import { Input } from "../ui/input";
import type { ComponentProps } from "react";

const AppInput = ({title, type, id, className, ...props }: Omit<ComponentProps<'input'> , 'title , id'> & {title: string , id?:string}) => {
    return (
        <>
            <div>
                <label
                    className="block mb-2"
                    htmlFor={id}
                >
                    {title}
                </label>
                <Input
                    type={type || 'text'}
                    id={id}
                    className={`border-app_color_3 mb-2 ${className}`}
                    {...props}
                />
            </div>
        </>
    )
}

export default AppInput;