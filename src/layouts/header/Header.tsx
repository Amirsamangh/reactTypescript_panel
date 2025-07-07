import { BsFillMoonFill } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { setShowSidebar, toggleTheme } from "../../redux/ui-management/uiManagement"
import { PiSunFill } from "react-icons/pi"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {

  const { showSidebar } = useAppSelector(state => state.uiManagerReducer)
  const { theme } = useAppSelector(state => state.uiManagerReducer)

  const dispatch = useAppDispatch()

  return (
    <section id="header" className="fixed top-0 right-0 h-app_header_h w-full bg-app_color_1 dark:bg-app_color_3 px-5 flex justify-between items-center transition-all shadow-lg">
      {
        !showSidebar ? (
          <button
            className="transition-all mx-3 my-4 block lg:hidden cursor-pointer text-gray-600 hover:text-gray-900"
            onClick={() => dispatch(setShowSidebar(true))}
          >
            <span className="dark:text-app_color_2">
            <GiHamburgerMenu size={22} />
            </span>
          </button>
        ) : (
          null
        )
      }
      <div className="text-center align-text-bottom">پنل ادمین</div>

      <button
        className={`py-1 mx-2 dark:text-app_color_1 text-app_color_4 rounded-4xl cursor-pointer transition-all duration-300 hover:scale-125 ${theme == 'light' ? 'rotate-[100deg]' : null}`}
        onClick={() => dispatch(toggleTheme())}
      >
        {theme == 'dark' ? (<BsFillMoonFill size={22} />) : (<PiSunFill size={22} />)}
      </button>
    </section>
  )
}

export default Header