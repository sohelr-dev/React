import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../config";
import type { appointment } from "../../../interfaces/appointment.interfaces";
import type { patient } from "../../../interfaces/patient.interfaces";
import type { doctor } from "../../../interfaces/doctor.interfaces";
import appointmentDefault from "../../../interfaces/appointment.interfaces";

function AppointmentCreate() {
  const navigate = useNavigate();

  // Appointment state with all fields
  const [appointment, setAppointment] = useState<appointment>(appointmentDefault);

  const [loading, setLoading] = useState<boolean>(false);

  // Patients & Doctors
  const [patients, setPatients] = useState<patient[]>([]);
  const [doctors, setDoctors] = useState<doctor[]>([]);

  useEffect(() => {
    document.title = "Create Appointment";
    getPatients();
    getDoctors();
  }, []);

  // Get Patients
  const getPatients = () => {
    api
      .get("patients")
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setPatients(res.data);
          if (res.data.length > 0 && appointment.patient_id === 0) {
            setAppointment(prev => ({ ...prev, patient_id: res.data[0].id }));
          }
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong while fetching patients!");
      });
  };

  // Get Doctors
  const getDoctors = () => {
    api
      .get("doctors")
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setDoctors(res.data);
          if (res.data.length > 0 && appointment.doctor_id === 0) {
            setAppointment(prev => ({ ...prev, doctor_id: res.data[0].id }));
          }
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong while fetching doctors!");
      });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    api
      .post("create-appointment", appointment)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert("Appointment created successfully!");
          navigate("/appointments");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to create appointment!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center bg-white shadow-sm rounded-3 p-3 mb-4 border">
        <div>
          <h2 className="fw-bold mb-1 text-primary">New Appointment</h2>
          <p className="text-muted mb-0">
            Fill the form below to schedule a new appointment
          </p>
        </div>
        <Link to="/appointments" className="btn btn-outline-primary">
          ← Back to List
        </Link>
      </div>

      {/* Form Card */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              {/* Patient Select */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Patient Name</label>
                <select
                  className="form-select"
                  value={appointment.patient_id || ""}
                  onChange={(e) =>
                    setAppointment(prev => ({
                      ...prev,
                      patient_id: parseInt(e.target.value),
                    }))
                  }
                  required
                >
                  <option value="">Select Patient</option>
                  {patients.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Doctor Select */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Doctor Name</label>
                <select
                  className="form-select"
                  value={appointment.doctor_id || ""}
                  onChange={(e) =>
                    setAppointment(prev => ({
                      ...prev,
                      doctor_id: parseInt(e.target.value),
                    }))
                  }
                  required
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Appointment Date */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Appointment Date</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  value={appointment.appointment_date || ""}
                  onChange={(e) =>
                    setAppointment(prev => ({
                      ...prev,
                      appointment_date: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              {/* Status */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Status</label>
                <select
                  className="form-select"
                  value={appointment.status || "pending"}
                  onChange={(e) =>
                    setAppointment(prev => ({
                      ...prev,
                      status: e.target.value as
                        | "pending"
                        | "confirmed"
                        | "completed"
                        | "cancelled",
                    }))
                  }
                  required
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

            </div>

            {/* Submit Button */}
            <div className="text-end mt-4">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 fw-semibold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Saving...
                  </>
                ) : (
                  "Save Appointment"
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default AppointmentCreate;
