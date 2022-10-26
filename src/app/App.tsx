import { Route, Routes, BrowserRouter } from 'react-router-dom';

import GranulatesPage from '../pages/granulates-page/granulates-page';
import GranulatesCounterPage from '../pages/granulates-counter-page/granulates-counter-page';

import { AppRoute } from '../variables/variables';

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
        <Route path={AppRoute.ROOT} element={<GranulatesPage/>}></Route>
        <Route path={AppRoute.GRANULATES_COUNTER} element={<GranulatesCounterPage/>}></Route>
        {/* <Route index element={<Overview/>} /> */}
        {/* <Route path={AppRoute.ROOT_SETTINGS} element={<SettingsPage/>}/> */}
        {/* <Route path={AppRoute.ROOT_INFO} element={<InfoPage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
