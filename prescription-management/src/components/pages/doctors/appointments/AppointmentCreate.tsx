import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../config";
import type { appointment } from "../../../interfaces/appointment.interfaces";
import type { doctor } from "../../../interfaces/doctor.interfaces";
import appointmentDefault from "../../../interfaces/appointment.interfaces";

function AppointmentCreate() {
  const navigate = useNavigate();

  // Appointment state with all fields
  const [appointment, setAppointment] = useState<appointment>(appointmentDefault);

  const [loading, setLoading] = useState<boolean>(false);

  // Patients & Doctors
  const [doctors, setDoctors] = useState<doctor[]>([]);

  useEffect(() => {
    document.title = "Create Appointment";
    getDoctors();
  }, []);


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
    // console.log(appointment['gender']);

    api
      .post("create-appointment", appointment)
      .then((res) => {
        // console.log(res.data);
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
                <input type="text" name="name" className="form-control"
                value={appointment.name||""}
                onChange={(e)=>setAppointment(prev=>({...prev,name:e.target.value}))}
                />
              </div>
              <input type="hidden" name="role_id" value={appointment.role_id} onChange={(e)=>setAppointment(prev=>({...prev,role_id:parseInt(e.target.value)}))} />
              <div className="col-md-6">
                <label className="form-label fw-semibold">Phone Number</label>
                <input type="text" name="phone" className="form-control"
                value={appointment.phone||""}
                onChange={(e)=>setAppointment(prev=>({...prev,phone:e.target.value}))}
                />
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

              {/* gender */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Gender</label>
                <select name="gender" className="form-select"
                value={appointment.gender||""} onChange={(e)=>setAppointment(prev=>({...prev,gender:e.target.value}))}>
                  <option value="">Select One</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
               
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Age</label>
                <input type="number" step={0} name="age" className="form-control"
                value={appointment.age} onChange={(e)=>setAppointment(prev=>({...prev,age:parseInt(e.target.value)}))}/>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Address</label>
                <textarea className="form-control" name="address" value={appointment.address} onChange={(e)=>setAppointment(prev=>({...prev,address:e.target.value}))} ></textarea>
                
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
                      | "offline"
                      | "pending"
                      | "confirmed"
                      | "completed"
                      | "cancelled"
                    }))
                  }
                  required
                >
                  <option value="pending">Offline</option>
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
