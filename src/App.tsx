// import { useState } from "react"
import AppContainer from "./components/containers/AppContainer"
import Content from "./layouts/content/Content"
import Header from "./layouts/header/Header"
import Sidebar from "./layouts/sidebar/Sidebar"

function App() {

  return (
    <AppContainer>
      <div className="dark:text-gray-100">
        <Content />
        <Sidebar />
        <Header />
      </div>
    </AppContainer>
  )
}

export default App
