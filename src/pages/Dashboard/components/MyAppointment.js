import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/appointments?email=${user?.email}`;
  const { data: myAppointments = [], isLoading } = useQuery({
    queryKey: ['appointments', user?.email],
    queryFn: async () => {
      const response = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await response.json();
      return data;
    },
  });

  console.log(myAppointments);

  if (isLoading) return <Loading />;

  return (
    <div className='p-6'>
      <h3 className='text-3xl font-bold'>My Appointments</h3>
      <div className='overflow-x-auto mt-6'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {myAppointments?.map((myAppointment, i) => (
              <tr key={myAppointment._id}>
                <th>{i + 1}</th>
                <td>{myAppointment.patient}</td>
                <td>{myAppointment.treatment}</td>
                <td>{myAppointment.appointmentDate}</td>
                <td>{myAppointment.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyAppointment;
