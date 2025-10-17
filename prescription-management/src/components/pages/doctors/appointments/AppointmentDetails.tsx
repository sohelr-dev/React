import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { appointment } from "../../../interfaces/appointment.interfaces";
import appointmentDefault from "../../../interfaces/appointment.interfaces";
import api from "../../../../config";

function AppointmentDetails() {
  const [appointment, setAppointment] = useState<appointment>(appointmentDefault);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const { id: paramId } = useParams<string>();

  const getAppointmentById = () => {
    api.get(`details-appointment?id=${paramId}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setAppointment(res.data);
        } else {
          alert("Data not found!");
          navigate("/appointments");
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        alert("An error occurred while fetching the appointment data.");
        navigate("/appointments");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    document.title = "Appointment Details";
    getAppointmentById();
  }, []);

  const formattedDate = appointment.appointment_date
    ? new Date(appointment.appointment_date).toLocaleString()
    : "N/A";

  return (
    <>
      {/* ======= Breadcrumb Header ======= */}
      <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4 border">
        <div>
          <h2 className="fw-bold mb-1">Appointment Details</h2>
          <p className="text-muted mb-0">
            Comprehensive information about the selected appointment
          </p>
        </div>
        <Link to="/appointments" className="btn btn-primary fw-semibold">
          ← Back to List
        </Link>
      </div>

      {/* ======= Main Content ======= */}
      <div className="container py-3">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-secondary">Loading appointment data...</p>
          </div>
        ) : (
          <div className="row g-4">
            {/* ===== Patient Information ===== */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white d-flex align-items-center">
                  <i className="bi bi-person-circle me-2 fs-5"></i>
                  <h6 className="mb-0">Patient Information</h6>
                </div>
                <div className="card-body">
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <th style={{ width: "35%" }}>Name:</th>
                        <td>{appointment.patient_name}</td>
                      </tr>
                      <tr>
                        <th>Gender:</th>
                        <td>{appointment.gender}</td>
                      </tr>
                      <tr>
                        <th>Age:</th>
                        <td>{appointment.age}</td>
                      </tr>
                      <tr>
                        <th>Phone:</th>
                        <td>{appointment.phone}</td>
                      </tr>
                      <tr>
                        <th>Appointment Date:</th>
                        <td>{formattedDate}</td>
                      </tr>
                      <tr>
                        <th>Status:</th>
                        <td>
                          <span
                            className={`badge px-3 py-2 fs-6 ${appointment.status === "Confirmed"
                                ? "bg-success"
                                : appointment.status === "Pending"
                                  ? "bg-warning text-dark"
                                  : "bg-danger"
                              }`}
                          >
                            {appointment.status}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ===== Doctor Information ===== */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-success text-white d-flex align-items-center">
                  <i className="bi bi-person-badge me-2 fs-5"></i>
                  <h6 className="mb-0">Doctor Information</h6>
                </div>
                <div className="card-body">
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <th style={{ width: "35%" }}>Doctor Name:</th>
                        <td>{appointment.doctor_name}</td>
                      </tr>
                      <tr>
                        <th>Specialization:</th>
                        <td>{appointment.specialization}</td>
                      </tr>
                      <tr>
                        <th>Chamber:</th>
                        <td>{appointment.chamber_name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ===== Summary Section ===== */}
            <div className="col-12">
              <div className="alert alert-info border-0 shadow-sm">
                <strong>Note:</strong> This appointment is scheduled on{" "}
                <span className="fw-semibold">{formattedDate}</span> with{" "}
                <span className="fw-semibold">{appointment.doctor_name}</span> at{" "}
                <span className="fw-semibold">{appointment.chamber_name}</span>.
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AppointmentDetails;
