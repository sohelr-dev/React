import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Users from './components/pages/users/Users.tsx';
import CreateUser from './components/pages/users/CreateUser.tsx';
// import Dashboard from './components/pages/Dashboard.tsx';
import CreatePrescription from './components/pages/doctors/CreatePrescriptions.tsx';
import DoctorsDashboard from './components/pages/doctors/DoctorsDashboard.tsx';
import Page404 from './components/pages/Page404.tsx';
import PatientsList from './components/pages/doctors/patients/PatientsList.tsx';
import MedicalHistory from './components/pages/doctors/patients/MedicalHistory.tsx';
import TodayAppointment from './components/pages/doctors/appointments/TodayAppointment.tsx';
import Upcoming from './components/pages/doctors/appointments/Upcoming.tsx';
import DoctorAppointmentHistory from './components/pages/doctors/appointments/DoctorAppointmentHistory.tsx';
import DoctorPrescriptionHistory from './components/pages/doctors/DoctorPrescriptionHistory.tsx';
import UpdateUser from './components/pages/users/UpdateUser.tsx';
import DetailsUser from './components/pages/users/DetailsUser.tsx';
import MedicineTypeList from './components/pages/doctors/medicine-types/MedicineTypeList.tsx';
import CreateMedicineType from './components/pages/doctors/medicine-types/CreateMedicineType.tsx';
import UpdateMedicineType from './components/pages/doctors/medicine-types/UpdateMedicineType.tsx';
//Tests
import Tests from './components/pages/doctors/tests/Tests.tsx';
import CreateTest from './components/pages/doctors/tests/CreateTest.tsx';
import UpdateTest from './components/pages/doctors/tests/UpdateTest.tsx';
//Roles
import Roles from './components/pages/doctors/roles/Roles.tsx';
import CreateRole from './components/pages/doctors/roles/CreateRole.tsx';
import UpdateRole from './components/pages/doctors/roles/UpdateRole.tsx';
import Medicines from './components/pages/doctors/medicines/Medicines.tsx';
import CreateMedicine from './components/pages/doctors/medicines/CreateMedicine.tsx';
import UpdateMedicine from './components/pages/doctors/medicines/UpdateMedicine.tsx';
import DetailsMedicine from './components/pages/doctors/medicines/DetailsMedicine.tsx';
import DoctorsManage from './components/pages/doctors/DoctorsManage.tsx';
import CreateDoctor from './components/pages/doctors/DoctorCreate.tsx';
import DoctorUpdate from './components/pages/doctors/DoctorUpdate.tsx';
import PatientDetails from './components/pages/doctors/patients/PatientDetails.tsx';
import PatientCreate from './components/pages/doctors/patients/PatientCreate.tsx';
import PatientUpdate from './components/pages/doctors/patients/PatientUpdate.tsx';
import AppointmentList from './components/pages/doctors/appointments/AppointmentList.tsx';
import AppointmentDetails from './components/pages/doctors/appointments/AppointmentDetails.tsx';
import AppointmentCreate from './components/pages/doctors/appointments/AppointmentCreate.tsx';
import AppointmentUpdate from './components/pages/doctors/appointments/AppointmentUpdate.tsx';
import DosagesList from './components/pages/doctors/medicines/dosages/DosagesList.tsx';
// import DurationsList from './components/pages/doctors/medicines/dosages/durationsList.tsx';
import CreateDosage from './components/pages/CreateDosage.tsx';
import DurationsList from './components/pages/doctors/medicines/dosages/DurationsList.tsx';





const AppRouter =createBrowserRouter([
  {path:"/" ,element:<App/>,
    children:[
      {path:"/dashboard" ,element: <DoctorsDashboard/>},
      //Users
      {path:"/users" ,element: <Users/>},
      {path:"/create-user" ,element: <CreateUser/>},
      {path:"/user/edit/:id" ,element: <UpdateUser/>},
      {path:"/user/details-user/:id" ,element: <DetailsUser/>},
      //Roles
      {path:"/roles" ,element: <Roles/>},
      {path:"/roles/create-role" ,element: <CreateRole/>},
      {path:"/roles/edit-role/:id" ,element: <UpdateRole/>},
      //medicine Type
      {path:"/medicine-types" ,element: <MedicineTypeList/>},
      {path:"/medicine-types/create-medicine-type" ,element: <CreateMedicineType/>},
      {path:"/medicine-types/edit-medicine-type/:id" ,element: <UpdateMedicineType/>},
      //Tests
      {path:"/tests" ,element: <Tests/>},
      {path:"/tests/create-test" ,element: <CreateTest/>},
      {path:"/tests/edit-test/:id" ,element: <UpdateTest/>},
      //medicine
      {path:"/medicines" ,element: <Medicines/>},
      {path:"/medicines/create-medicine" ,element: <CreateMedicine/>},
      {path:"/medicines/edit-medicine/:id" ,element: <UpdateMedicine/>},
      {path:"/medicines/details-medicine/:id" ,element: <DetailsMedicine/>},
      //Doctor
      {path:"/doctors" ,element: <DoctorsManage/>},
      {path:"/doctors/create-doctor" ,element: <CreateDoctor/>},
      {path:"/doctors/edit-doctor/:id" ,element: <DoctorUpdate/>},
      {path:"/doctors/details-doctor/:id" ,element: <DetailsMedicine/>},
      //Patients
      {path:"/patients" ,element: <PatientsList/>},
      {path:"/patients/create-patient" ,element: <PatientCreate/>},
      {path:"/patients/edit-patient/:id" ,element: <PatientUpdate/>},
      {path:"/patients/details-patient/:id" ,element: <PatientDetails/>},
      //Appointment
      {path:"/appointments" ,element: <AppointmentList/>},
      {path:"/appointments/create-appointment" ,element: <AppointmentCreate/>},
      {path:"/appointments/edit-appointment/:id" ,element: <AppointmentUpdate/>},
      {path:"/appointments/details-appointment/:id" ,element: <AppointmentDetails/>},
      //dosages
      {path:"/dosages" ,element: <DosagesList/>},
      //dosages
      {path:"/durations" ,element: <DurationsList/>},
      {path:"/create-dosages" ,element: <CreateDosage/>},




      {path:"/createPrescription" ,element: <CreatePrescription/>},
      // {path:"/patients/patient-list" ,element: <PatientsList/>},
      {path:"/patients/patient-medical-history" ,element: <MedicalHistory/>},
      {path:"/appointments/today" ,element: <TodayAppointment/>},
      {path:"/appointments/upcoming" ,element: <Upcoming/>},
      {path:"/appointments/history" ,element: <DoctorAppointmentHistory/>},
   
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
