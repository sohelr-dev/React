function Navber() {
  return (
    <header className="pc-header bg-white shadow-sm">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-2">
          {/* === Left Section (Toggle + Search) === */}
          <div className="d-flex align-items-center gap-2">
            {/* Sidebar toggle for desktop & mobile */}
            <button className="btn btn-sm btn-outline-primary d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation">
              <i className="ti ti-menu-2"></i>
            </button>

            {/* Search Icon (mobile) */}
            <div className="dropdown d-md-none">
              <a className="btn btn-sm" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="ti ti-search"></i>
              </a>
              <div className="dropdown-menu p-2">
                <input type="text" className="form-control" placeholder="Search..." />
              </div>
            </div>

            {/* Full search bar (desktop) */}
            <form className="d-none d-md-flex align-items-center">
              <i className="ti ti-search me-2"></i>
              <input type="text" className="form-control" placeholder="Search here..." />
            </form>
          </div>

          {/* === Right Section (Notifications + Profile) === */}
          <div className="d-flex align-items-center gap-3">
            {/* Notification Dropdown */}
            <div className="dropdown">
              <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="ti ti-mail"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end p-2 shadow" style={{ minWidth: '300px' }}>
                <h6 className="dropdown-header">Messages</h6>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item d-flex align-items-start gap-2" href="#">
                  <img src="./assets/images/user/avatar-2.jpg" className="rounded-circle" width="35" height="35" alt="avatar" />
                  <div>
                    <small className="text-muted float-end">3:00 AM</small>
                    <div><b>Cristina Danny’s</b> birthday today.</div>
                    <small className="text-muted">2 min ago</small>
                  </div>
                </a>
                {/* Repeat similar items... */}
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item text-center text-primary">View all</a>
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown">
              <a className="btn d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./assets/images/user/avatar-2.jpg" className="rounded-circle" width="35" height="35" alt="avatar" />
                <span className="d-none d-md-inline">Stebin Ben</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end p-2 shadow">
                <div className="d-flex align-items-center mb-2">
                  <img src="./assets/images/user/avatar-2.jpg" className="rounded-circle me-2" width="40" height="40" alt="avatar" />
                  <div>
                    <strong>Stebin Ben</strong>
                    <div className="text-muted small">UI/UX Designer</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#"><i className="ti ti-user me-2"></i> Profile</a>
                <a className="dropdown-item" href="#"><i className="ti ti-settings me-2"></i> Settings</a>
                <a className="dropdown-item text-danger" href="#"><i className="ti ti-power me-2"></i> Logout</a>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Mobile Menu */}
        <div className="collapse" id="mobileMenu">
          <div className="bg-light p-3 rounded">
            <a className="d-block py-1" href="#">Dashboard</a>
            <a className="d-block py-1" href="#">Typography</a>
            <a className="d-block py-1" href="#">Color</a>
            <a className="d-block py-1" href="#">Login</a>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navber;
