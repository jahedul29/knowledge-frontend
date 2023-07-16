import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface IPrivateRouteProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to={'/login'} state={{ from: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
