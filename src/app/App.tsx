import { Route, Routes, BrowserRouter } from 'react-router-dom';

import GranulatesPage from '../pages/granulates-page/granulates-page';
import GranulatesCounterPage from '../pages/granulates-counter-page/granulates-counter-page';

import GranulatesCounter from '../components/granulates-counter/granulates-counter/granulates-counter';
import GranulatesCounterContainer from '../components/granulates-counter/granulates-counter-container/granulates-counter-container';
import GranulatesCounterVorek from '../components/granulates-counter/granulates-counter-vorek/granulates-counter-vorek';

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
        <Route path={AppRoute.ROOT} element={<GranulatesPage/>}/>
        <Route path={AppRoute.GRANULATES_COUNTER} element={<GranulatesCounterPage/>}>
          <Route index element={<GranulatesCounter/>} />
          <Route path={AppRoute.GRANULATES_COUNTER_CONTAINER} element={<GranulatesCounterContainer/>}/>
          <Route path={AppRoute.GRANULATES_COUNTER_VOREK} element={<GranulatesCounterVorek/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
