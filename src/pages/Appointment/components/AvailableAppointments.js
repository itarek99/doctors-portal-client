import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import AppointmentCard from './AppointmentCard';
import AppointmentModal from './AppointmentModal';

const AvailableAppointments = ({ appointmentDate }) => {
  const [treatment, setTreatment] = useState(null);

  const {
    data: appointmentTime = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['appointmentOptions', appointmentDate],
    queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${appointmentDate}`).then((res) => res.json()),
  });

  if (isLoading) return <Loading />;

  return (
    <section className='my-16'>
      <div className='text-center text-2xl font-bold text-secondary'>Available Appointments On{appointmentDate}</div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {appointmentTime.map((appointment) => (
          <AppointmentCard setTreatment={setTreatment} key={appointment._id} appointment={appointment} />
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          refetch={refetch}
          appointmentDate={appointmentDate}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </section>
  );
};
export default AvailableAppointments;
