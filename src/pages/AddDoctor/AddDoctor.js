import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgBBKey = process.env.REACT_APP_IMGBB_API_KEY;

  const { data: appointmentSpecialty = [] } = useQuery({
    queryKey: ['appointmentSpecialty'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/appointmentSpecialty`);
      const appointmentSpecialty = await response.json();
      return appointmentSpecialty;
    },
  });

  const handleAddDoctor = (docInfo) => {
    const image = docInfo.doctorImg[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgBBKey}`;

    fetch(url, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const doctor = {
            name: docInfo.name,
            email: docInfo.email,
            specialty: docInfo.specialty,
            img: result.data.url,
          };
          fetch(`http://localhost:5000/doctors`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success(`${docInfo.name} Added as New Doctor!`);
                reset();
              }
            });
        }
      });
  };

  return (
    <div className='p-6'>
      <h3 className='text-3xl mb-4 font-bold'>Add New Doctor</h3>

      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className='form-control w-full max-w-sm'>
          <label className='label'>
            <span className='label-text font-semibold'>Doctor's Name</span>
          </label>
          <input
            {...register('name', { required: 'name is required' })}
            type='text'
            placeholder='name'
            className='input input-bordered w-full'
          />

          {errors.name && (
            <label className='label'>
              <span className='label-text-alt text-error'>{errors.name.message}</span>
            </label>
          )}
        </div>
        <div className='form-control w-full max-w-sm mt-2'>
          <label className='label'>
            <span className='label-text font-semibold'>Doctor's Email</span>
          </label>
          <input
            {...register('email', { required: 'email is required' })}
            type='email'
            placeholder='email'
            className='input input-bordered w-full'
          />
          {errors.email && (
            <label className='label'>
              <span className='label-text-alt text-error'>{errors.email.message}</span>
            </label>
          )}
        </div>
        <div className='form-control w-full max-w-sm mt-2'>
          <label className='label'>
            <span className='label-text font-semibold'>Doctor's Specialty</span>
          </label>
          <select
            {...register('specialty', { required: 'specialty is required' })}
            className='select select-bordered w-full '
          >
            {appointmentSpecialty?.map((item) => (
              <option value={item.name} key={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.specialty && (
            <label className='label'>
              <span className='label-text-alt text-error'>{errors.specialty.message}</span>
            </label>
          )}
        </div>
        <div className='form-control w-full max-w-sm mt-2'>
          <label className='label'>
            <span className='label-text font-semibold'>Pick a file</span>
          </label>
          <input
            {...register('doctorImg', { required: 'photo is required' })}
            type='file'
            accept='image/*'
            className='file-input file-input-secondary file-input-bordered w-full '
          />
          {errors.doctorImg && (
            <label className='label'>
              <span className='label-text-alt text-error'>{errors.doctorImg.message}</span>
            </label>
          )}
        </div>

        <button className='btn max-w-sm w-full btn-accent mt-6' type='submit'>
          Add Doctor
        </button>
      </form>
    </div>
  );
};
export default AddDoctor;
