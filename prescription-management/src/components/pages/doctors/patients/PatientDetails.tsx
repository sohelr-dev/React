import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { patient } from "../../../interfaces/patient.interfaces";
import patientDefault from "../../../interfaces/patient.interfaces";
import api, { baseUrl } from "../../../../config";

function PatientDetails() {
  const [patient, setPatient] = useState<patient>(patientDefault);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const { id: paramId } = useParams<string>();

  const getPatientById = () => {
    api
      .get(`details-patient?id=${paramId}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setPatient(res.data);
          console.log(res);
        } else {
          alert("Data not found!");
          navigate("/patients");
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        alert("An error occurred while fetching the patient data.");
        navigate("/patients");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    document.title = "Details Patient";
    getPatientById();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4 border">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 fs-5">
            <li className="breadcrumb-item">
              <Link
                to="/patients"
                className="text-primary text-decoration-none fw-semibold"
              >
                Patients
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary fw-bold"
              aria-current="page"
            >
              Patient Details
            </li>
          </ol>
        </nav>
        <Link to="/patients" className="btn btn-primary fw-semibold">
          ← Back
        </Link>
      </div>

      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-header bg-dark text-white">
            <h5 className="mb-0">Patient Details</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-3 text-secondary">Loading patient data...</p>
                </div>
              ) : (
                <>
                  <div className="col-md-3 text-center mb-4">
                    <img
                      src={baseUrl + (patient.photo ?? "")}
                      alt="Image"
                      className="rounded-circle img-thumbnail"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-md-9 table-responsive">
                    <table className="table table-bordered table-striped mb-0">
                      <tbody>
                        <tr>
                          <th style={{ width: "30%" }}>Patient ID</th>
                          <td>{patient.id}</td>
                        </tr>
                        <tr>
                          <th>Name</th>
                          <td>{patient.name}</td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td>{patient.email}</td>
                        </tr>
                        <tr>
                          <th>Gender</th>
                          <td>
                            {patient.gender
                              ? patient.gender.charAt(0).toUpperCase() +
                                patient.gender.slice(1).toLowerCase()
                              : "N/A"}
                          </td>
                        </tr>

                        <tr>
                          <th>Age</th>
                          <td>{patient.age ?? "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Phone</th>
                          <td>{patient.phone ?? "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Address</th>
                          <td>{patient.address ?? "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Join Date</th>
                          <td>{patient.created_at ?? "N/A"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientDetails;
