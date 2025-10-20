import "./PrescriptionLayout.css"

export default function PrescriptionLayout() {
  return (
    <div className="container-fluid p-4 prescription-container">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold text-primary">Prescription</h4>
        <div className="text-end">
          <small className="text-muted">Date: 20 Oct 2025</small>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="card mb-3 shadow-sm border-0">
        <div className="card-body">
          <h6 className="fw-bold text-secondary border-bottom pb-2 mb-2">
            Doctor Details
          </h6>
          <p className="mb-0"><strong>Name:</strong> Dr. Sohel Rana</p>
          <p className="mb-0"><strong>Qualification:</strong> MBBS, FCPS</p>
          <p className="mb-0"><strong>BMDC No:</strong> 12345</p>
        </div>
      </div>

      {/* Patient Details */}
      <div className="card mb-3 shadow-sm border-0">
        <div className="card-body">
          <h6 className="fw-bold text-secondary border-bottom pb-2 mb-2">
            Patient Details
          </h6>
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0"><strong>Name:</strong> John Doe</p>
              <p className="mb-0"><strong>Age:</strong> 35</p>
            </div>
            <div className="col-md-6">
              <p className="mb-0"><strong>Gender:</strong> Male</p>
              <p className="mb-0"><strong>Contact:</strong> +8801XXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="row">
        {/* Left Column */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h6 className="fw-bold border-bottom pb-2">Diagnosis</h6>
              <ul className="mb-3">
                <li>Fever</li>
                <li>Cough</li>
              </ul>

              <h6 className="fw-bold border-bottom pb-2">Tests</h6>
              <ul>
                <li>Blood Test</li>
                <li>Chest X-ray</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-8 mb-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <h5 className="fw-bold text-primary me-2">Rx</h5>
              </div>

              <div className="table-responsive">
                <table className="table table-bordered table-hover table-sm mb-3">
                  <thead className="table-light">
                    <tr>
                      <th>Medicine Name</th>
                      <th>Dosage</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Paracetamol 500mg</td>
                      <td>1+1+1</td>
                      <td>5 days</td>
                    </tr>
                    <tr>
                      <td>Azithromycin 250mg</td>
                      <td>1+0+1</td>
                      <td>3 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-3">
                <h6 className="fw-bold border-bottom pb-2">Advice</h6>
                <p className="mb-1">Drink plenty of water</p>
                <p className="mb-1">Take rest</p>
              </div>

              <div className="mt-3">
                <h6 className="fw-bold border-bottom pb-2">Note</h6>
                <p className="text-muted">Follow up after 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
