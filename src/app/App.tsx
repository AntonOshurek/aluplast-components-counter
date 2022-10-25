import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AppPage from '../pages/app-page/app-page';
import Overview from '../components/overview/overview';

function App() {

  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppPage/>}>
          <Route index element={<Overview/>} />
          {/* <Route path={AppRoute.ROOT_SETTINGS} element={<SettingsPage/>}/> */}
          {/* <Route path={AppRoute.ROOT_INFO} element={<InfoPage/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
