function Dashboard() {
  return (
    <div className="pc-container">
      <div className="pc-content">
        {/* Breadcrumb */}
        <div className="page-header mb-4">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="page-header-title">
                  <h5 className="mb-1">Home</h5>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="./dashboard/index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="#!">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard cards */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="text-muted mb-2">Total Page Views</h6>
                <h4 className="mb-3">
                  4,42,236 <span className="badge bg-light-primary border border-primary"><i className="ti ti-trending-up"></i> 59.3%</span>
                </h4>
                <p className="text-muted mb-0 text-sm">
                  You made an extra <span className="text-primary">35,000</span> this year
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="text-muted mb-2">Total Users</h6>
                <h4 className="mb-3">
                  78,250 <span className="badge bg-light-success border border-success"><i className="ti ti-trending-up"></i> 70.5%</span>
                </h4>
                <p className="text-muted mb-0 text-sm">
                  You made an extra <span className="text-success">8,900</span> this year
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="text-muted mb-2">Total Order</h6>
                <h4 className="mb-3">
                  18,800 <span className="badge bg-light-warning border border-warning"><i className="ti ti-trending-down"></i> 27.4%</span>
                </h4>
                <p className="text-muted mb-0 text-sm">
                  You made an extra <span className="text-warning">1,943</span> this year
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="text-muted mb-2">Total Sales</h6>
                <h4 className="mb-3">
                  $35,078 <span className="badge bg-light-danger border border-danger"><i className="ti ti-trending-down"></i> 27.4%</span>
                </h4>
                <p className="text-muted mb-0 text-sm">
                  You made an extra <span className="text-danger">$20,395</span> this year
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts + Income Overview */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-xl-8">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Unique Visitor</h5>
              <ul className="nav nav-pills mb-0" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="chart-tab-home-tab" data-bs-toggle="pill"
                          data-bs-target="#chart-tab-home" type="button" role="tab" aria-controls="chart-tab-home"
                          aria-selected="true">Month</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="chart-tab-profile-tab"
                          data-bs-toggle="pill" data-bs-target="#chart-tab-profile" type="button"
                          role="tab" aria-controls="chart-tab-profile" aria-selected="false">Week</button>
                </li>
              </ul>
            </div>
            <div className="card h-100">
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane fade" id="chart-tab-home" role="tabpanel">
                    <div id="visitor-chart-1" style={{ minHeight: '200px' }}></div>
                  </div>
                  <div className="tab-pane fade show active" id="chart-tab-profile" role="tabpanel">
                    <div id="visitor-chart" style={{ minHeight: '200px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-4">
            <h5 className="mb-3">Income Overview</h5>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h6 className="text-muted mb-2">This Week Statistics</h6>
                <h3 className="mb-3">$7,650</h3>
                <div id="income-overview-chart" style={{ flex: 1, minHeight: '150px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders + Analytics */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-xl-8">
            <h5 className="mb-3">Recent Orders</h5>
            <div className="card h-100">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-borderless mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>TRACKING NO.</th>
                        <th>PRODUCT NAME</th>
                        <th>TOTAL ORDER</th>
                        <th>STATUS</th>
                        <th className="text-end">TOTAL AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* You can map through data instead of static rows */}
                      <tr>
                        <td><a href="#!" className="text-muted">84564564</a></td>
                        <td>Camera Lens</td>
                        <td>40</td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <i className="fas fa-circle text-danger small"></i> Rejected
                          </span>
                        </td>
                        <td className="text-end">$40,570</td>
                      </tr>
                      <tr>
                        <td><a href="#!" className="text-muted">84564564</a></td>
                        <td>Laptop</td>
                        <td>300</td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <i className="fas fa-circle text-warning small"></i> Pending
                          </span>
                        </td>
                        <td className="text-end">$180,139</td>
                      </tr>
                      <tr>
                        <td><a href="#!" className="text-muted">84564564</a></td>
                        <td>Mobile</td>
                        <td>355</td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <i className="fas fa-circle text-success small"></i> Approved
                          </span>
                        </td>
                        <td className="text-end">$180,139</td>
                      </tr>
                      {/* more rows */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-4">
            <h5 className="mb-3">Analytics Report</h5>
            <div className="card h-100">
              <div className="list-group list-group-flush">
                <a href="#!" className="list-group-item d-flex justify-content-between align-items-center">
                  Company Finance Growth <span className="h5 mb-0">+45.14%</span>
                </a>
                <a href="#!" className="list-group-item d-flex justify-content-between align-items-center">
                  Company Expenses Ratio <span className="h5 mb-0">0.58%</span>
                </a>
                <a href="#!" className="list-group-item d-flex justify-content-between align-items-center">
                  Business Risk Cases <span className="h5 mb-0">Low</span>
                </a>
              </div>
              <div className="card-body px-2">
                <div id="analytics-report-chart" style={{ minHeight: '150px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Report + Transaction History */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-xl-8">
            <h5 className="mb-3">Sales Report</h5>
            <div className="card h-100">
              <div className="card-body">
                <h6 className="text-muted mb-2">This Week Statistics</h6>
                <h3 className="mb-3">$7,650</h3>
                <div id="sales-report-chart" style={{ minHeight: '150px' }}></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-4">
            <h5 className="mb-3">Transaction History</h5>
            <div className="card h-100">
              <div className="list-group list-group-flush">
                <a href="#!" className="list-group-item">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <div className="avtar avtar-s rounded-circle text-success bg-light-success">
                        <i className="ti ti-gift f-18"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Order #002434</h6>
                      <p className="mb-0 text-muted">Today, 2:00 AM</p>
                    </div>
                    <div className="text-end ms-3">
                      <h6 className="mb-1">+ $1,430</h6>
                      <p className="mb-0 text-muted">78%</p>
                    </div>
                  </div>
                </a>
                <a href="#!" className="list-group-item">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <div className="avtar avtar-s rounded-circle text-primary bg-light-primary">
                        <i className="ti ti-message-circle f-18"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Order #984947</h6>
                      <p className="mb-0 text-muted">5 August, 1:45 PM</p>
                    </div>
                    <div className="text-end ms-3">
                      <h6 className="mb-1">- $302</h6>
                      <p className="mb-0 text-muted">8%</p>
                    </div>
                  </div>
                </a>
                <a href="#!" className="list-group-item">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <div className="avtar avtar-s rounded-circle text-danger bg-light-danger">
                        <i className="ti ti-settings f-18"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Order #988784</h6>
                      <p className="mb-0 text-muted">7 hours ago</p>
                    </div>
                    <div className="text-end ms-3">
                      <h6 className="mb-1">- $682</h6>
                      <p className="mb-0 text-muted">16%</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
