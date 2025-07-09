import type { ReactNode } from "react"
import { useAppSelector } from "../../redux/reduxHooks"

const SidebarContainer = ({children}: {children: ReactNode})=>{
    const { showSidebar } = useAppSelector(stete => stete.uiManagerReducer)

    return (
        <section
        id="sidebar"
        className={`px-3 fixed top-0 md:right-0 h-screen border-l border-app_color_input w-app_sidebar_w bg-app_color_1 dark:bg-app_color_3 md:block transition-all
           ${showSidebar ? 'right-0' : '-right-app_sidebar_w'}`}
      >
        {children}
      </section>
    )
}

export default SidebarContainer