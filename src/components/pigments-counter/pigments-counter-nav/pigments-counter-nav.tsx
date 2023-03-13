import { NavLink, useParams, generatePath } from 'react-router-dom';
//variables and consts
import { AppRoute, ComponentsTexts } from '../../../variables/variables';
//types
import type { SetActiveLinkType } from '../../../types/other-types';
//styles
import './pigments-counter-nav.scss';

const PigmentsCounterNav = (): JSX.Element => {
  const {UNID} = useParams();

  const activeLinkClass = 'pigments-counter-nav__link--active';
  const basicLinkClass = 'pigments-counter-nav__link';

  const setActiveLink = ({isActive}: SetActiveLinkType) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <nav className='pigments-counter-nav'>
      <h2 className='visually-hidden'>Pigments counter navigation panel</h2>
      <ul className='pigments-counter-nav__list'>
        <li className='pigments-counter-nav__item'>
          <NavLink to={generatePath(AppRoute.PIGMENTS_COUNTER, {UNID: (UNID ? UNID : '')})}
           end
           className={setActiveLink}>
            {ComponentsTexts.GRANULATES_COUNTER_BASIC_NAME}
          </NavLink>
        </li>
        <li className='pigments-counter-nav__item'>
          <NavLink to={AppRoute.PIGMENTS_COUNTER_VOREK}
            className={setActiveLink}>
            {ComponentsTexts.GRANULATES_COUNTER_VOREK_NAME}
          </NavLink>
        </li>
        <li className='pigments-counter-nav__item'>
          <NavLink to={AppRoute.PIGMENTS_COUNTER_CONTAINER}
            className={setActiveLink}>
            {ComponentsTexts.GRANULATES_COUNTER_CONTAINER_NAME}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PigmentsCounterNav;
