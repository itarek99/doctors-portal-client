import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const DashboardLayout = () => {
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
            <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
              <li>
                <a href='/'>Sidebar Item 1</a>
              </li>
              <li>
                <a href='/'>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;