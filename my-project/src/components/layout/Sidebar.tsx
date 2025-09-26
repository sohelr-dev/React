import React from 'react';
import './sidebar.css';

type SidebarProps = {
  isSidebarOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <aside className={`sidebar bg-light ${isSidebarOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header px-3 py-2 border-bottom">
        <img src="assets/images/logos/logo.svg" alt="Logo" height={30} />
      </div>
      <ul className="nav flex-column p-3">
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="ti ti-dashboard me-2"></i> Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="ti ti-users me-2"></i> Users</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
