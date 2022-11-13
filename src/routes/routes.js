import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Appointment from '../pages/Appointment/Appointment';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/appointment', element: <Appointment /> },
    ],
  },
]);
export default router;
