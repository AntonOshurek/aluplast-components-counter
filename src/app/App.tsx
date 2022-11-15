import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import {GranulatesPage, RootPage, SettingsPage, GranulatesCounterPage} from '../pages';
//granulates counters components for GRANULATES_COUNTER root
import {GranulatesCounterContainer, GranulatesCounter, GranulatesCounterVorek} from '../components/granulates-counter';
//consts and utils functions
import { AppRoute, rootBaseName } from '../variables/variables';
import { setVhVariable } from '../utils/utils';

function App() {
  setVhVariable(); //variable VH used in styles for set main height

  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route path={AppRoute.ROOT} element={<RootPage/>}/>
        <Route path={AppRoute.SETTINGS} element={<SettingsPage/>}/>
        <Route path={AppRoute.GRANULATES_PAGE} element={<GranulatesPage/>}/>
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
