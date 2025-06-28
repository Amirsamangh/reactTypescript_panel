
const Header = ({ setShowSidebar, showSidebar }: { setShowSidebar: () => void, showSidebar: boolean }) => {
  return (
    <section id="header" className="fixed top-0 right-0 h-app_header_h w-full bg-amber-500 lg:pr-app_sidebar_w">
      {
        !showSidebar ? (
          <button className="transition-all pt-2 px-4 my-2 bg-sky-500 hover:bg-sky-400 rounded-xl block lg:hidden" onClick={setShowSidebar}>نمایش</button>
        ) : (
          <div>هدر</div>
        )
      }
    </section>
  )
}

export default Header