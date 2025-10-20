import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../../../config";

interface PrescriptionDetailsData {
  prescription_id: number;
  diagnosis: string;
  advice: string;
  notes: string;
  follow_up_date: string;
  created_at: string;

  doctor: {
    id: string;
    name: string;
    specialization: string;
    chamber_name: string;
    chamber_address: string;
    bmdc_reg_no: string;
  };

  patient: {
    id: string;
    name: string;
    age: string;
    gender: string;
    phone: string;
    address: string;
  };

  appointment: {
    date: string;
    status: string;
  };

  medicines: {
    name: string;
    generic_name: string;
    dosage: string;
    duration: string;
    instruction: string;
  }[];

  tests: {
    name: string;
    description: string;
  }[];
}

function PrescriptionDetails() {
  const [prescription, setPrescription] = useState<PrescriptionDetailsData | null>(null);
  const { id: paramId } = useParams<string>();
  const navigate = useNavigate();

  const getDetailsById = () => {
    api.get(`prescription-details?id=${paramId}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setPrescription(response.data.data); // response.data.data based on your JSON
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        alert("Error fetching prescription data.");
        navigate("/prescriptions");
      });
  };

  useEffect(() => {
    document.title = "Prescription Details";
    getDetailsById();
  }, []);

  if (!prescription) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4 border">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb mb-0 fs-5">
      <li className="breadcrumb-item">
        <Link to="/prescriptions" className="text-primary text-decoration-none fw-semibold">
          Prescriptions
        </Link>
      </li>
      <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
        Prescription Details
      </li>
    </ol>
  </nav>

  <div>
    <button className="btn btn-outline-secondary me-2" onClick={() => window.print()}>
      🖨️ Print
    </button>
    <Link to="/prescriptions" className="btn btn-primary fw-semibold">
      ← Back
    </Link>
  </div>
</div>


      <div className="container-fluid p-4 prescription-container bg-primary bg-opacity-50">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold text-primary">Prescription</h4>
          <div className="text-end">
            <small className="text-muted">
              Date: {new Date(prescription.created_at).toLocaleDateString()}
            </small>
          </div>
        </div>

        {/* Doctor Details */}
        <div className="card mb-3 shadow-sm border-0">
          <div className="card-body">
            <h6 className="fw-bold text-secondary border-bottom pb-2 mb-2">Doctor Details</h6>
            <div className="row">
              <div className="col-md-6">
                <p className="mb-1"><strong>Name:</strong> {prescription.doctor.name}</p>
                <p className="mb-1"><strong>Specialization:</strong> {prescription.doctor.specialization}</p>
                <p className="mb-1"><strong>BMDC No:</strong> {prescription.doctor.bmdc_reg_no}</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1"><strong>Chamber:</strong> {prescription.doctor.chamber_name}</p>
                <p className="mb-1"><strong>Address:</strong> {prescription.doctor.chamber_address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Details */}
        <div className="card mb-3 shadow-sm border-0">
          <div className="card-body">
            <h6 className="fw-bold text-secondary border-bottom pb-2 mb-2">Patient Details</h6>
            <div className="row">
              <div className="col-md-6">
                <p className="mb-1"><strong>Name:</strong> {prescription.patient.name}</p>
                <p className="mb-1"><strong>Age:</strong> {prescription.patient.age}</p>
                <p className="mb-1"><strong>Gender:</strong> {prescription.patient.gender}</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1"><strong>Phone:</strong> {prescription.patient.phone}</p>
                <p className="mb-1"><strong>Address:</strong> {prescription.patient.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h6 className="fw-bold border-bottom pb-2">Chief Complaint</h6>
                <ul className="mb-3">
                  <li>{prescription.diagnosis}</li>
                </ul>

                <h6 className="fw-bold border-bottom pb-2">Tests</h6>
                <ul className="mb-0">
                  {prescription.tests.map((test, index) => (
                    <li key={index}>{test.name} - {test.description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-8 mb-3">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <h5 className="fw-bold text-primary me-2">Rx</h5>
                </div>

                {/* Medicines Table */}
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-sm">
                    <thead className="table-light">
                      <tr>
                        <th>Medicine Name</th>
                        <th>Generic</th>
                        <th>Dosage</th>
                        <th>Duration</th>
                        <th>Instruction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prescription.medicines.map((med, index) => (
                        <tr key={index}>
                          <td>{med.name}</td>
                          <td>{med.generic_name}</td>
                          <td>{med.dosage}</td>
                          <td>{med.duration}</td>
                          <td>{med.instruction}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Advice and Notes */}
                <div className="mt-4">
                  <h6 className="fw-bold border-bottom pb-2">Advice</h6>
                  <p>{prescription.advice}</p>
                </div>

                <div className="mt-4">
                  <h6 className="fw-bold border-bottom pb-2">Note</h6>
                  <p className="text-muted">{prescription.notes}</p>
                </div>

               <div className="mt-4">
                    <h6 className="fw-bold text-secondary border-bottom pb-2">
                        Follow-up Date
                    </h6>
                    <div className="alert alert-info d-flex align-items-center mt-3 mb-0" role="alert">
                        <i className="bi bi-calendar-check me-2 fs-5"></i>
                        <div>
                        <span className="fw-semibold">
                            {new Date(prescription.follow_up_date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                            })}
                        </span>
                        <br />
                        <small className="text-muted">
                            (Next check-up appointment)
                        </small>
                        </div>
                    </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrescriptionDetails;
