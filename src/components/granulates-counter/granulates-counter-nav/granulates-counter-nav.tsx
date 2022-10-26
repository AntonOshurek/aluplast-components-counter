import './granulates-counter-nav.scss';

const GranulatesCounterNav = (): JSX.Element => {
  return (
    <nav className='granulates-counter-nav'>
      <h2 className='visually-hidden'>Granulates counter navigation panel</h2>
      <ul className='granulates-counter-nav__list'>
        <li className='granulates-counter-nav__item'>
          <a className='granulates-counter-nav__link'>Vorek</a>
        </li>
        <li className='granulates-counter-nav__item'>
          <a className='granulates-counter-nav__link'>container</a>
        </li>
        <li className='granulates-counter-nav__item'>
          <a className='granulates-counter-nav__link'>Counter</a>
        </li>
      </ul>
    </nav>
  );
}

export default GranulatesCounterNav;
