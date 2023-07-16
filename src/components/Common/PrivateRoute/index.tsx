import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface IPrivateRouteProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const location = useLocation();
  console.log({ user, accessToken });

  if (!user) {
    console.log('I am here');
    return <Navigate to={'/login'} state={{ from: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
