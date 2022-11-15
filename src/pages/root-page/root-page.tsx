import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import { AppRoute } from '../../variables/variables';

import granulatesBaner from './all-granulates.jpg';

import './root-page.scss';

const RootPage = (): JSX.Element => {
  return(
    <div className='root-page'>
      <Header />
      <main className='root-page__main'>
        <div className='root-page__wrap container'>
          <section className='root-page__info'>
            <h2>Aluplast Counter main page</h2>
          </section>
          <ul className='root-page__list'>
            <li className='root-page__item'>
              <Link to={AppRoute.GRANULATES_PAGE} className='root-page__link'>
                <h3 className='root-page__link-title'>Granulates</h3>
                <img className='root-page__link-image' src={granulatesBaner} width='200' height='200' alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default RootPage;
