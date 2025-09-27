import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import "../../assets/custom.css"
import { Outlet } from "react-router-dom"


function Layout() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="main w-100">
          <Topbar />
          <div className="container-fluid mt-2 ms-2 me-2">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout