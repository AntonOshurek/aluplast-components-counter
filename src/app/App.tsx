import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import { CounterPage, OverviewPage, RootPage, SettingsPage, InfoPage, BasicCounterPage, ItemsCounterPage } from '../pages';
//pigments components
import { PigmentsCounterContainer, PigmentsCounterHeader } from '../components/pigments-counter';
//Gums components
import { GumsCounterHeader } from '../components/gums-counter';
//consts and utils functions
import { AppRoute, PigmentsLogsNames, GumsLogsNames, rootBaseName, ComponentsTexts } from '../variables/variables';
import { setVhVariable } from '../utils/utils';
//store
import { SelectorGetCurrentPigments, SelectorGetCurrentGum, SelectorGetPigmentsState, SelectorGetGumsState, SelectorGetGumsSettingsCardboardWeight, SelectorGetPigmentsSettingsVorekWeight } from '../store/selectors/selectors';
import { clearItemAction as gumsClearItemAction, decrementAction as gumsDec, incrementAction as gumsInc, logAction as gumsLog } from '../store/slices/gums-slice';
import { incrementAction as pigmentsInc, decrementAction as pigmentsDec, logAction as pigmentsLog } from '../store/slices/pigments-slice';
import { clearItemAction as pigmentsClearItemAction } from '../store/slices/pigments-slice';

function App() {
  setVhVariable(); //variable VH used in styles for set main height

  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route path={AppRoute.ROOT} element={<RootPage/>}/>
        <Route path={AppRoute.SETTINGS} element={<SettingsPage/>}/>
        <Route path={AppRoute.INFORMATION} element={<InfoPage/>} />

        {/* pegmenty */}
        <Route path={AppRoute.PIGMENTS_PAGE} element={<OverviewPage getStateSelector={SelectorGetPigmentsState}/>}/>
        <Route path={AppRoute.PIGMENTS_COUNTER} element={<CounterPage
          getItemSelector={SelectorGetCurrentPigments}
          clearItemSelector={pigmentsClearItemAction}
          counterHeader={<PigmentsCounterHeader/>}/>
        }>
          <Route index element={<BasicCounterPage
            incrementAction={pigmentsInc}
            decrementAction={pigmentsDec}
            logAction={pigmentsLog}
            logName={PigmentsLogsNames.COUNTER}
          />} />
          <Route path={AppRoute.PIGMENTS_COUNTER_CONTAINER} element={<PigmentsCounterContainer/>}/>
          <Route path={AppRoute.PIGMENTS_COUNTER_VOREK} element={<ItemsCounterPage
            counterName={ComponentsTexts.PIGMENTS_COUNTER_VOREK_NAME}
            getItemWeight={SelectorGetPigmentsSettingsVorekWeight}
            incrementAction={pigmentsInc}
            decrementAction={pigmentsDec}
            logAction={pigmentsLog}
            logName={PigmentsLogsNames.VOREK}
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
            counterName={ComponentsTexts.GUMS_COUNTER_CARDBOARD_NAME}
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
