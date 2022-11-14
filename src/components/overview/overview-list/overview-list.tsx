import { useLocation } from 'react-router-dom';

import OverviewItem from '../overview-item/overview-item';
import { AppRoute } from '../../../variables/variables';
import { OverviewComponentDataType, BasicGranulatesDataType } from '../../../types/data-types';

import './overview-list.scss';

interface OverviewListPropsType {
  data: OverviewComponentDataType,
}

const OverviewList = ({data}: OverviewListPropsType): JSX.Element => {

  let location: AppRoute;

  //here checked opened page (granulates or guma) and send route for overviewItem component
  //inside overviewComponent generate link for granulatesCounter or gumaCounter
  switch(useLocation().pathname) {
    case AppRoute.GRANULATES_PAGE:
      location = AppRoute.GRANULATES_COUNTER;
      break;
    default:
      location = AppRoute.GRANULATES_PAGE;
  }

  const dataArray: BasicGranulatesDataType = [...Object.values(data)]
  const allItems: JSX.Element[] = dataArray.map(item => <OverviewItem item={item} key={item.UNID} path={location}/>);

  return (
    <ul className='overview-list'>
      { allItems }
    </ul>
  )
}

export default OverviewList;
