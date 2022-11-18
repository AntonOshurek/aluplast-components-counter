import { NavLink, useParams, generatePath } from 'react-router-dom';
//variables and consts
import { AppRoute, ComponentsTexts } from '../../../variables/variables';
//types
import type { SetActiveLinkType } from '../../../types/other-types';
//styles
import './granulates-counter-nav.scss';

const GranulatesCounterNav = (): JSX.Element => {
  const {UNID} = useParams();

  const activeLinkClass = 'granulates-counter-nav__link--active';
  const basicLinkClass = 'granulates-counter-nav__link';

  const setActiveLink = ({isActive}: SetActiveLinkType) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <nav className='granulates-counter-nav'>
      <h2 className='visually-hidden'>Granulates counter navigation panel</h2>
      <ul className='granulates-counter-nav__list'>
        <li className='granulates-counter-nav__item'>
          <NavLink to={generatePath(AppRoute.GRANULATES_COUNTER, {UNID: (UNID ? UNID : '')})}
           end
           className={setActiveLink}>
            {ComponentsTexts.GRANULATES_COUNTER_BASIC_NAME}
          </NavLink>
        </li>
        <li className='granulates-counter-nav__item'>
          <NavLink to={AppRoute.GRANULATES_COUNTER_VOREK}
            className={setActiveLink}>
            {ComponentsTexts.GRANULATES_COUNTER_VOREK_NAME}
          </NavLink>
        </li>
        <li className='granulates-counter-nav__item'>
          <NavLink to={AppRoute.GRANULATES_COUNTER_CONTAINER}
            className={setActiveLink}>
            {ComponentsTexts.GRANULATES_COUNTER_CONTAINER_NAME}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default GranulatesCounterNav;
