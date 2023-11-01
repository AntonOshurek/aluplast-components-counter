import { NavLink } from 'react-router-dom';
//components
// import GumsCounterNav from '../gums-counter-nav/gums-counter-nav';
import ChemistryCounterNav from '../chemistry-counter-nav/chemistry-counter-nav';
//variables
import { AppRoute, ComponentsTexts } from '../../../variables/variables';
//styles
import './chemistry-counter-header.scss';

const ChemistryCounterHeader = (): JSX.Element => {
  return (
    <header className='chemistry-counter-header'>
        <div className='chemistry-counter-header__wrap container'>

          <NavLink className='chemistry-counter-header__back-link' to={AppRoute.CHEMISTRY_PAGE}>
            <span className='visually-hidden'>powrót do menu głównego</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M9.95 21.475.475 12 9.95 2.525l1.325 1.325L3.125 12l8.15 8.15Z"/>
            </svg>
          </NavLink>

          <h1 className='chemistry-counter-header__title'>{ComponentsTexts.CHEMISTRY_COUNTER_PAGE_TITLE}</h1>
          <ChemistryCounterNav/>
        </div>
    </header>
  );
};

export default ChemistryCounterHeader;
