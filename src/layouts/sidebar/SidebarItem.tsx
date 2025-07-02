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
                    `flex items-center mt-3 gap-3 py-2 bg-app_color_3 hover:bg-app_color_4 dark:hover:text-app_color_4 text-app_color_1
                 dark:bg-app_color_2 dark:hover:bg-app_color_6 dark:text-app_color_4 rounded-md mr-3 pr-4 transition-all duration-[0.1s] 
                 ${isActive && 'bg-app_color_5 hover:bg-app_color_5 dark:bg-app_color_5 dark:text-white dark:hover:bg-app_color_5 dark:hover:text-white'}`
                }>
                <Icon size={22} />
                {title}
            </NavLink>
        </li>
    )
}

export default SidebarItem;