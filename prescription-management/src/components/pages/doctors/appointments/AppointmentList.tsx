import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../config";
import type { appointment } from "../../../interfaces/appointment.interfaces";

function AppointmentList() {
  const [appointmentList, setAppointmentList] = useState<appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSerach] = useState("");

  const getAppointmentList = () => {
    setLoading(true);
    api
      .get("appointments")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setAppointmentList(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    document.title = "Appointment List";
    getAppointmentList();
  }, []);

  // Delete modal states
  const [appointmentId, setAppointmentId] = useState<number>(0);
  const handleModal = (id: number) => setAppointmentId(id);

  // Delete API call
  const handleDelete = (deleteId: number) => {
    api
      .delete(`delete-appointment?id=${deleteId}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("Appointment deleted successfully!");
          getAppointmentList();
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong while deleting!");
      });
  };

  //Search
  const handleSearch = () => {
    console.log(search);
    api
      .get(`appointments?search=${search}`)
      .then((res) => {
        // console.log(res);
        setAppointmentList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* ======= HEADER / BREADCRUMB ======= */}
      <div className="d-flex justify-content-between align-items-center bg-white shadow-sm rounded-3  mb-4 border">
        <div>
          <h2 className="fw-bold mb-1 text-primary">Appointments</h2>
          <p className="text-muted mb-0">
            Manage and review all scheduled appointments
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary">
            <i className="fa-solid fa-print me-2"></i>Print
          </button>
          <Link
            to="/appointments/create-appointment"
            className="btn btn-primary"
          >
            <i className="fa-solid fa-plus me-2"></i>New Appointment
          </Link>
        </div>
      </div>

      {/* ======= TABLE SECTION ======= */}
      <div className="container">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-semibold text-secondary mb-0">
                Appointment List
              </h5>
              <input
                type="text"
                className="form-control w-auto"
                placeholder="🔍 Search..."
                value={search}
                onChange={(e) => setSerach(e.target.value)}
                style={{ minWidth: "220px" }}
                onKeyUp={handleSearch}
              />
            </div>

            <div className="table-responsive">
              {loading ? (
                <div className="text-center py-5">
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                  <p className="mt-3 text-muted">Loading appointments...</p>
                </div>
              ) : (
                <table className="table table-hover align-middle">
                  <thead className="table-primary">
                    <tr className="text-center">
                      <th>#ID</th>
                      <th>Patient Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Doctor</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentList.length > 0 ? (
                      appointmentList.map((item) => (
                        <tr key={item.id} className="text-center">
                          <td className="fw-semibold text-secondary">
                            {item.id}
                          </td>
                          <td>{item.patient_name ?? "—"}</td>
                          <td>{item.age ?? "—"}</td>
                          <td>
                            {item.gender
                              ? item.gender.charAt(0).toUpperCase() +
                                item.gender.slice(1).toLowerCase()
                              : "—"}
                          </td>
                          <td>{item.doctor_name ?? "—"}</td>
                          <td>
                            <span
                              className={`badge px-3 py-2 ${
                                item.status === "confirmed"
                                  ? "bg-success"
                                  : item.status === "pending"
                                  ? "bg-warning text-dark"
                                  : "bg-secondary"
                              }`}
                            >
                              {item.status ?? "Unknown"}
                            </span>
                          </td>
                          <td>
                            {item.appointment_date
                              ? new Date(
                                  item.appointment_date
                                ).toLocaleDateString()
                              : "—"}
                          </td>
                          <td>
                            <div className="d-flex justify-content-center gap-2">
                              <Link
                                to={`/appointments/details-appointment/${item.id}`}
                                className="btn btn-outline-primary btn-sm"
                              >
                                <i className="fas fa-eye"></i>
                              </Link>
                              <Link
                                to={`/appointments/edit-appointment/${item.id}`}
                                className="btn btn-primary btn-sm"
                              >
                                <i className="fas fa-edit"></i>
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleModal(item.id)}
                                data-bs-toggle="modal"
                                data-bs-target="#modalDelete"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="text-center py-4 text-muted">
                          No appointments found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ======= DELETE MODAL ======= */}
      <div className="modal fade" id="modalDelete" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title">
                <i className="fa-solid fa-triangle-exclamation me-2"></i>
                Confirm Deletion
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body text-center py-4">
              <i className="fa-solid fa-trash fs-1 text-danger mb-3"></i>
              <p className="fs-5">
                Are you sure you want to delete Appointment ID{" "}
                <strong>#{appointmentId}</strong>?
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary px-4"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger px-4"
                data-bs-dismiss="modal"
                onClick={() => handleDelete(appointmentId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentList;
