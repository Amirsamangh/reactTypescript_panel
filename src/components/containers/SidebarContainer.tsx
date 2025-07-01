import type { ReactNode } from "react"
import { useAppSelector } from "../../redux/reduxHooks"

const SidebarContainer = ({children}: {children: ReactNode})=>{
    const { showSidebar } = useAppSelector(stete => stete.uiManagerReducer)

    return (
        <section
        id="sidebar"
        className={`px-3 pt-app_header_h fixed top-0 lg:right-0 h-screen w-app_sidebar_w bg-gray-200 dark:bg-gray-800  dark:border-gray-200 lg:block transition-all
           ${showSidebar ? 'right-0' : '-right-app_sidebar_w'}`}
      >
        {children}
      </section>
    )
}

export default SidebarContainer