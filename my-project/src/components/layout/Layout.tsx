import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './mainLayout.css';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="layout-wrapper d-flex">
      <Sidebar isSidebarOpen={sidebarOpen} />
      <div className="content-wrapper flex-grow-1">
        <Navbar onSidebarToggle={toggleSidebar} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
