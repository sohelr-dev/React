import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../config";
import type { appointment } from "../../../interfaces/appointment.interfaces";
import appointmentDefault from "../../../interfaces/appointment.interfaces";
import type { patient } from "../../../interfaces/patient.interfaces";
import type { doctor } from "../../../interfaces/doctor.interfaces";


function AppointmentCreate() {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState<appointment>(appointmentDefault);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Create Appointment";
    getPatients();
    getDoctor();
  }, []);

  //get patient
  const [patients, setPatients] = useState<patient[]>([]);
  const getPatients = () => {
    api.get("patients")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          // console.log(response.data);
          setPatients(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong !");
      })
  };
  //get doctors
  const [doctors, setDoctors] = useState<doctor[]>([]);
  const getDoctor = () => {
    api.get("doctors")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setDoctors(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong !");
      })
  };



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
      {/* ===== HEADER ===== */}
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

      {/* ===== FORM CARD ===== */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Patient ID */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Patient Name</label>
                <select name="patient_id" id="patient_id" className="form-select"
                  value={appointment.patient_id || ""}
                  onChange={(e) => setAppointment({ ...appointment, patient_id: parseInt(e.target.value) })}>
                  {
                    patients.map((item) =>
                      <option value={item.id} key={item.id}>{item.name}</option>
                    )
                  }
                </select>
              </div>

              {/* Doctor ID */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Doctor Name</label>
                <select name="doctor_id" id="doctor_id" className="form-select"
                  value={appointment.doctor_id || ""}
                  onChange={(e) => setAppointment({ ...appointment, doctor_id: parseInt(e.target.value) })}>
                  {
                    doctors.map((itemD) =>
                      <option value={itemD.id} key={itemD.id}>{itemD.name}</option>
                    )
                  }
                </select>
              </div>

              {/* Appointment Date */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Appointment Date</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="appointment_date"
                  value={appointment.appointment_date || ""}
                  onChange={(e)=>setAppointment({...appointment,appointment_date:e.target.value})}
                  required
                />
              </div>

              {/* Status */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={appointment.status || "pending"}
                  onChange={(e)=>setAppointment({...appointment,status: e.target.value as "pending" | "confirmed" | "completed" | "cancelled"})}
                  required
                >
                  <option value={"pending"}>Pending</option>
                  <option value={"confirmed"}>Confirmed</option>
                  <option value={"completed"}>Completed</option>
                  <option value={"cancelled"}>Cancelled</option>
                </select>
              </div>
            </div>

            {/* Submit */}
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