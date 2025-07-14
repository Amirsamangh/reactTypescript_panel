import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import type { TaskListType } from "@/types/task"
import { compareDates } from "@/utils/dateUtils"
import { GoXCircle } from "react-icons/go"
import { LuCircle, LuCircleOff } from "react-icons/lu"

type TasksContextMenuType = {
    task: TaskListType
    handleClick: (task: TaskListType) => Promise<void>
    gregorian: string
    deleteTask: any
}

const TasksContextMenu = ({ task, handleClick, gregorian, deleteTask }: TasksContextMenuType) => {
    return (
        <>
            <ContextMenu key={task.id}>
                <ContextMenuTrigger>
                    <span
                        onClick={() => handleClick(task)}
                        className={`
                        bg-app_color_3 text-app_color_6 dark:bg-app_color_2 hover:bg-app_color_4 dark:hover:bg-app_color_6 dark:text-app_color_3 transition-all px-3 py-1 mx-[2px] cursor-pointer rounded-sm text-[13px]
                        ${task.isDone ? '!bg-green-700 !text-gray-200 hover:!bg-green-600' : ''}
                        `}
                    >
                        {compareDates(task.startedAt, gregorian) && task.title}
                    </span>
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem onClick={() => handleClick(task)}>
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
                    <ContextMenuItem onClick={() => deleteTask(task)}>
                        <div className="flex items-center gap-1.5">
                            <GoXCircle />
                            <span>حذف تسک</span>
                        </div>
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </>
    )
}

export default TasksContextMenu;