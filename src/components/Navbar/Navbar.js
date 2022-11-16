import { useContext } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = [
    { route: '/', link: 'Home' },
    { route: '/about', link: 'About' },
    { route: '/appointment', link: 'Appointment' },
    { route: '/reviews', link: 'Reviews' },
    { route: '/contact', link: 'Contact Us' },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const navItems = (
    <>
      {navLinks.map((navLink, i) => (
        <li key={i}>
          <Link to={navLink.route}>{navLink.link} </Link>
        </li>
      ))}

      {user?.uid && (
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div className='bg-base-100'>
      <div className='container mx-auto px-2'>
        <div className='navbar justify-between px-0'>
          <div className=''>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <HiMenuAlt1 className='text-2xl' />
              </label>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                {navItems}
              </ul>
            </div>
            <Link to='/' className='font-bold text-secondary py-3 text-2xl'>
              Doctors Portal
            </Link>
          </div>
          <div className='justify-end hidden lg:flex'>
            <ul className='menu menu-horizontal p-0'>{navItems}</ul>
          </div>
          <div>
            {user?.uid ? (
              <button onClick={handleLogOut} className='btn btn-error text-white'>
                Sign Out
              </button>
            ) : (
              <Link to='/login' className='btn btn-primary text-white'>
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
