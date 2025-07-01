import type { IconType } from "react-icons"
import { NavLink, type To } from "react-router"

type SidebarItemType = {
    title: string
    Icon: IconType
    linkTo: To
}

const SidebarItem = ({ title, Icon, linkTo }: SidebarItemType) => {

    return (
        <li>
            <NavLink
                to={linkTo}
                className={({ isActive }) =>
                    `flex items-center mt-3 gap-3 py-2 hover:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-500 dark:hover:text-gray-900 rounded-md mr-3 pr-4 transition-all duration-[0.1s] ${isActive && 'bg-gray-900 text-gray-200 hover:bg-gray-900 dark:bg-gray-400 dark:text-gray-900 dark:hover:bg-gray-400'}`
                }>
                <Icon size={22} />
                {title}
            </NavLink>
        </li>
    )
}

export default SidebarItem;