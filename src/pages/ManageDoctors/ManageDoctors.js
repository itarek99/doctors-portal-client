import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
  const [removeDoctor, setRemoveDoctor] = useState(null);
  const closeModal = () => {
    setRemoveDoctor(null);
  };

  const { data: doctors = [], refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/doctors`, {
        headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` },
      });
      const result = await res.json();
      return result;
    },
  });

  const handleDeleteDoctor = (doctor) => {
    const { _id } = doctor;

    fetch(`http://localhost:5000/doctors/${_id}`, {
      method: 'DELETE',
      headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          refetch();
          toast.success('Doctor Deleted!');
        }
      });
  };

  return (
    <div className='p-6'>
      <h3 className='text-3xl font-bold mb-4'>Manage Doctors</h3>

      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className='avatar'>
                    <div className='mask mask-circle w-12 h-12'>
                      <img src={doctor.img} alt={doctor.name} />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className='font-bold'>{doctor.name}</div>
                    <div className='text-sm opacity-50'>{doctor.email}</div>
                  </div>
                </td>
                <td>{doctor.specialty}</td>
                <th>
                  <label
                    onClick={() => setRemoveDoctor(doctor)}
                    htmlFor='confirmationModal'
                    className='btn btn-error text-white text-xs rounded-sm btn-sm hover:bg-red-500'
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {removeDoctor && (
        <ConfirmationModal
          modalData={removeDoctor}
          title='Are You Sure?'
          successAction={handleDeleteDoctor}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default ManageDoctors;
