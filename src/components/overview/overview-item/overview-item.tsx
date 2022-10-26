import { Link } from 'react-router-dom';

import { GranulateItemType } from '../../../types/granulate-data-types';

import './overview-item.scss';

type OverviewItemPropsType = {
  item: GranulateItemType,
}

const OverviewItem = ({item}: OverviewItemPropsType): JSX.Element => {

  const {name, UNID} = item;

  return (
      <li className='overview-item'>
        <Link to={`/granulates/${UNID}`} className='overview-item__link'>
          <div className='overview-item__image-wrap'>
            <img className='overview-item__image' src="./images/granulat-img.jpg" width='100' height='100' alt="" />
          </div>
          <div className='overview-item__info-block'>
            <h3 className='overview-item__name'>{name}</h3>
            <p className='overview-item__description'>granulates description information</p>
          </div>
          <span className='overview-item__amount'>250 kg</span>
        </Link>
      </li>
  )
}

export default OverviewItem;
