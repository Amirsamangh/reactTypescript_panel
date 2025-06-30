import { useAppDispatch } from "../../redux/reduxHooks"
import { setShowSidebar } from "../../redux/ui-management/uiManagement"

const Content = () => {
  const dispatch = useAppDispatch()
  return (
    <section
      id="content"
      className="fixed top-0 right-0 h-full w-full pt-app_header_h lg:pr-app_sidebar_w bg-gray-300 dark:bg-gray-700 transition-all"
      onClick={()=>dispatch(setShowSidebar(false))}
    >
      محتوای اصلی
    </section>
  )
}

export default Content