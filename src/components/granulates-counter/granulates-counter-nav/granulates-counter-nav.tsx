import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { SetActiveLink } from '../../../types/other-types';

import './granulates-counter-nav.scss';

const GranulatesCounterNav = (): JSX.Element => {

  const {UNID} = useParams();

  const activeLinkClass = 'granulates-counter-nav__item--active';
  const basicLinkClass = 'granulates-counter-nav__item';

  const setActiveLink = ({isActive}: SetActiveLink) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <nav className='granulates-counter-nav'>
      <h2 className='visually-hidden'>Granulates counter navigation panel</h2>
      <ul className='granulates-counter-nav__list'>
        <NavLink to={`/granulates/${UNID}/`} end className={setActiveLink}>
          <a className='granulates-counter-nav__link'>Counter</a>
        </NavLink>
        <NavLink to={`/granulates/${UNID}/vorek`} className={setActiveLink}>
          <a className='granulates-counter-nav__link'>Vorek</a>
        </NavLink>
        <NavLink to={`/granulates/${UNID}/container`} className={setActiveLink}>
          <a className='granulates-counter-nav__link'>container</a>
        </NavLink>
      </ul>
    </nav>
  );
}

export default GranulatesCounterNav;
