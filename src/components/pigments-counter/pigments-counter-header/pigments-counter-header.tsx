import { NavLink } from 'react-router-dom';
//components
import { PigmentsCounterNav } from '..';
//variables and constants
import { ComponentsTexts } from '../../../variables/variables';
import { AppRoute } from '../../../variables/variables';
//styles
import './pigments-counter-header.scss';

const PigmentsCounterHeader = (): JSX.Element => {
  return (
    <header className='pigments-counter-header'>
        <div className='pigments-counter-header__wrap container'>

          <NavLink className='pigments-counter-header__back-link' to={AppRoute.PIGMENTS_PAGE}>
            <span className='visually-hidden'>powrót do menu głównego</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M9.95 21.475.475 12 9.95 2.525l1.325 1.325L3.125 12l8.15 8.15Z"/>
            </svg>
          </NavLink>

          <h1 className='pigments-counter-header__title'>{ComponentsTexts.PIGMENTS_COUNTER_PAGE_TITLE}</h1>
          <PigmentsCounterNav/>
        </div>
    </header>
  );
};

export default PigmentsCounterHeader;
