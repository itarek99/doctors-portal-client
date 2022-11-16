import { format } from 'date-fns';
import { useState } from 'react';
import AppointmentBanner from './components/AppointmentBanner';
import AvailableAppointments from './components/AvailableAppointments';

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  let appointmentDate = <p>Please pick a day.</p>;
  if (selected) {
    appointmentDate = format(selected, 'PP');
  }

  return (
    <div className='container mx-auto px-2'>
      <AppointmentBanner selected={selected} setSelected={setSelected} />
      <AvailableAppointments appointmentDate={appointmentDate} />
    </div>
  );
};
export default Appointment;
