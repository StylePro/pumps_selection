import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const MainLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayOut;
