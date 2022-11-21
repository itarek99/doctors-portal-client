import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user.email);

  return (
    <div>
      <Navbar />
      <div className='container mx-auto px-2'>
        <div className='drawer drawer-mobile'>
          <input id='dashboard-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            <Outlet />
          </div>
          <div className='drawer-side'>
            <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
            <ul className='menu p-4 w-80 bg-base-100 text-base-content gap-y-2 font-semibold'>
              <li>
                <Link to='/dashboard'>My Appointments</Link>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <Link to='/dashboard/users'>All Users</Link>
                  </li>
                  <li>
                    <Link to='/dashboard/addDoctor'>Add A Doctor</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
