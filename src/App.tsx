// import { useState } from "react"
import Content from "./layouts/content/Content"
import Header from "./layouts/header/Header"
import Sidebar from "./layouts/sidebar/Sidebar"

function App() {
  // const [showSidebar , setShowSidebar] = useState(false)
  return (
    <>
      <Content />
      <Header />
      <Sidebar />
    </>
  )
}

export default App
