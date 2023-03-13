//components
import Navigation from '../navigation/navigation';
//variables and constants
import { ComponentsTexts } from '../../variables/variables';
//styles
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className='header__wrap container'>
        <h1 className='visually-hidden'>{ComponentsTexts.APPLICATION_HEADER_TITLE}</h1>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header;
