import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AppointmentModal = ({ refetch, treatment, setTreatment, appointmentDate }) => {
  const { name, slots } = treatment;
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const appointment = {
      treatment: treatment.name,
      appointmentDate,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch(`http://localhost:5000/appointments`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success('Appointment Confirmed!');
          setTreatment(null);
          refetch();
        } else {
          toast.error(result.message);
        }
      });
  };
  return (
    <>
      <input type='checkbox' id='appointment-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label htmlFor='appointment-modal' className='btn btn-sm btn-circle absolute right-3 top-3'>
            ✕
          </label>
          <h3 className='text-xl font-bold'>{name}</h3>
          <form onSubmit={handleBooking} className='space-y-4 mt-6'>
            <input
              name='selectedDate'
              type='text'
              value={appointmentDate}
              readOnly
              className='input input-bordered w-full'
            />

            <select name='slot' className='select select-bordered w-full'>
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name='name'
              defaultValue={user?.displayName}
              readOnly
              type='text'
              placeholder='Full Name'
              className='input input-bordered w-full'
            />
            <input
              name='email'
              defaultValue={user?.email}
              readOnly
              type='email'
              placeholder='Email'
              className='input input-bordered w-full'
            />
            <input name='phone' type='text' placeholder='Phone Number' className='input input-bordered w-full' />
            <input type='submit' value='Submit' className='btn btn-accent w-full' />
          </form>
        </div>
      </div>
    </>
  );
};
export default AppointmentModal;
