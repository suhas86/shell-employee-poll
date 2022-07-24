import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';

const MainLayout = () => {
  return (
    <>
      <NavBar />;
      <Outlet />
    </>
  );
};

export default MainLayout;
