import { Route, Routes, BrowserRouter } from 'react-router-dom';

import GranulatesPage from '../pages/granulates-page/granulates-page';

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
        <Route path='/' element={<GranulatesPage/>}></Route>
        {/* <Route index element={<Overview/>} /> */}
        {/* <Route path={AppRoute.ROOT_SETTINGS} element={<SettingsPage/>}/> */}
        {/* <Route path={AppRoute.ROOT_INFO} element={<InfoPage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
