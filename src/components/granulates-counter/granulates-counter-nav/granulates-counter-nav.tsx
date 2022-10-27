import { NavLink, useParams, generatePath } from 'react-router-dom';

import { AppRoute } from '../../../variables/variables';
import { SetActiveLink } from '../../../types/other-types';

import './granulates-counter-nav.scss';

const GranulatesCounterNav = (): JSX.Element => {
  const {UNID} = useParams();

  const activeLinkClass = 'granulates-counter-nav__link--active';
  const basicLinkClass = 'granulates-counter-nav__link';

  const setActiveLink = ({isActive}: SetActiveLink) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <nav className='granulates-counter-nav'>
      <h2 className='visually-hidden'>Granulates counter navigation panel</h2>
      <ul className='granulates-counter-nav__list'>
        <li className='granulates-counter-nav__item'>
          <NavLink to={generatePath(AppRoute.GRANULATES_COUNTER, {UNID: (UNID ? UNID : '')})}
           end
           className={setActiveLink}>
            Counter
          </NavLink>
        </li>
        <li className='granulates-counter-nav__item'>
          <NavLink to={AppRoute.GRANULATES_COUNTER_VOREK}
            className={setActiveLink}>
            Vorek
          </NavLink>
        </li>
        <li className='granulates-counter-nav__item'>
          <NavLink to={AppRoute.GRANULATES_COUNTER_CONTAINER}
            className={setActiveLink}>
            container
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default GranulatesCounterNav;
