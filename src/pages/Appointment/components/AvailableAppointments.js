import { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import AppointmentModal from './AppointmentModal';

const AvailableAppointments = ({ appointmentDate }) => {
  const [appointmentTime, setAppointmentTime] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/appointmentOptions')
      .then((res) => res.json())
      .then((result) => setAppointmentTime(result));
  }, []);

  return (
    <section className='my-16'>
      <div className='text-center text-2xl font-bold text-secondary'>Available Appointments On{appointmentDate}</div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {appointmentTime.map((appointment) => (
          <AppointmentCard setTreatment={setTreatment} key={appointment._id} appointment={appointment} />
        ))}
      </div>
      {treatment && (
        <AppointmentModal appointmentDate={appointmentDate} treatment={treatment} setTreatment={setTreatment} />
      )}
    </section>
  );
};
export default AvailableAppointments;
