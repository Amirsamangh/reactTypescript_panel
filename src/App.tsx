// import { useState } from "react"
import { ToastContainer } from "react-toastify"
import AppContainer from "./components/containers/AppContainer"
import Content from "./layouts/content/Content"
import Header from "./layouts/header/Header"
import Sidebar from "./layouts/sidebar/Sidebar"

function App() {

  return (
    <AppContainer>
      <ToastContainer stacked />
      <div className="dark:text-app_color_2 text-app_color_5">
        <Content />
        <Sidebar />
        <Header />
      </div>
    </AppContainer>
  )
}

export default App
