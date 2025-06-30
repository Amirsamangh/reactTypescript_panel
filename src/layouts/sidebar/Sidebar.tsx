import { IoMdClose } from "react-icons/io"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { setShowSidebar } from "../../redux/ui-management/uiManagement"
import SidebarItem from "./SidebarItem"
import { RiHomeLine } from "react-icons/ri"
import { BiCategory } from "react-icons/bi"
import { MdOutlineTaskAlt } from "react-icons/md"

const Sidebar = () => {
  const { showSidebar } = useAppSelector(stete => stete.uiManagerReducer)
  const dispatch = useAppDispatch()

  return (
    <section
      id="sidebar"
      className={`p-3 fixed top-0 lg:right-0 h-screen w-app_sidebar_w bg-gray-400 dark:bg-gray-800 border-l border-gray-600 dark:border-gray-200 lg:block transition-all shadow-lg
         ${showSidebar ? 'right-0' : '-right-app_sidebar_w'}`}
    >
      <div className="h-full w-full">
        <button className="hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer block lg:hidden transition-all" onClick={() => dispatch(setShowSidebar(false))}>
          <IoMdClose size={22} />
        </button>
        <ul className="space-y-4 text-black dark:text-gray-300">
          <SidebarItem title="داشبورد" Icon={RiHomeLine} />
          <SidebarItem title="دسته بندی" Icon={BiCategory} />
          <SidebarItem title="تسک ها" Icon={MdOutlineTaskAlt} />
        </ul>
      </div>
    </section>
  )
}

export default Sidebar