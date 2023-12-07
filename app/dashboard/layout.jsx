import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"

function Layout({children}) {
  return (
    <div>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default Layout