import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks';
import { setToken, setUser } from './redux/features/auth/authSlice';
import Cookies from 'js-cookie';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const cookie = Cookies.get('user');
    if (cookie) {
      const user = JSON.parse(cookie);
      if (user) {
        dispatch(setToken(user.accessToken));
        dispatch(setUser(user.user));
      }
    }
  }, [dispatch]);
  return (
    <div>
      <MainLayout />
      <ToastContainer />
    </div>
  );
}

export default App;
