import { FaCalendarCheck, FaUserInjured, FaFilePrescription, FaSearch } from 'react-icons/fa'
import '../../../assets/custom.css'
import { Link } from 'react-router-dom'
function DoctorsDashboard() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Doctor Dashboard</h2>

      {/* Info Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card card-hover shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center">
              <FaCalendarCheck className="me-3 text-primary fs-2" />
              <div>
                <h6>Today's Appointments</h6>
                <h5>8</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-hover shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center">
              <FaUserInjured className="me-3 text-success fs-2" />
              <div>
                <h6>Total Patients Seen</h6>
                <h5>130</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-hover shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center">
              <FaFilePrescription className="me-3 text-warning fs-2" />
              <div>
                <h6>Prescriptions Given</h6>
                <h5>104</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <div className="row g-4">
        {/* Search Patients */}
        <div className="col-md-6">
          <div className="card  p-3 shadow-sm border-0">
            <h6><FaSearch className="me-2" />Search Patients</h6>
            <input type="text" className="form-control mt-2" placeholder="Enter patient name or ID" />
          </div>
        </div>

        {/* Quick Create Prescription */}
        <div className="col-md-6">
          <div className="card  p-3 shadow-sm border-0 d-flex flex-column justify-content-between">
            <h6>🩺 Create New Prescription</h6>
            <Link to={'/createPrescription'} className="btn btn-primary mt-3 w-50">Create</Link>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="card  mt-4 shadow-sm border-0">
        <div className="card-header bg-dark text-light bg-opacity-75">
          <h6 className="mb-0">Upcoming Appointments</h6>
        </div>
        <div className="card-body p-2">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <span>Patient: Rafiq Islam</span><span>3:00 PM</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Patient: Salma Khatun</span><span>3:30 PM</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Patient: Mahmud Hasan</span><span>4:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default DoctorsDashboard
