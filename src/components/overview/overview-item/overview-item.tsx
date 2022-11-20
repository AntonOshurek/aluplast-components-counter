import { Link, generatePath } from 'react-router-dom';
//components
import ThingItem from '../../item/thing-item/thing-item';
//types
import type { ItemsTypes } from '../../../types/data-types';
//variables and consts
import { AppRoute } from '../../../variables/variables';
//styles
import './overview-item.scss';

interface OverviewItemPropsType {
  item: ItemsTypes,
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
