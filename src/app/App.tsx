import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import { CounterPage, OverviewPage, RootPage, SettingsPage, InfoPage } from '../pages';
//granulates components
import { GranulatesCounterContainer, GranulatesCounter, GranulatesCounterVorek, GranulatesCounterHeader } from '../components/granulates-counter';
//Gums components
import { GumsCounter, GumsCounterCardboard, GumsCounterHeader } from '../components/gums-counter';
//consts and utils functions
import { AppRoute, rootBaseName } from '../variables/variables';
import { setVhVariable } from '../utils/utils';
//store
import { SelectorGetCurrentGranulates, SelectorGetCurrentGum, SelectorGetGranulatesState, SelectorGetGumsState } from '../store/selectors/selectors';
import { clearItemAction as gumsClearItemAction } from '../store/slices/gums-slice';
import { clearItemAction as granulatesClearItemAction } from '../store/slices/granulates-slice';

function App() {
  setVhVariable(); //variable VH used in styles for set main height

  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route path={AppRoute.ROOT} element={<RootPage/>}/>
        <Route path={AppRoute.SETTINGS} element={<SettingsPage/>}/>
        <Route path={AppRoute.INFORMATION} element={<InfoPage/>} />

        <Route path={AppRoute.GRANULATES_PAGE} element={<OverviewPage getStateSelector={SelectorGetGranulatesState}/>}/>
        <Route path={AppRoute.GRANULATES_COUNTER} element={<CounterPage
          getItemSelector={SelectorGetCurrentGranulates}
          clearItemSelector={granulatesClearItemAction}
          counterHeader={<GranulatesCounterHeader/>}/>
        }>
          <Route index element={<GranulatesCounter/>} />
          <Route path={AppRoute.GRANULATES_COUNTER_CONTAINER} element={<GranulatesCounterContainer/>}/>
          <Route path={AppRoute.GRANULATES_COUNTER_VOREK} element={<GranulatesCounterVorek/>}/>
        </Route>

        <Route path={AppRoute.GUM_PAGE} element={<OverviewPage getStateSelector={SelectorGetGumsState}/>}/>
        <Route path={AppRoute.GUM_COUNTER} element={<CounterPage
          getItemSelector={SelectorGetCurrentGum}
          clearItemSelector={gumsClearItemAction}
          counterHeader={<GumsCounterHeader/>}/>
        }>
          <Route index element={<GumsCounter/>} />
          <Route path={AppRoute.GUM_COUNTER_CARDBOARD} element={<GumsCounterCardboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
