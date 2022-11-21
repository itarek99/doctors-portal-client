import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(`http://localhost:5000/users`).then((res) => res.json()),
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          refetch();
          toast.success('New admin added');
        }
      });
  };

  return (
    <div className='p-6'>
      <h3 className='text-3xl font-bold mb-4'>All Users</h3>

      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th className='text-center'>Admin</th>
              <th className='text-center'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className='text-center'>
                  {user?.role ? null : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className='btn btn-primary text-white text-xs rounded-sm btn-sm'
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className='text-center'>
                  <button className='btn btn-error text-white text-xs rounded-sm btn-sm hover:bg-red-500'>
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Users;
