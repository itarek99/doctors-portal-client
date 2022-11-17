import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <Loading />;
  if (!user?.uid) return <Navigate to='/login' state={{ from: location }} replace />;
  return children;
};
export default PrivateRoute;
