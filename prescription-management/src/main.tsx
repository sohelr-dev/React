import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Users from './components/pages/users/Users.tsx';
// import Dashboard from './components/pages/Dashboard.tsx';
import CreatePrescription from './components/pages/doctors/CreatePrescriptions.tsx';
import DoctorsDashboard from './components/pages/doctors/DoctorsDashboard.tsx';
import Page404 from './components/pages/Page404.tsx';
import PatientsList from './components/pages/doctors/patients/PatientsList.tsx';
import MedicalHistory from './components/pages/doctors/patients/MedicalHistory.tsx';
import TodayAppointment from './components/pages/doctors/appointments/TodayAppointment.tsx';
import Upcoming from './components/pages/doctors/appointments/Upcoming.tsx';
import DoctorAppointmentHistory from './components/pages/doctors/appointments/DoctorAppointmentHistory.tsx';
import DoctorMedicine from './components/pages/doctors/DoctorMedicine.tsx';
import Tests from './components/pages/doctors/Tests.tsx';
import DoctorPrescriptionHistory from './components/pages/doctors/DoctorPrescriptionHistory.tsx';
import CreateUser from './components/pages/users/createUser.tsx';

const AppRouter =createBrowserRouter([
  {path:"/" ,element:<App/>,
    children:[
      {path:"/dashboard" ,element: <DoctorsDashboard/>},
      {path:"/users" ,element: <Users/>},
      {path:"/create-user" ,element: <CreateUser/>},
      {path:"/createPrescription" ,element: <CreatePrescription/>},
      {path:"/patients/patient-list" ,element: <PatientsList/>},
      {path:"/patients/patient-medical-history" ,element: <MedicalHistory/>},
      {path:"/appointments/today" ,element: <TodayAppointment/>},
      {path:"/appointments/upcoming" ,element: <Upcoming/>},
      {path:"/appointments/history" ,element: <DoctorAppointmentHistory/>},
      {path:"/medicines" ,element: <DoctorMedicine/>},
      {path:"/tests" ,element: <Tests/>},
      {path:"/prescription-history" ,element: <DoctorPrescriptionHistory/>},
    ]
  },
  {path:'/*' ,element: <Page404/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>,
)
