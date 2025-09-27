import './sidebar.css'
import Profile from '../../assets/img/sohel.jpg'
import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <>
            <input type="checkbox" id="sidebar-toggle" className='d-none' />
            <label htmlFor="sidebar-toggle" className="bg-layer"></label>

            <div id='sidebar'>
                <span className='fs-2 d-md-none ' id='close-btn'><label htmlFor='sidebar-toggle'><i className="fa-regular fa-circle-left fa-beat-fade"></i></label></span>

                <h4 className='text-center'>SOHEL ADMIN</h4>
                <div className="text-center mb-4">
                    <img src={Profile} width={80} height={80} className='rounded-circle' />
                    <h5 className='mt-2 mb-0'>Sohel Rana</h5>
                    <small className='text-light'>Admin</small>
                </div>
                <nav className='navber'>
                    <ul className="nav flex-column">
                        <li className="nav-item active">
                            <Link to="/dashboard" className="nav-link  trans text-light link-navbar">
                                <i className="fa-regular fa-chart-bar fa-fade me-2"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/users" className="nav-link  trans text-light link-navbar">
                                <i className="fa-regular fa-user fa-fade me-2"></i>
                                Users
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
