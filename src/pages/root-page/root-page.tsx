import { Link } from 'react-router-dom';
//components
import Header from '../../components/header/header';
//variables and consts
import { ComponentsTexts } from '../../variables/variables';
import { AppRoute } from '../../variables/variables';
//images
import pigmentsBaner from './all-pigments.jpg';
import gumBanner from './all-gum.jpg';
import chemistryBanner from './all-chemia.jpg';
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
              <Link className='root-page__link' to={AppRoute.PIGMENTS_PAGE}>
                <h3 className='root-page__link-title'>{ComponentsTexts.PIGMENTS_COUNTER_NAME}</h3>
                <img className='root-page__link-image' src={pigmentsBaner} width='150' height='150' alt="colored pigments" />
              </Link>
            </li>
            <li className='root-page__item'>
              <Link className='root-page__link' to={AppRoute.GUM_PAGE}>
                <h3 className='root-page__link-title'>{ComponentsTexts.GUM_COUNTER_NAME}</h3>
                <img className='root-page__link-image' src={gumBanner} width='150' height='150' alt="czarna uszczelka" />
              </Link>
            </li>
            <li className='root-page__item'>
              <Link className='root-page__link' to={AppRoute.CHEMISTRY_PAGE}>
                <h3 className='root-page__link-title'>{ComponentsTexts.CHEMISTRY_COUNTER_NAME}</h3>
                <img className='root-page__link-image' src={chemistryBanner} width='150' height='150' alt="chemia" />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default RootPage;
