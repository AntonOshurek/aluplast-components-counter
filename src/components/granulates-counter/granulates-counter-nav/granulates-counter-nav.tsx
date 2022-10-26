import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { getRouteWithUNID } from '../../../utils/utils';

import { SetActiveLink } from '../../../types/other-types';

import './granulates-counter-nav.scss';

const GranulatesCounterNav = (): JSX.Element => {

  const {UNID} = useParams();

  console.log(getRouteWithUNID.container(Number(UNID)))

  const activeLinkClass = 'granulates-counter-nav__link--active';
  const basicLinkClass = 'granulates-counter-nav__link';

  const setActiveLink = ({isActive}: SetActiveLink) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <nav className='granulates-counter-nav'>
      <h2 className='visually-hidden'>Granulates counter navigation panel</h2>
      <ul className='granulates-counter-nav__list'>
        <li className='granulates-counter-nav__item'>
          <NavLink to={`/granulates/${UNID}/`} end className={setActiveLink}>Counter</NavLink>
        </li>
        <li className='granulates-counter-nav__item'>
          <NavLink to={`/granulates/${UNID}/vorek`} className={setActiveLink}>Vorek</NavLink>
        </li>
        <li className='granulates-counter-nav__item'>
          <NavLink to={getRouteWithUNID.container(Number(UNID))} className={setActiveLink}>container</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default GranulatesCounterNav;
