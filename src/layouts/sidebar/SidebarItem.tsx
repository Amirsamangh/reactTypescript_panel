import type { IconType } from "react-icons"

type SidebarItemType = {
    title: string
    Icon: IconType
}

const SidebarItem = ({ title, Icon }: SidebarItemType) => {
    return (
        <li>
            <a href="#" className="flex items-center mt-3 gap-3 hover:text-gray-200 hover:bg-gray-600 rounded-2xl mr-3 pr-4 active:bg-gray-60 transition-all duration-[0.1s]">
                <Icon size={22} />
                {title}
            </a>
        </li>
    )
}

export default SidebarItem;