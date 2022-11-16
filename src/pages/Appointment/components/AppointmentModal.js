const AppointmentModal = ({ treatment, setTreatment, appointmentDate }) => {
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      treatment: treatment.name,
      appointmentDate,
      patient: name,
      slot,
      email,
      phone,
    };
    // TODO: close modal after successfully submit form
    setTreatment(null);
    console.log(booking);
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

            <input name='name' type='text' placeholder='Full Name' className='input input-bordered w-full' />
            <input name='email' type='email' placeholder='Email' className='input input-bordered w-full' />
            <input name='phone' type='text' placeholder='Phone Number' className='input input-bordered w-full' />
            <input type='submit' value='Submit' className='btn btn-accent w-full' />
          </form>
        </div>
      </div>
    </>
  );
};
export default AppointmentModal;
