import { NavLink } from 'react-router-dom';
//variables and consts
import { AppRoute } from '../../variables/variables';
//types
import type { SetActiveLinkType } from '../../types/other-types';
//styles
import './navigation.scss';

const Navigation = (): JSX.Element => {

  const activeLinkClass = 'navigation__link--active';
  const basicLinkClass = 'navigation__link unselectable';

  const setActiveLink = ({isActive}: SetActiveLinkType) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <nav className='navigation'>
      <h2 className='visually-hidden'>Application navigation panel</h2>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to='' className='navigation__link unselectable'>
            <span className='visually-hidden'>Information about application</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path fill='#000' d="M18.292 28.792h3.583V18.333h-3.583ZM20 15q.792 0 1.333-.521.542-.521.542-1.312 0-.834-.542-1.354-.541-.521-1.333-.521-.833 0-1.354.5-.521.5-.521 1.333 0 .792.542 1.333Q19.208 15 20 15Zm0 22.625q-3.667 0-6.875-1.375t-5.604-3.771q-2.396-2.396-3.771-5.625T2.375 20q0-3.667 1.396-6.875T7.562 7.5q2.396-2.417 5.605-3.771Q16.375 2.375 20 2.375q3.667 0 6.896 1.354t5.604 3.75q2.375 2.396 3.75 5.625T37.625 20q0 3.667-1.354 6.854-1.354 3.188-3.771 5.584-2.417 2.395-5.625 3.791T20 37.625Z"/>
            </svg>
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to={AppRoute.ROOT} end className={setActiveLink}>
            <span className='visually-hidden'>Go to home page</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path fill='#000' d="M5.708 36V14.542l14.334-10.75 14.291 10.75V36H22.417V24.292h-4.834V36Z"/>
            </svg>
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to='' className='navigation__link unselectable'>
            <span className='visually-hidden'>Add new card for overview</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path fill='#000' d="M18.167 28.708h3.708v-6.875h6.833v-3.708h-6.833v-6.833h-3.708v6.833h-6.875v3.708h6.875ZM8 36q-1.625 0-2.812-1.188Q4 33.625 4 32V8q0-1.625 1.188-2.812Q6.375 4 8 4h24q1.625 0 2.812 1.188Q36 6.375 36 8v24q0 1.625-1.188 2.812Q33.625 36 32 36Z"/>
            </svg>
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to={AppRoute.SETTINGS} className={setActiveLink}>
            <span className='visually-hidden'>Go to settings page</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path fill='#000' d="m15.208 37.625-.875-5.5q-.5-.208-1.125-.563-.625-.354-1.083-.729l-5.167 2.292-4.833-8.583 4.542-3.417q-.042-.25-.042-.583v-1.188q0-.312.042-.604l-4.542-3.375 4.833-8.542 5.125 2.292q.459-.333 1.105-.708.645-.375 1.187-.584l.833-5.5h9.625l.792 5.5q.583.209 1.229.584.646.375 1.104.708l5.125-2.292 4.834 8.542-4.625 3.375q.041.292.062.646.021.354.021.604t-.042.604q-.041.354-.041.604l4.583 3.334-4.833 8.583-5.209-2.292q-.458.334-1.062.709-.604.375-1.104.541l-.834 5.542Zm4.75-11.5q2.584 0 4.375-1.792 1.792-1.791 1.792-4.375 0-2.583-1.792-4.375-1.791-1.791-4.375-1.791-2.583 0-4.375 1.791-1.791 1.792-1.791 4.375 0 2.584 1.791 4.375 1.792 1.792 4.375 1.792Z"/>
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
