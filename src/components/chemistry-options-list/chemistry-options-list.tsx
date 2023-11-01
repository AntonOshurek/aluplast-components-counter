import { Link } from 'react-router-dom';
//variables
import { AppRoute, ComponentsTexts } from '../../variables/variables';
//images
import veneerBanner from './okleina.jpg';
import extrusionBanner from './ekstruzja.jpg';
//styles
import './chemistry-options-list.scss';

const ChemistryOptionsList = (): JSX.Element => {
  return (
    <ul className='chemistry-options-list'>
      <li className='chemistry-options-list__item'>
        <Link className='chemistry-options-list__link' to={AppRoute.CHEMISTRY_VENEER}>
          <h3 className='chemistry-options-list__link-title'>{ComponentsTexts.CHEMISTRY_OPTION_EXTRUSION}</h3>
          <img className='chemistry-options-list__link-image' src={extrusionBanner} width='150' height='150' alt="Ekstruzja" />
        </Link>
      </li>
      <li className='chemistry-options-list__item'>
        <Link className='chemistry-options-list__link' to={AppRoute.CHEMISTRY_EXTRUSION}>
          <h3 className='chemistry-options-list__link-title'>{ComponentsTexts.CHEMISTRY_OPTION_VENEER}</h3>
          <img className='chemistry-options-list__link-image' src={veneerBanner} width='150' height='150' alt="Okleina" />
        </Link>
      </li>
    </ul>
  );
};

export default ChemistryOptionsList;
