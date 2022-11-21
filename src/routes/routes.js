import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Main from '../layouts/Main';
import AddDoctor from '../pages/AddDoctor/AddDoctor';
import Appointment from '../pages/Appointment/Appointment';
import MyAppointment from '../pages/Dashboard/components/MyAppointment';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ManageDoctors from '../pages/ManageDoctors/ManageDoctors';
import SignUp from '../pages/SignUp/SignUp';
import Users from '../pages/Users/Users';
import AdminRoute from './AdminRoute/AdminRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/appointment', element: <Appointment /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment />,
      },
      {
        path: '/dashboard/users',
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/addDoctor',
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/managedoctors',
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
