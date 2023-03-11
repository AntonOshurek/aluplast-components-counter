import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import { CounterPage, OverviewPage, RootPage, SettingsPage, InfoPage, BasicCounterPage, ItemsCounterPage } from '../pages';
//granulates components
import { GranulatesCounterContainer, GranulatesCounterHeader } from '../components/granulates-counter';
//Gums components
import { GumsCounterHeader } from '../components/gums-counter';
//consts and utils functions
import { AppRoute, GranulatesLogsNames, GumsLogsNames, rootBaseName } from '../variables/variables';
import { setVhVariable } from '../utils/utils';
//store
import { SelectorGetCurrentGranulates, SelectorGetCurrentGum, SelectorGetGranulatesState, SelectorGetGumsState, SelectorGetGumsSettingsCardboardWeight, SelectorGetGranulatesSettingsVorekWeight } from '../store/selectors/selectors';
import { clearItemAction as gumsClearItemAction, decrementAction as gumsDec, incrementAction as gumsInc, logAction as gumsLog } from '../store/slices/gums-slice';
import { incrementAction as granulatesInc, decrementAction as granulatesDec, logAction as granulatesLog } from '../store/slices/granulates-slice';
import { clearItemAction as granulatesClearItemAction } from '../store/slices/granulates-slice';

function App() {
  setVhVariable(); //variable VH used in styles for set main height

  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route path={AppRoute.ROOT} element={<RootPage/>}/>
        <Route path={AppRoute.SETTINGS} element={<SettingsPage/>}/>
        <Route path={AppRoute.INFORMATION} element={<InfoPage/>} />

        {/* pegmenty */}
        <Route path={AppRoute.GRANULATES_PAGE} element={<OverviewPage getStateSelector={SelectorGetGranulatesState}/>}/>
        <Route path={AppRoute.GRANULATES_COUNTER} element={<CounterPage
          getItemSelector={SelectorGetCurrentGranulates}
          clearItemSelector={granulatesClearItemAction}
          counterHeader={<GranulatesCounterHeader/>}/>
        }>
          <Route index element={<BasicCounterPage
            incrementAction={granulatesInc}
            decrementAction={granulatesDec}
            logAction={granulatesLog}
            logName={GranulatesLogsNames.COUNTER}
          />} />
          <Route path={AppRoute.GRANULATES_COUNTER_CONTAINER} element={<GranulatesCounterContainer/>}/>
          <Route path={AppRoute.GRANULATES_COUNTER_VOREK} element={<ItemsCounterPage
            getItemWeight={SelectorGetGranulatesSettingsVorekWeight}
            incrementAction={granulatesInc}
            decrementAction={granulatesDec}
            logAction={granulatesLog}
            logName={GranulatesLogsNames.VOREK}
          />}/>
        </Route>

        {/* uszczelki */}
        <Route path={AppRoute.GUM_PAGE} element={<OverviewPage getStateSelector={SelectorGetGumsState}/>}/>
        <Route path={AppRoute.GUM_COUNTER} element={<CounterPage
          getItemSelector={SelectorGetCurrentGum}
          clearItemSelector={gumsClearItemAction}
          counterHeader={<GumsCounterHeader/>}/>
        }>
          <Route index element={<BasicCounterPage
            incrementAction={gumsInc}
            decrementAction={gumsDec}
            logAction={gumsLog}
            logName={GumsLogsNames.COUNTER}
          />} />
          <Route path={AppRoute.GUM_COUNTER_CARDBOARD} element={<ItemsCounterPage
            getItemWeight={SelectorGetGumsSettingsCardboardWeight}
            incrementAction={gumsInc}
            decrementAction={gumsDec}
            logAction={gumsLog}
            logName={GumsLogsNames.CARDBOARD}
          />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
