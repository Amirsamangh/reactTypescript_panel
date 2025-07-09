import SidebarItem from "./SidebarItem"
import { RiHomeLine } from "react-icons/ri"
import { BiCategory } from "react-icons/bi"
import { MdOutlineTaskAlt } from "react-icons/md"
import SidebarContainer from "../../components/containers/SidebarContainer"

import TopActionElements from "./TopActionElements"

const Sidebar = () => {

  return (
    <SidebarContainer>
      <div className="h-full w-full">
        <TopActionElements />
        <hr className="text-app_color_4 dark:text-app_color_1 my-5 border-b" />
        <ul className="space-y-4">
          <SidebarItem title="داشبورد" Icon={RiHomeLine} linkTo={'/'} />
          <SidebarItem title="دسته بندی" Icon={BiCategory} linkTo={'/categories'} />
          <SidebarItem title="تسک ها" Icon={MdOutlineTaskAlt} linkTo={'/tasks'} />
        </ul>
      </div>
    </SidebarContainer>

  )
}

export default Sidebar