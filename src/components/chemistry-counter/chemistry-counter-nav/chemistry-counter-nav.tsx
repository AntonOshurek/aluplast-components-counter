import { NavLink, useParams, generatePath } from 'react-router-dom';
//variables and consts
import { AppRoute, ComponentsTexts } from '../../../variables/variables';
//types
import type { SetActiveLinkType } from '../../../types/other-types';
//styles
import './chemistry-counter-nav.scss';

const ChemistryCounterNav = (): JSX.Element => {
  const {UNID} = useParams();

  const activeLinkClass = 'chemistry-counter-nav__link--active';
  const basicLinkClass = 'chemistry-counter-nav__link';

  const setActiveLink = ({isActive}: SetActiveLinkType) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <nav className='chemistry-counter-nav'>
      <h2 className='visually-hidden'>Chemistry counter navigation panel</h2>
      <ul className='chemistry-counter-nav__list'>
        <li className='chemistry-counter-nav__item'>
          <NavLink to={generatePath(AppRoute.CHEMISTRY_COUNTER, {UNID: (UNID ? UNID : '')})}
           end
           className={setActiveLink}>
            {ComponentsTexts.CHEMISTRY_COUNTER_NAME}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ChemistryCounterNav;
