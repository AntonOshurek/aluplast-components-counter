import { Link, generatePath } from 'react-router-dom';
//components
import ThingItem from '../../item/thing-item';
//types
import type { ThingItemComponentDataType } from '../../../types/data-types';
//variables and consts
import { AppRoute } from '../../../variables/variables';
//styles
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
