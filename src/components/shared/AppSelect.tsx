import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { ComponentProps } from "react";

type AppSelectType = Omit<ComponentProps<'select'>, 'title' | 'onChange'> & {
    title: string
    onChange: (val: string) => void
    options: { value: string, title: string }[]
}

const AppSelect = ({ title, className, onChange, options, ...props }: AppSelectType) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium">
                {title}
            </label>
            <Select onValueChange={(val) => onChange(val)}>
                <SelectTrigger className={`${className} ring ring-app_color_3`}>
                    <SelectValue placeholder="انتخاب دسته بندی" {...props} />
                </SelectTrigger>
                <SelectContent className="text-app_color_3 hover:!text-app_color_3">
                    {
                        options.map((option, i) => (
                            <SelectItem
                                key={option.value + i}
                                value={option.value}
                            >
                                {option.title}
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>
    )
}

export default AppSelect;