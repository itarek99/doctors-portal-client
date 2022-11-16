import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    setLoginError('');
    const { email, password } = data;
    loginUser(email, password)
      .then(() => {
        toast.success('Login Successful!');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errMessage = err.message.split('/')[1].slice(0, -2).split('-').join(' ');
        setLoginError(errMessage);
        console.error(err);
      });
  };

  return (
    <div className='container mx-auto px-2 flex justify-center items-center h-[87vh]'>
      <div className='w-full max-w-md p-10 rounded-xl shadow-lg'>
        <h2 className='text-3xl font-bold mb-2 text-center'>Login </h2>

        <form onSubmit={handleSubmit(handleLogin)} className='space-y-2'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              className='input input-bordered'
              type='email'
              {...register('email', {
                required: 'email is required',
              })}
            />
            {errors.email && (
              <p role='alert' className='text-error text-xs mt-1'>
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              className='input input-bordered'
              type='password'
              {...register('password', {
                required: 'password is required',
                minLength: { value: 6, message: 'password must be minimum 6 characters long' },
              })}
            />
            {errors.password && (
              <p role='alert' className='text-error text-xs mt-1'>
                {errors.password?.message}
              </p>
            )}
            <label className='label'>
              <span className='label-text text-xs'>Forget Password?</span>
            </label>
          </div>
          <div>{loginError && <p className='text-sm text-error capitalize'>{loginError}</p>}</div>
          <input className='btn btn-accent w-full' value='Login' type='submit' />
        </form>
        <p className='text-sm text-center mt-4'>
          New to Doctors Portal?{' '}
          <Link to='/signup' className='text-secondary'>
            Create an Account!
          </Link>
        </p>
        <div className='divider'>OR</div>
        <button className='btn w-full btn-outline btn-accent'>Continue With Google</button>
      </div>
    </div>
  );
};
export default Login;
