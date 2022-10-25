import { Outlet } from 'react-router-dom';

import Header from '../../components/header/header';

import './app-page.scss';

const AppPage = (): JSX.Element => {
  return (
    <div className='appPage'>
      <Header />
      <Outlet />
    </div>
  )
}

export default AppPage;
