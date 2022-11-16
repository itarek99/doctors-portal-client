const AppointmentCard = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment;
  return (
    <div className='shadow-lg text-center py-8 space-y-3 rounded-xl'>
      <h2 className='font-bold text-xl text-secondary'>{name}</h2>
      <p className='text-sm'>{slots.length > 0 ? slots[0] : 'No Space Available Today'} </p>
      <p className='text-sm'>{slots.length} Spaces Available Today</p>

      <label
        disabled={slots.length === 0}
        onClick={() => setTreatment(appointment)}
        htmlFor='appointment-modal'
        className={`btn btn-primary bg-gradient text-white `}
      >
        Book Appointment
      </label>
    </div>
  );
};
export default AppointmentCard;
