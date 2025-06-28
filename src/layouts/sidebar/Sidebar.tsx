
const Sidebar = ({ showSidebar , setShowSidebar }: { showSidebar: boolean , setShowSidebar: ()=>void }) => {
  return (
    <section id="sidebar" className={`fixed top-0 lg:right-0 h-screen w-app_sidebar_w bg-green-500 md:block transition-all ${showSidebar ? 'right-0' : '-right-app_sidebar_w'}`}>
      <button className="m-2 text-gray-700 hover:text-gray-950 cursor-pointer block lg:hidden" onClick={setShowSidebar}>&#10006;</button>
    </section>
  )
}

export default Sidebar