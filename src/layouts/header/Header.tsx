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
    <section id="header" className="fixed top-0 lg:mx-3 right-0 h-app_header_h w-full bg-gray-400 dark:bg-gray-800 pr-0 lg:pr-app_sidebar_w flex justify-between items-center transition-all shadow-lg">
      {
        !showSidebar ? (
          <button
            className="transition-all mx-3 my-4 block lg:hidden cursor-pointer text-gray-600 hover:text-gray-900"
            onClick={() => dispatch(setShowSidebar(true))}
          >
            <span>
            <GiHamburgerMenu size={22} />
            </span>
          </button>
        ) : (
          null
        )
      }
      <div className="text-center align-text-bottom">هدر</div>

      <button
        className={`px-3 py-1 my-4 mx-2 dark:text-gray-300 text-gray-900 rounded-4xl cursor-pointer transition-all duration-500 ${theme == 'light' ? 'rotate-[100deg]' : null}`}
        onClick={() => dispatch(toggleTheme())}
      >
        {theme == 'dark' ? (<BsFillMoonFill size={22} />) : (<PiSunFill size={22} />)}
      </button>
    </section>
  )
}

export default Header