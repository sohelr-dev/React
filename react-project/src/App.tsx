import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Sidebar from './components/layout/Sidebar'
import Navber from './components/layout/Navber'
import Footer from './components/layout/Footer'
import './assets/custom.css'
import Dashboard from './components/pages/Dashboard'

function App() {
  return (
    <>
      <Sidebar/>
      <Navber/>
      {/* <Dashboard/> */}



      <Footer/>

    </>
  )
}

export default App
