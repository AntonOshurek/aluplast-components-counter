import { NavLink } from 'react-router-dom';
//components
import GumsCounterNav from '../gums-counter-nav/gums-counter-nav';
//variables
import { AppRoute, ComponentsTexts } from '../../../variables/variables';
//styles
import './gums-counter-header.scss';

const GumsCounterHeader = (): JSX.Element => {
  return (
    <header className='gums-counter-header'>
        <div className='gums-counter-header__wrap container'>

          <NavLink className='gums-counter-header__back-link' to={AppRoute.GUM_PAGE}>
            <span className='visually-hidden'>powrót do menu głównego</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M9.95 21.475.475 12 9.95 2.525l1.325 1.325L3.125 12l8.15 8.15Z"/>
            </svg>
          </NavLink>

          <h1 className='gums-counter-header__title'>{ComponentsTexts.GUMS_COUNTER_PAGE_TITLE}</h1>
          <GumsCounterNav/>
        </div>
    </header>
  );
};

export default GumsCounterHeader;
