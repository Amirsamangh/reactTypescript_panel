import { useState } from "react"
import Content from "./layouts/content/Content"
import Header from "./layouts/header/Header"
import Sidebar from "./layouts/sidebar/Sidebar"

function App() {
  const [showSidebar , setShowSidebar] = useState(false)
  return (
    <>
      <Content />
      <Header setShowSidebar={()=>setShowSidebar(!showSidebar)} showSidebar={showSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={()=>setShowSidebar(false)} />
    </>
  )
}

export default App
