import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../../config";

import type { appointment } from "../../../interfaces/appointment.interfaces";
import appointmentDefault from "../../../interfaces/appointment.interfaces";

function AppointmentUpdate() {
  const navigate = useNavigate();
  const [appointmentId, setAppointmentId] =
    useState<appointment>(appointmentDefault);
  useEffect(() => {
    document.title = "Update Appointment";
    getAppointmentId();
  }, []);
  const queryId = useParams();
  const paramId = queryId?.id;
  // console.log(paramId)
  const getAppointmentId = () => {
    api.get(`details-appointment?id=${paramId}`).then((res) => {
      // console.log(res.data);
      setAppointmentId(res.data);
      // console.log(appointmentId);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .put("edit-appointment", appointmentId)
      .then((response) => {
        alert(response.data);
        navigate("/appointments");
      })
      .catch((error) => {
        alert("Something Went Wrong" + error);
      });
  };
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4"
        style={{ border: "1px solid #dee2e6" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 fs-5">
            <li className="breadcrumb-item">
              <Link
                to="/appointments"
                className="text-primary text-decoration-none fw-semibold"
              >
                Appointments
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary fw-bold"
              aria-current="page"
            >
              Update Appointment Status
            </li>
          </ol>
        </nav>
        <Link to="/appointments" className="btn btn-primary fw-semibold">
          ← Back
        </Link>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card mt-3 shadow-sm">
              <h5 className="card-header text-center fs-3">
                Update Appointment Status
              </h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="id"
                    id="id"
                    value={appointmentId.id}
                    onChange={(e) =>
                      setAppointmentId({
                        ...appointmentId,
                        id: parseInt(e.target.value),
                      })
                    }
                  />
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={appointmentId.status || "pending"}
                      onChange={(e) =>
                        setAppointmentId({
                          ...appointmentId,
                          status: e.target.value as
                            | "pending"
                            | "confirmed"
                            | "completed"
                            | "cancelled",
                        })
                      }
                      required
                    >
                      <option value={"pending"}>Pending</option>
                      <option value={"confirmed"}>Confirmed</option>
                      <option value={"completed"}>Completed</option>
                      <option value={"cancelled"}>Cancelled</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3 w-100">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentUpdate;
