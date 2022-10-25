import Navigation from '../navigation/navigation';

import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className='header__wrap container'>
        <h1>title</h1>

        <Navigation/>
      </div>
    </header>
  )
}

export default Header;
