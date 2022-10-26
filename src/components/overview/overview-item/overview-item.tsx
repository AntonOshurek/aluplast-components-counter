import { Link } from 'react-router-dom';

import ThingItem from '../../item/thing-item';

import { GranulateItemType } from '../../../types/data-types';

import './overview-item.scss';

type OverviewItemPropsType = {
  item: GranulateItemType,
}

const OverviewItem = ({item}: OverviewItemPropsType): JSX.Element => {

  const {UNID} = item;

  return (
      <li className='overview-item'>
        <Link to={`/granulates/${UNID}/counter`} className='overview-item__link'>
          <ThingItem item={item}/>
        </Link>
      </li>
  )
}

export default OverviewItem;
