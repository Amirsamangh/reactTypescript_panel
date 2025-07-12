import AppButton from "@/components/shared/AppButton";
import { getTaskWithDate } from "@/services/task";
import type { TaskListType } from "@/types/task";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [todayTasks, setTodayTasks] = useState<TaskListType[]>([])

    const handleGetTodayTasks = async () => {
        const today = new Date().toISOString().split('T')[0]
        console.log(today);

        const res = await getTaskWithDate(today)
        console.log(res);
        if (res.status === 200) {
            setTodayTasks(res.data)
        }
    }

    useEffect(() => {
        handleGetTodayTasks()
    }, [])

    return (
        <>
            <h1 className="text-lg font-bold text-app_color_4 dark:text-app_color_2 mx-2 mb-7">لیست تسک های امروز</h1>
            <div className="w-full h-full flex justify-center items-baseline">
                <div className="w-full h-full max-w-96 flex flex-col gap-10">
                    {todayTasks?.length ? (
                        <ul className="space-y-3 p-4 drop-shadow-2xl rounded-lg bg-sky-50 dark:bg-app_color_5">
                            {todayTasks.map(task => (
                                <li key={task.id} className="w-full rounded-sm bg-app_color_1 dark:bg-app_color_3 py-2 px-3 hover:ring-[3px] ring-app_color_1 dark:hover:ring-app_color_3 cursor-pointer">{task.title}</li>
                            ))}
                        </ul>
                    ) : (
                        <h1>هیچ تسکی برای امروز ندارید ... </h1>
                    )}
                    <AppButton title='افزودن تسک' />
                </div>
            </div>
        </>
    )
}

export default Dashboard;