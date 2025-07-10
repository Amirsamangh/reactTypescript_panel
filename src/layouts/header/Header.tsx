import { useAppDispatch } from "../../redux/reduxHooks"
import { setShowSidebar } from "../../redux/ui-management/uiManagement"
import { GiHamburgerMenu } from "react-icons/gi"
import { convertMiladiToJalali } from "@/utils/dateUtils"
import { FaCircle, FaRegBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {

  const dispatch = useAppDispatch()

  return (
    <section id="header" className="fixed top-0 right-0 md:pr-app_sidebar_w h-app_header_h w-full bg-app_color_1 dark:bg-app_color_3 px-5 items-center transition-all shadow-lg" onClick={() => dispatch(setShowSidebar(false))}>

      <div className="flex items-center justify-between h-full pl-2 pr-4" >
        <button
          className="transition-all mx-3 my-4 block md:hidden cursor-pointer text-gray-600 hover:text-gray-900"
          onClick={(e) => {
            dispatch(setShowSidebar(true))
            e.stopPropagation()
          }}>
          <span className="dark:text-app_color_2">
            <GiHamburgerMenu size={22} />
          </span>
        </button>
        <p className="text-app_color_3 dark:text-app_color_2 hidden md:block">{convertMiladiToJalali(undefined, 'dddd ، jD jMMMM jYYYY')}</p>
        <span className="flex items-center gap-3">
          <span className="relative text-app_color_4 dark:text-gray-200">
            <FaRegBell className="text-2xl cursor-pointer" />
            <FaCircle className="absolute text-[6px] top-0 right-0 text-rose-400 animate-caret-blink" />
          </span>
          <span className="text-app_color_4 dark:text-gray-200">
            <FaRegUserCircle className="text-2xl cursor-pointer" />
          </span>
          <p className="text-app_color_3 dark:text-app_color_2 text-[13px]">امیرسامان قره چاهی</p>
        </span>
      </div>
    </section>
  )
}

export default Header