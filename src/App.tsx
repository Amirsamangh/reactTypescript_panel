// import { useState } from "react"
// import { ToastContainer } from "react-toastify"
import AppContainer from "./components/containers/AppContainer"
import Content from "./layouts/content/Content"
import Header from "./layouts/header/Header"
import Sidebar from "./layouts/sidebar/Sidebar"
import { Toaster } from "sonner"
import { useAppSelector } from "./redux/reduxHooks"

function App() {
  const { theme } = useAppSelector(state => state.uiManagerReducer)
  

  return (
    <AppContainer>
      {/* <ToastContainer stacked /> */}
      <div className="dark:text-app_color_2 text-app_color_5">
        <Toaster position="top-right" theme={theme} />

        <Content />
        <Header />
        <Sidebar />
      </div>
    </AppContainer>
  )
}

export default App
