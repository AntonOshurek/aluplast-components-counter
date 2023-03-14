import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from '../pages';
//pigments components
import { PigmentsCounterHeader } from '../components/pigments-counter';
//Gums components
import { GumsCounterHeader } from '../components/gums-counter';
//consts and utils functions
import { AppRoute, PigmentsLogsNames, GumsLogsNames, rootBaseName, ComponentsTexts } from '../variables/variables';
import { setVhVariable } from '../utils/utils';
//store
import * as selectors from '../store/selectors/selectors'
import { clearItemAction as gumsClearItemAction, decrementAction as gumsDec, incrementAction as gumsInc, logAction as gumsLog } from '../store/slices/gums-slice';
import { incrementAction as pigmentsInc, decrementAction as pigmentsDec, logAction as pigmentsLog, clearItemAction as pigmentsClearItemAction } from '../store/slices/pigments-slice';

function App() {
  setVhVariable(); //variable VH used in styles for set main height

  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        {/* basic app pages */}
        <Route path={AppRoute.ROOT} element={<Pages.RootPage/>}/>
        <Route path={AppRoute.SETTINGS} element={<Pages.SettingsPage/>}/>
        <Route path={AppRoute.INFORMATION} element={<Pages.InfoPage/>} />

        {/* pegmenty */}
        <Route path={AppRoute.PIGMENTS_PAGE} element={<Pages.OverviewPage getStateSelector={selectors.SelectorGetPigmentsState}/>}/>
        <Route path={AppRoute.PIGMENTS_COUNTER} element={<Pages.CounterPage
          getItemSelector={selectors.SelectorGetCurrentPigments}
          clearItemAction={pigmentsClearItemAction}
          counterHeader={<PigmentsCounterHeader/>}/>
        }>
          <Route index element={<Pages.BasicCounterPage
            incrementAction={pigmentsInc}
            decrementAction={pigmentsDec}
            logAction={pigmentsLog}
            logName={PigmentsLogsNames.COUNTER}
          />} />

          <Route path={AppRoute.PIGMENTS_COUNTER_CONTAINER} element={<Pages.WithdrawalCounterPage
              counterName={ComponentsTexts.PIGMENTS_COUNTER_CONTAINER_NAME}
              incrementAction={pigmentsInc}
              logAction={pigmentsLog}
              logName={PigmentsLogsNames.CONTAINER}
              getSettingsWithdrawalCount={selectors.SelectorGetPigmentsSettingsContainerWeight}
          />}/>

          <Route path={AppRoute.PIGMENTS_COUNTER_VOREK} element={<Pages.ItemsCounterPage
            counterName={ComponentsTexts.PIGMENTS_COUNTER_VOREK_NAME}
            getItemWeight={selectors.SelectorGetPigmentsSettingsVorekWeight}
            incrementAction={pigmentsInc}
            decrementAction={pigmentsDec}
            logAction={pigmentsLog}
            logName={PigmentsLogsNames.VOREK}
          />}/>
        </Route>

        {/* uszczelki */}
        <Route path={AppRoute.GUM_PAGE} element={<Pages.OverviewPage getStateSelector={selectors.SelectorGetGumsState}/>}/>
        <Route path={AppRoute.GUM_COUNTER} element={<Pages.CounterPage
          getItemSelector={selectors.SelectorGetCurrentGum}
          clearItemAction={gumsClearItemAction}
          counterHeader={<GumsCounterHeader/>}/>
        }>
          <Route index element={<Pages.BasicCounterPage
            incrementAction={gumsInc}
            decrementAction={gumsDec}
            logAction={gumsLog}
            logName={GumsLogsNames.COUNTER}
          />} />
          <Route path={AppRoute.GUM_COUNTER_CARDBOARD} element={<Pages.ItemsCounterPage
            counterName={ComponentsTexts.GUMS_COUNTER_CARDBOARD_NAME}
            getItemWeight={selectors.SelectorGetGumsSettingsCardboardWeight}
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
