import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { ComponentProps } from "react";

const AppSelect = ({ title, className, ...props }: Omit<ComponentProps<'select'>, 'title'> & { title: string }) => {
    return (
        <Select>
            <SelectTrigger className={`${className} ring ring-app_color_3`}>
                <SelectValue placeholder="انتخاب دسته بندی" {...props} />
            </SelectTrigger>
            <SelectContent className="text-app_color_3 hover:!text-app_color_3">
                <SelectItem value="light">دسته 1</SelectItem>
                <SelectItem value="dark">دسته 2</SelectItem>
                <SelectItem value="system">دسته 3</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default AppSelect;