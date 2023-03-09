import { NavLink, useParams, generatePath } from 'react-router-dom';
//variables and consts
import { AppRoute, ComponentsTexts } from '../../../variables/variables';
//types
import type { SetActiveLinkType } from '../../../types/other-types';
//styles
// import './granulates-counter-nav.scss';

const GumsCounterNav = (): JSX.Element => {
  const {UNID} = useParams();

  const activeLinkClass = 'granulates-counter-nav__link--active';
  const basicLinkClass = 'granulates-counter-nav__link';

  const setActiveLink = ({isActive}: SetActiveLinkType) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <nav className='granulates-counter-nav'>
      <h2 className='visually-hidden'>Gums counter navigation panel</h2>
      <ul className='granulates-counter-nav__list'>
        <li className='granulates-counter-nav__item'>
          <NavLink to={generatePath(AppRoute.GUM_COUNTER, {UNID: (UNID ? UNID : '')})}
           end
           className={setActiveLink}>
            {ComponentsTexts.GUMS_COUNTER_BASIC_NAME}
          </NavLink>
        </li>
        <li className='granulates-counter-nav__item'>
          <NavLink to={AppRoute.GUM_COUNTER_CARDBOARD}
            className={setActiveLink}>
            {ComponentsTexts.GUMS_COUNTER_CARDBOARD_NAME}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default GumsCounterNav;
