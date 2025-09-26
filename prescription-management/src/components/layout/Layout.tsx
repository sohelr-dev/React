import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import "../../assets/custom.css"


function Layout() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="main w-100">
          <Topbar />
          <div className="container">
            <h1>Hello Bangladesh</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout