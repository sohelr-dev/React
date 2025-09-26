import React from 'react';
import './navbar.css';

type NavbarProps = {
  onSidebarToggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  return (
    <header className="app-header navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <div className="d-flex align-items-center">
        <button className="btn d-xl-none me-3" onClick={onSidebarToggle}>
          <i className="ti ti-menu-2 fs-5"></i>
        </button>

        <a className="navbar-brand d-none d-sm-block" href="/">
          <img src="assets/images/logos/logo.svg" alt="Logo" height="30" />
        </a>
      </div>

      <div className="ms-auto d-flex align-items-center">
        <div className="dropdown me-3">
          <button
            className="btn btn-icon position-relative"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-bell fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><h6 className="dropdown-header">Notifications</h6></li>
            <li><a className="dropdown-item" href="#">New message</a></li>
            <li><a className="dropdown-item" href="#">New task assigned</a></li>
            <li><a className="dropdown-item" href="#">System update</a></li>
          </ul>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="assets/images/profile/user-1.jpg"
              className="rounded-circle"
              width="35"
              height="35"
              alt="user"
            />
            <span className="d-none d-md-inline">John</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#"><i className="ti ti-user me-2"></i>Profile</a></li>
            <li><a className="dropdown-item" href="#"><i className="ti ti-settings me-2"></i>Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-danger" href="#"><i className="ti ti-logout me-2"></i>Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
