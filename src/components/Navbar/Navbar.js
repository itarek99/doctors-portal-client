import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { route: '/', link: 'Home' },
    { route: '/about', link: 'About' },
    { route: '/appointment', link: 'Appointment' },
    { route: '/reviews', link: 'Reviews' },
    { route: '/contact', link: 'Contact Us' },
    { route: '/login', link: 'Login' },
  ];

  const navItems = (
    <>
      {navLinks.map((navLink, i) => (
        <li key={i}>
          <Link to={navLink.route}>{navLink.link} </Link>
        </li>
      ))}
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
            <Link to='/' className='btn btn-ghost normal-case text-xl'>
              Doctors Portal
            </Link>
          </div>
          <div className='justify-end hidden lg:flex'>
            <ul className='menu menu-horizontal p-0'>{navItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
