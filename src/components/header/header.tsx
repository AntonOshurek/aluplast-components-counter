//components
import Navigation from '../navigation/navigation';
//styles
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className='header__wrap container'>
        <h1 className='visually-hidden'>Aluplast counter application</h1>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header;
