import OverviewItem from '../overview-item/overview-item';

import { GranulateDataType } from '../../../types/granulate-data-types';

import './overview-list.scss';

type OverviewListPropsType = {
  data: GranulateDataType,
}

const OverviewList = ({data}: OverviewListPropsType): JSX.Element => {

  const allItems = data.map(item => <OverviewItem item={item} key={item.UNID}/>);

  return (
    <ul className='overview-list'>
      { allItems }
    </ul>
  )
}

export default OverviewList;
