import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
