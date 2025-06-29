// import { useState } from "react"
import Content from "./layouts/content/Content"
import Header from "./layouts/header/Header"
import Sidebar from "./layouts/sidebar/Sidebar"
import { useAppSelector } from "./redux/reduxHooks"

function App() {
  const { theme } = useAppSelector(state => state.uiManagerReducer)

  return (
    <main className={theme}>
      <div className="dark:text-gray-100">
        <Content />
        <Header />
        <Sidebar />
      </div>
    </main>
  )
}

export default App
