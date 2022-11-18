import { Link } from 'react-router-dom';
//components
import Header from '../../components/header/header';
import { AppRoute } from '../../variables/variables';
//variables and consts
import { ComponentsTexts } from '../../variables/variables';
//images
import granulatesBaner from './all-granulates.jpg';
//styles
import './root-page.scss';

const RootPage = (): JSX.Element => {
  return(
    <div className='root-page'>
      <Header />
      <main className='root-page__main'>
        <div className='root-page__wrap container'>
          <section className='root-page__info'>
            <h2>{ComponentsTexts.ROOT_PAGE_TITLE}</h2>
          </section>
          <ul className='root-page__list'>
            <li className='root-page__item'>
              <Link to={AppRoute.GRANULATES_PAGE} className='root-page__link'>
                <h3 className='root-page__link-title'>{ComponentsTexts.GRANULATES_COUNTER_NAME}</h3>
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
