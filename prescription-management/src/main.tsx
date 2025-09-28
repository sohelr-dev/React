import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Users from './components/pages/Users.tsx';
import Dashboard from './components/pages/Dashboard.tsx';
import CreatePrescription from './components/pages/doctors/CreatePrescriptions.tsx';

const AppRouter =createBrowserRouter([
  {path:"/" ,element:<App/>,
    children:[
      {path:"/dashboard" ,element: <Dashboard/>},
      {path:"/users" ,element: <Users/>},
      {path:"/createPrescription" ,element: <CreatePrescription/>},
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>,
)
