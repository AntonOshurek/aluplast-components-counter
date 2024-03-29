import { Link, generatePath } from 'react-router-dom';
//components
import ThingItem from '../../item/thing-item/thing-item';
//types
import type { IItemDataType } from '../../../types/data-types';
//variables and constans
import { AppRoute } from '../../../variables/variables';
//styles
import './overview-item.scss';

interface OverviewItemPropsType {
  item: IItemDataType,
  path: AppRoute,
  itemAmountName: string,
};

const OverviewItem = ({item, path, itemAmountName}: OverviewItemPropsType): JSX.Element => {
  const UNID = item.UNID.toString();

  return (
      <li className='overview-item'>
        <Link to={generatePath(path, {UNID: UNID})} className='overview-item__link'>
          <ThingItem item={item} itemAmountName={itemAmountName}/>
        </Link>
      </li>
  );
};

export default OverviewItem;
