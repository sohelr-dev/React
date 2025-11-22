import {
  FaCalendarCheck,
  FaUserInjured,
  FaFilePrescription,
  FaSearch,
} from "react-icons/fa";
import "../../../assets/custom.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../config";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";

interface TodayAppointment {
  today_appointment: number;
}
interface totalprescripts {
  total_prescriptions_last_6_months: number;
}
function DoctorsDashboard() {
  const [appointmentToday, setAppointmentToday] =useState<TodayAppointment []>([]);
  const [totalPres, setTotalPres] =useState<totalprescripts []>([]);
  const getTodayAppointment=()=>{
    api
    .get('appointments-today-list')
    .then((response)=>{
      console.log(response.data)
      if(response.status ===200 || response.status ===201){
        setAppointmentToday(response.data);
      }
    })

  }
  const getTotallPrescription=()=>{
    api
    .get('total-prescription')
    .then((response)=>{
      console.log(response.data)
      if(response.status ===200 || response.status ===201){
        setTotalPres(response.data);
      }
    })

  }
  useEffect(()=>{
    document.title="Dashboard";
    getTodayAppointment();
    getTotallPrescription();
  },[])

  const dailyData = [
  { day: "Sat", count: 22 },
  { day: "Sun", count: 14 },
  { day: "Mon", count: 30 },
  { day: "Tue", count: 18 },
  { day: "Wed", count: 26 },
  { day: "Thu", count: 32 },
  { day: "Fri", count: 20 },
  ];


  const medicineData = [
  { name: "Paracetamol", uses: 45 },
  { name: "Omeprazole", uses: 30 },
  { name: "Cetrizine", uses: 20 },
  { name: "Metformin", uses: 15 },
  { name: "Napa Extra", uses: 10 },
  ];


  const patientType = [
  { name: "New", value: 40 },
  { name: "Returning", value: 60 },
  ];


  return (
    <div className="container py-4 bg-body-tertiary">
      <h2 className="mb-4">Doctor Dashboard</h2>

      {/* Info Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card card-hover shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center">
              <FaCalendarCheck className="me-3 text-primary fs-2" />
              <div>
                <h6>Today's Appointments</h6>
                {
                  appointmentToday.map((item)=>(

                    <h5>
                      {item.today_appointment}
                    </h5>
                  )
                  )

                }
                
          
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
                <h5>150</h5>
                
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
                {
                  totalPres.map((item)=>(

                    <h5>
                      {item.total_prescriptions_last_6_months}
                    </h5>
                  )
                  )

                }
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
            <h6>
              <FaSearch className="me-2" />
              Search Patients
            </h6>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter patient name or ID"
            />
          </div>
        </div>

        {/* Quick Create Prescription */}
        <div className="col-md-6">
          <div className="card  p-3 shadow-sm border-0 d-flex flex-column justify-content-between">
            <h6>🩺 Create New Prescription</h6>
            <Link
              to={"/createPrescription"}
              className="btn btn-primary mt-3 w-50"
            >
              Create
            </Link>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-12 col-md-6 col-xl-4">
        <div className="card shadow-lg rounded-3">
          <div className="card-header">
            <h5 className="card-title mb-0">Daily Prescriptions</h5>
          </div>
          <div className="card-body" style={{ height: "250px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#4f46e5" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Medicines */}
      <div className="col-12 col-md-6 col-xl-4">
        <div className="card shadow-lg rounded-3">
          <div className="card-header">
            <h5 className="card-title mb-0">Top Prescribed Medicines</h5>
          </div>
          <div className="card-body" style={{ height: "250px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={medicineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uses" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Patient Type */}
      <div className="col-12 col-md-6 col-xl-4">
        <div className="card shadow-lg rounded-3">
          <div className="card-header">
            <h5 className="card-title mb-0">Patient Type Distribution</h5>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={patientType} dataKey="value" nameKey="name" outerRadius={90} label>
                  <Cell fill="#6366f1" />
                  <Cell fill="#f59e0b" />
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
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
              <span>Patient: Rafiq Islam</span>
              <span>3:00 PM</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Patient: Salma Khatun</span>
              <span>3:30 PM</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Patient: Mahmud Hasan</span>
              <span>4:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DoctorsDashboard;
