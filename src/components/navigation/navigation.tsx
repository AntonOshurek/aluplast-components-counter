import { NavLink } from 'react-router-dom';

import { SetActiveLink } from '../../types/other-types';

import './navigation.scss';

const Navigation = (): JSX.Element => {

  const setActiveLink = ({isActive}: SetActiveLink) => isActive ? 'navigation__link unselectable navigation__link--active' : 'navigation__link unselectable';

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to='' className={setActiveLink}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path fill='#f8f8f8' d="M18.292 28.792h3.583V18.333h-3.583ZM20 15q.792 0 1.333-.521.542-.521.542-1.312 0-.834-.542-1.354-.541-.521-1.333-.521-.833 0-1.354.5-.521.5-.521 1.333 0 .792.542 1.333Q19.208 15 20 15Zm0 22.625q-3.667 0-6.875-1.375t-5.604-3.771q-2.396-2.396-3.771-5.625T2.375 20q0-3.667 1.396-6.875T7.562 7.5q2.396-2.417 5.605-3.771Q16.375 2.375 20 2.375q3.667 0 6.896 1.354t5.604 3.75q2.375 2.396 3.75 5.625T37.625 20q0 3.667-1.354 6.854-1.354 3.188-3.771 5.584-2.417 2.395-5.625 3.791T20 37.625Z"/>
            </svg>
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to='' className={setActiveLink}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path fill='#f8f8f8' d="m15.208 37.625-.875-5.5q-.5-.208-1.125-.563-.625-.354-1.083-.729l-5.167 2.292-4.833-8.583 4.542-3.417q-.042-.25-.042-.583v-1.188q0-.312.042-.604l-4.542-3.375 4.833-8.542 5.125 2.292q.459-.333 1.105-.708.645-.375 1.187-.584l.833-5.5h9.625l.792 5.5q.583.209 1.229.584.646.375 1.104.708l5.125-2.292 4.834 8.542-4.625 3.375q.041.292.062.646.021.354.021.604t-.042.604q-.041.354-.041.604l4.583 3.334-4.833 8.583-5.209-2.292q-.458.334-1.062.709-.604.375-1.104.541l-.834 5.542Zm4.75-11.5q2.584 0 4.375-1.792 1.792-1.791 1.792-4.375 0-2.583-1.792-4.375-1.791-1.791-4.375-1.791-2.583 0-4.375 1.791-1.791 1.792-1.791 4.375 0 2.584 1.791 4.375 1.792 1.792 4.375 1.792Z"/>
            </svg>
          </NavLink>
        </li>
        <li className='navigation__item'>
          <button type='button' className='navigation__link unselectable'>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path fill='#f8f8f8' d="M19.958 34.333q-5.958 0-10.125-4.187-4.166-4.188-4.166-10.104 0-5.917 4.166-10.146Q14 5.667 19.958 5.667q3.375 0 6.125 1.375t4.834 3.75V5.667h3.458v12.5H21.833v-3.459h7.417q-1.583-2.375-3.917-3.791Q23 9.5 19.958 9.5q-4.458 0-7.52 3.062-3.063 3.063-3.063 7.48 0 4.458 3.063 7.52 3.062 3.063 7.52 3.063 3.334 0 6.104-1.896 2.771-1.896 3.896-5.104h3.834q-1.209 4.75-5.063 7.729-3.854 2.979-8.771 2.979Z"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
