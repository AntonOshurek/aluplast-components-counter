import Navigation from '../navigation/navigation';

import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className='header__wrap container'>
        <h1 className='visually-hidden'>Granulates counter application</h1>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header;
