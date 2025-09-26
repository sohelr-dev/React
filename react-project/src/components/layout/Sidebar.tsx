function Sidebar() {
    return (
        <>
            {/* Loader */}
            <div className="loader-bg d-none d-md-block">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>

            {/* Toggle Button for Small Screens */}
            <button className="btn btn-primary d-md-none m-2 sidebarMenu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                ☰ Menu
            </button>

            {/* Offcanvas Sidebar for Mobile */}
            <div className="offcanvas  offcanvas-start d-md-none" tab-Index={-1} id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasSidebarLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0">
                    {renderSidebarContent()}
                </div>
            </div>

            {/* Static Sidebar for Desktop */}
            <nav className="pc-sidebar d-none d-md-block">
                <div className="navbar-wrapper">
                    {renderSidebarContent()}
                </div>
            </nav>
        </>
    );
}

function renderSidebarContent() {
    return (
        <div className="navbar-content">
            <div className="m-header p-3 text-center">
                <a href="./dashboard/index.html" className="b-brand text-primary">
                    <img src="./assets/images/logo-dark.svg" className="img-fluid logo-lg" alt="logo" />
                </a>
            </div>

            <ul className="nav flex-column">
                <li className="nav-item">
                    <a href="./dashboard/index.html" className="nav-link">
                        <i className="ti ti-dashboard me-2"></i> Dashboard
                    </a>
                </li>

                <li className="nav-item text-muted px-3 mt-3">UI Components</li>
                <li className="nav-item">
                    <a href="./elements/bc_typography.html" className="nav-link">
                        <i className="ti ti-typography me-2"></i> Typography
                    </a>
                </li>
                <li className="nav-item">
                    <a href="./elements/bc_color.html" className="nav-link">
                        <i className="ti ti-color-swatch me-2"></i> Color
                    </a>
                </li>
                <li className="nav-item">
                    <a href="./elements/icon-tabler.html" className="nav-link">
                        <i className="ti ti-plant-2 me-2"></i> Icons
                    </a>
                </li>

                <li className="nav-item text-muted px-3 mt-3">Pages</li>
                <li className="nav-item">
                    <a href="./pages/login.html" className="nav-link">
                        <i className="ti ti-lock me-2"></i> Login
                    </a>
                </li>
                <li className="nav-item">
                    <a href="./pages/register.html" className="nav-link">
                        <i className="ti ti-user-plus me-2"></i> Register
                    </a>
                </li>

                <li className="nav-item text-muted px-3 mt-3">Other</li>
                <li className="nav-item">
                    <a href="./other/sample-page.html" className="nav-link">
                        <i className="ti ti-brand-chrome me-2"></i> Sample Page
                    </a>
                </li>
            </ul>

            <div className="card text-center m-3">
                <div className="card-body">
                    <img src="./assets/images/img-navbar-card.png" alt="images" className="img-fluid mb-2" />
                    <h5>Upgrade To Pro</h5>
                    <p>To get more features and components</p>
                    <a href="https://codedthemes.com/item/berry-bootstrap-5-admin-template/" target="_blank"
                        className="btn btn-success btn-sm">Buy Now</a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
