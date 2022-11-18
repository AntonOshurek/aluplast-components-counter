import { NavLink } from 'react-router-dom';
//components
import { GranulatesCounterNav } from '../';
//variables and constants
import { ComponentsTexts } from '../../../variables/variables';
import { AppRoute } from '../../../variables/variables';

import './granulates-counter-header.scss';

const GranulatesCounterHeader = (): JSX.Element => {
  return (
    <header className='granulates-counter-header'>
        <div className='granulates-counter-header__wrap container'>

          <NavLink to={AppRoute.GRANULATES_PAGE} className='granulates-counter-header__back-link'>
            <span className='visually-hidden'>powrót do menu głównego</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M9.95 21.475.475 12 9.95 2.525l1.325 1.325L3.125 12l8.15 8.15Z"/>
            </svg>
          </NavLink>

          <h1 className='granulates-counter-header__title'>{ComponentsTexts.GRANULATES_COUNTER_PAGE_TITLE}</h1>
          <GranulatesCounterNav/>
        </div>
    </header>
  )
}

export default GranulatesCounterHeader;
