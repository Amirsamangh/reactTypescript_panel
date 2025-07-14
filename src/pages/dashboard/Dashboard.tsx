import AppButton from "@/components/shared/AppButton";
import { editTaskService, getTaskWithDate } from "@/services/task";
import type { TaskListType } from "@/types/task";
import { useEffect, useState } from "react";
import AddTaskModal from "./_partials/AddTaskModal";
import { SiTicktick } from "react-icons/si";
import { successToast } from "@/utils/toastUtils";

const Dashboard = () => {
    const [todayTasks, setTodayTasks] = useState<TaskListType[]>([])
    const [open, setOpen] = useState(false)

    const handleGetTodayTasks = async () => {
        const today = new Date().toISOString().split('T')[0]
        const res = await getTaskWithDate(today)
        console.log(res);
        if (res.status === 200) {
            setTodayTasks(res.data)
        }
    }

    const handleSetIsDone = async (task: TaskListType) => {
        const res = await editTaskService(task.id, { isDone: true })
        if (res.status === 200) {
            successToast()
            handleGetTodayTasks()
        }
    }

    useEffect(() => {
        handleGetTodayTasks()
    }, [])

    return (
        <>
            <h1 className="text-lg font-bold text-app_color_4 dark:text-app_color_2 mx-2 mb-7">لیست تسک های انجام نشده ی امروز</h1>
            <div className="w-full h-full flex justify-center items-baseline">
                <div className="w-full h-full max-w-96 flex flex-col gap-10">
                    {todayTasks?.length ? (
                        <>
                            <ul className="space-y-3 p-4 drop-shadow-2xl rounded-lg bg-sky-50 dark:bg-app_color_5 peer empty:hidden">
                                {todayTasks.map(task => (
                                    !task.isDone ? (
                                        <li key={task.id} className={`w-full transition-all duration-[150ms] rounded-sm bg-app_color_1 dark:bg-app_color_3 py-2 px-3 hover:ring-1 ring-app_color_3 dark:hover:ring-app_color_1 cursor-pointer ${task.isDone}`}>
                                            <div className="flex justify-between items-center">
                                                <span className="flex items-center">
                                                    <span>{task.title}</span>
                                                    <span className="text-sm mx-4 text-app_color_3 dark:text-app_color_1">{task.taskCategory.title}</span>
                                                </span>
                                                {!task.isDone && (
                                                    <SiTicktick
                                                        size={21}
                                                        className="text-emerald-700 dark:text-emerald-500"
                                                        onClick={() => handleSetIsDone(task)}
                                                    />
                                                )}
                                            </div>
                                        </li>
                                    ) : null
                                ))}
                            </ul>
                            <h1 className="hidden peer-empty:block text-green-700 dark:text-emerald-500"> همه ی تسک های امروز انجام شده</h1>
                        </>
                    ) : (
                        <h1>هیچ تسکی برای امروز ندارید ... </h1>
                    )}
                    <AppButton onClick={() => setOpen(true)} title='افزودن تسک' />
                    <AddTaskModal open={open} setOpen={setOpen} handleRefresh={handleGetTodayTasks} />
                </div>
            </div>
        </>
    )
}

export default Dashboard;