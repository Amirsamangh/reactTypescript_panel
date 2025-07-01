import { IoMdClose } from "react-icons/io"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { setShowSidebar } from "../../redux/ui-management/uiManagement"
import SidebarItem from "./SidebarItem"
import { RiHomeLine } from "react-icons/ri"
import { BiCategory } from "react-icons/bi"
import { MdOutlineTaskAlt } from "react-icons/md"
import SidebarContainer from "../../components/containers/SidebarContainer"

const Sidebar = () => {

  const dispatch = useAppDispatch()

  return (
    <SidebarContainer>
      <div className="h-full w-full">
        <div className="w-full flex justify-end">
          <button className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400 cursor-pointer block lg:hidden transition-all duration-[0.1s] mt-4" onClick={() => dispatch(setShowSidebar(false))}>
            <IoMdClose size={22} />
          </button>
        </div>
        <ul className="space-y-4 text-black dark:text-gray-300">
          <SidebarItem title="داشبورد" Icon={RiHomeLine} linkTo={'/'} />
          <SidebarItem title="دسته بندی" Icon={BiCategory} linkTo={'/categories'} />
          <SidebarItem title="تسک ها" Icon={MdOutlineTaskAlt} linkTo={'/tasks'} />
        </ul>
      </div>
    </SidebarContainer>

  )
}

export default Sidebar