import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { setShowSidebar, toggleTheme } from "../../redux/ui-management/uiManagement"

const Header = () => {
  const { showSidebar } = useAppSelector(state => state.uiManagerReducer)
  const { theme } = useAppSelector(state => state.uiManagerReducer)

  const dispatch = useAppDispatch()

  return (
    <section id="header" className="fixed top-0 right-0 h-app_header_h w-full bg-gray-300 dark:bg-gray-800 pr-0 lg:pr-app_sidebar_w flex justify-between items-center transition-all shadow-lg">
      {
        !showSidebar ? (
          <button
            className="transition-all mx-3 my-4 block lg:hidden cursor-pointer text-gray-600 hover:text-gray-900"
            onClick={() => dispatch(setShowSidebar(true))}
          >
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </button>
        ) : (
          null
        )
      }
      <div className="text-center align-text-bottom">هدر</div>

      <button
        className="px-2 py-1 my-4 mx-2 bg-gray-900 dark:bg-gray-400 text-gray-300 dark:text-gray-900 rounded-2xl btn"
        onClick={() => dispatch(toggleTheme())}
      >
        {theme}
      </button>
    </section>
  )
}

export default Header