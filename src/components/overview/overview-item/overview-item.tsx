import { Link, generatePath } from 'react-router-dom';

import ThingItem from '../../item/thing-item';
import { ThingItemComponentDataType } from '../../../types/data-types';
import { AppRoute } from '../../../variables/variables';

import './overview-item.scss';

export type Routes = AppRoute;

interface OverviewItemPropsType {
  item: ThingItemComponentDataType,
  path: AppRoute,
}

const OverviewItem = ({item, path}: OverviewItemPropsType): JSX.Element => {

  const UNID = item.UNID.toString();

  return (
      <li className='overview-item'>
        <Link to={generatePath(path, {UNID: UNID})} className='overview-item__link'>
          <ThingItem item={item}/>
        </Link>
      </li>
  )
}

export default OverviewItem;
