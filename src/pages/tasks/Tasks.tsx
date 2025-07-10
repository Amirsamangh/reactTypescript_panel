import AppSpinnerLoad from "@/components/shared/AppSpinnerLoad";
import { getTasksService } from "@/services/task";
import { getDateInRange } from "@/utils/dateUtils";
import { errorToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";
import type { TaskType } from "@/types/task";


const Tasks = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [dates, setDates] = useState<string[]>([])

    const handleGetTasks = async () => {
        setIsLoading(true)
        const res = await getTasksService()
        if (res.status == 200) {
            setTasks(res.data)
            setIsLoading(false)
        } else {
            errorToast()
        }
    }

    useEffect(() => {
        const resDate = getDateInRange(3, 5)
        setDates(resDate)
    }, [])

    useEffect(() => {
        handleGetTasks()
    }, [])
    return (
        <>
            {
                !isLoading ? (
                    <div>
                        <table className="table w-full rounded-lg overflow-hidden shadow-sm text-app_color_1 bg-app_color_3 dark:bg-app_color_6 dark:text-app_color_4">
                            <thead>
                                <tr className="border-b h-12 [&>th]:!px-2 [&>th]:!md:px-3 [&>th]:!text-center">
                                    <th>تاریخ</th>
                                    <th>دسته</th>
                                    <th>دسته 2</th>
                                </tr>
                            </thead>
                            <tbody className="md:text-3 bg-app_color_2 dark:bg-app_color_3 dark:text-app_color_2 text-app_color_5">
                                {
                                    dates.map(date => (
                                        <tr
                                            key={date}
                                            className="h-10 border-b last:border-b-0 border-dashed dark:border-gray-500 [&>td]:!px-2 [&>td]:md:!px-3 [&>*]:!text-center hover:bg-gray-200 dark:hover:bg-[#425f6f]"
                                        >
                                            <td key={date}>{date}</td>
                                            <td>تسک</td>
                                            <td>تسک</td>
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