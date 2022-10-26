import { Link } from 'react-router-dom';

import Header from '../../components/header/header';

import './root-page.scss';

const RootPage = (): JSX.Element => {
  return(
    <div className='root-page'>
      <Header />
      <main className='root-page__main'>
        <div className='root-page__wrap container'>
          <Link to={'/granulates'} className='root-page__link'>
            <h2 className='root-page__link-title'>Granulates</h2>
            <img className='root-page__link-image' src="../images/all-granulates.jpg" width='200' height='200' alt="" />
          </Link>
        </div>
      </main>
    </div>
  )
}

export default RootPage;
