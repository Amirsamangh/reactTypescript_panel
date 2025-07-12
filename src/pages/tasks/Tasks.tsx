import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { Input } from "@/components/ui/input";
import { addTaskService, deleteTaskService, editTaskService } from "@/services/task";
import { getTaskCategoriesWithTaskService } from "@/services/taskCategory";
import type { TaskListType } from "@/types/task";
import type { CategoryWithTaskListItemType } from "@/types/taskCategory";
import { compareDates, convertMiladiToJalali, getDateInRange } from "@/utils/dateUtils";
import { successToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";
import { LuCircle, LuCircleOff } from "react-icons/lu";
import { GoXCircle } from "react-icons/go";
import { ConfirmAlert } from "@/utils/alertUtils";
import { useAppSelector } from "@/redux/reduxHooks";

const Tasks = () => {
    const { theme } = useAppSelector(state => state.uiManagerReducer)
    const [dates, setDates] = useState<{ gregorian: string, jalali: string }[]>([])
    const [taskCats, setTaskCats] = useState<CategoryWithTaskListItemType[]>([])
    const [input, setInput] = useState('')
    const generateDateInRange = () => {
        const resDate = getDateInRange(3, 5)
        const resJalaliDate = resDate.map(date => ({
            gregorian: date,
            jalali: convertMiladiToJalali(date)
        }))
        setDates(resJalaliDate)
    }
    const handleGetTasks = async () => {
        const res = await getTaskCategoriesWithTaskService()
        if (res.status === 200) {
            setTaskCats(res.data)
        }
    }
    const handleChangeIsDone = async (task: TaskListType) => {
        const res = await editTaskService(task.id, { isDone: !task.isDone })
        if (res.status === 200) {
            successToast()
            handleGetTasks()
        }
    }
    const handleClickCell = async (data: string, category: CategoryWithTaskListItemType) => {
        if (!input.trim()) return null
        const res = await addTaskService({
            title: input,
            startedAt: data,
            taskCategoryId: category.id,
            isDone: false,
            createdAt: new Date().toISOString(),
        })
        if (res.status === 201) {
            successToast()
            handleGetTasks()
            setInput('')
        }
    }
    const handleDeleteTask = async (task: TaskListType) => {
        const confirm = await ConfirmAlert(task.title, 'آیا از حذف این تسک اطمینان دارید؟', theme)
        if (confirm.isConfirmed) {
            const res = await deleteTaskService(task.id)
            if (res.status === 200) {
                successToast()
                handleGetTasks()
            } else {
                return null
            }
        }

    }
    useEffect(() => {
        if (dates.length) handleGetTasks()
    }, [dates])

    useEffect(() => {
        generateDateInRange()
    }, [])
    return (
        <>
            <div>
                <h1 className="text-lg font-bold text-app_color_4 dark:text-app_color_2 mx-2">لیست تسک ها</h1>
                <div className="flex justify-between">
                    <Input
                        type="text"
                        className="w-full my-3 md:w-60 ring dark:bg-app_color_4 border-app_color_1 dark:ring-app_color_2"
                        placeholder="عنوان تسک"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <table className="table w-full rounded-lg overflow-scroll shadow-sm text-app_color_1 bg-app_color_3 dark:bg-app_color_6 dark:text-app_color_4">
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
                                    className="h-10 border-b last:border-b-0 border-dashed dark:border-gray-500 [&>td]:!px-2 [&>td]:md:!px-3 [&>*]:!text-center"
                                >
                                    <td>{date.jalali}</td>
                                    {taskCats.map((tc) => (
                                        <td
                                            key={tc.id}
                                            className={`text-center space-x-1 relative ${input.trim() && 'hover:ring cursor-pointer'}`}
                                            onClick={() => handleClickCell(date.gregorian, tc)}
                                        >
                                            {tc.tasks.map((task) => compareDates(task.startedAt, date.gregorian) ? (
                                                <ContextMenu key={task.id}>
                                                    <ContextMenuTrigger>
                                                        <span
                                                            onClick={() => handleChangeIsDone(task)}
                                                            className={`
                                                                    bg-app_color_3 text-app_color_6 dark:bg-app_color_2 hover:bg-app_color_4 dark:hover:bg-app_color_6 dark:text-app_color_3 transition-all px-3 py-1 mx-[2px] cursor-pointer rounded-sm text-[13px]
                                                                    ${task.isDone ? '!bg-green-700 !text-gray-200 hover:!bg-green-600' : ''}
                                                                    `}
                                                        >
                                                            {compareDates(task.startedAt, date.gregorian) && task.title}
                                                        </span>
                                                    </ContextMenuTrigger>
                                                    <ContextMenuContent>
                                                        <ContextMenuItem onClick={() => handleChangeIsDone(task)}>
                                                            {!task.isDone ? (
                                                                <span className="!text-emerald-700 flex items-center gap-1.5">
                                                                    <LuCircle className="!text-emerald-700" />
                                                                    <span>تغییر وضعیت</span>
                                                                </span>
                                                            ) : (
                                                                <span className="!text-rose-700 flex items-center gap-1.5">
                                                                    <LuCircleOff className="!text-rose-700" />
                                                                    <span>تغییر وضعیت</span>
                                                                </span>
                                                            )}
                                                        </ContextMenuItem>
                                                        <ContextMenuItem onClick={() => handleDeleteTask(task)}>
                                                            <div className="flex items-center gap-1.5">
                                                                <GoXCircle />
                                                                <span>حذف تسک</span>
                                                            </div>
                                                        </ContextMenuItem>
                                                    </ContextMenuContent>
                                                </ContextMenu>
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
        </>
    )
}
export default Tasks;