import { Route, Routes } from "react-router"
import { useAppDispatch } from "../../redux/reduxHooks"
import { setShowSidebar } from "../../redux/ui-management/uiManagement"
import Dashboard from "../../pages/dashboard/Dashboard"
import Tasks from "../../pages/tasks/Tasks"
import Categories from "../../pages/categories/Categories"

const Content = () => {
  
  const dispatch = useAppDispatch()
  return (
    <section
      id="content"
      className="fixed top-0 right-0 h-full w-full pt-app_header_h lg:pr-app_sidebar_w bg-gray-300 dark:bg-gray-700 transition-all"
      onClick={() => dispatch(setShowSidebar(false))}
    >
      <div className="h-full w-full overflow-y-auto p-4">
        <Routes>
          <Route element={<Dashboard/>} path="/" />
          <Route element={<Categories/>} path="/categories" />
          <Route element={<Tasks/>} path="/tasks" />
        </Routes>
      </div>
    </section>
  )
}

export default Content