import AppSpinnerLoad from "@/components/shared/AppSpinnerLoad";
import { getTaskCategoriesWithTaskService } from "@/services/taskCategory";
import type { CategoryWithTaskListItemType } from "@/types/taskCategory";
import { compareDates, convertMiladiToJalali, getDateInRange } from "@/utils/dateUtils";
import { useEffect, useState } from "react";


const Tasks = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [dates, setDates] = useState<{ gregorian: string, jalali: string }[]>([])
    const [taskCats, setTaskCats] = useState<CategoryWithTaskListItemType[]>([])

    const generateDateInRange = () => {
        const resDate = getDateInRange(3, 5)
        const resJalaliDate = resDate.map(date => ({
            gregorian: date,
            jalali: convertMiladiToJalali(date)
        }))
        setDates(resJalaliDate)
    }

    const handleGetTasks = async () => {
        setIsLoading(true)
        const res = await getTaskCategoriesWithTaskService()
        if (res.status === 200) {
            setTaskCats(res.data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        generateDateInRange()
    }, [])

    useEffect(() => {
        if (dates.length) handleGetTasks()
    }, [dates])
    return (
        <>
            {
                !isLoading ? (
                    <div>
                        <table className="table w-full rounded-lg overflow-hidden shadow-sm text-app_color_1 bg-app_color_3 dark:bg-app_color_6 dark:text-app_color_4">
                            <thead>
                                <tr className="border-b h-12 [&>th]:!px-2 [&>th]:!md:px-3 [&>th]:!text-center">
                                    <th>تاریخ</th>
                                    {taskCats.map(tc => (
                                        <th key={tc.id}>{tc.title}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="md:text-3 bg-app_color_2 dark:bg-app_color_3 dark:text-app_color_2 text-app_color_5">
                                {
                                    dates.map(date => (
                                        <tr
                                            key={date.gregorian}
                                            className="h-10 border-b last:border-b-0 border-dashed dark:border-gray-500 [&>td]:!px-2 [&>td]:md:!px-3 [&>*]:!text-center hover:bg-gray-200 dark:hover:bg-[#425f6f]"
                                        >
                                            <td>{date.jalali}</td>
                                            {taskCats.map((tc) => (
                                                <td key={tc.id} className="text-center space-x-1 has-[span]:[&>*]:px-3 has-[span]:[&>*]:py-[3px] relative">
                                                    {tc.tasks.map((task) => compareDates(task.startedAt, date.gregorian) ? (
                                                        <span className="!bg-app_color_3 !text-app_color_6 dark:!bg-app_color_2 dark:!text-app_color_3 rounded-sm text-[13px]">{compareDates(task.startedAt, date.gregorian) && task.title}</span>
                                                    ) : null
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <AppSpinnerLoad />
                    </div>
                )
            }
        </>
    )
}

export default Tasks;