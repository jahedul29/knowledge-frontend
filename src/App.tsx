import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks';
import { setToken } from './redux/features/auth/authSlice';
import Cookies from 'js-cookie';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setToken(Cookies.get('accessToken')));
  }, [dispatch]);

  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
