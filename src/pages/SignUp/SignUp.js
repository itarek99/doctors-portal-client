import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
  const { createUserWithEmail, updateCurrentUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    setSignUpError('');
    const { name, email, password } = data;
    createUserWithEmail(email, password)
      .then(() => {
        updateCurrentUser({ displayName: name })
          .then(() => {
            navigate('/');
            toast('Sign Up Successful');
          })
          .catch((err) => {
            const errMessage = err.message.split('/')[1].slice(0, -2).split('-').join(' ');
            setSignUpError(errMessage);
          });
      })
      .catch((err) => {
        const errMessage = err.message.split('/')[1].slice(0, -2).split('-').join(' ');
        setSignUpError(errMessage);
      });
  };

  return (
    <div className='container mx-auto px-2 py-4 flex items-center justify-center min-h-[85vh]'>
      <div className='w-full max-w-md p-10 rounded-xl shadow-lg'>
        <h2 className='text-3xl font-bold mb-2 text-center'>Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input className='input input-bordered' type='text' {...register('name', { required: true })} />
            {errors.name && <span className='text-xs text-error mt-2'>Name field is required</span>}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input className='input input-bordered' type='email' {...register('email', { required: true })} />
            {errors.email && <span className='text-xs text-error mt-2'>Email field is required</span>}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              className='input input-bordered'
              type='password'
              {...register('password', {
                required: 'Password Address is required',
                minLength: { value: 6, message: 'password must be minimus 8 characters long' },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message: 'Password must be strong',
                },
              })}
            />
            {errors.password && <span className='text-xs text-error mt-2'>{errors.password?.message}</span>}
          </div>
          <div className='mt-2'>
            <div>{signUpError && <p className='text-sm text-error capitalize'>{signUpError}</p>}</div>
            <input className='btn btn-accent w-full mt-4' value='Sign Up' type='submit' />
          </div>
        </form>
        <p className='text-sm text-center mt-4'>
          Already Have an Account?{' '}
          <Link to='/login' className='text-secondary'>
            Login Now!
          </Link>
        </p>
        <div className='divider'>OR</div>
        <button className='btn w-full btn-outline btn-accent'>Continue With Google</button>
      </div>
    </div>
  );
};
export default SignUp;
