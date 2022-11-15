import { useLocation } from 'react-router-dom';
//components
import OverviewItem from '../overview-item/overview-item';
//variables and consts
import { AppRoute } from '../../../variables/variables';
//types
import { OverviewComponentDataType } from '../../../types/data-types';
//styles
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

  const generateItems = ():JSX.Element[] => {
    let itemsArray: JSX.Element[] = [];
    for (let item in data) {
      itemsArray.push(<OverviewItem item={data[item]} key={data[item].UNID} path={location}/>)
    }
    return itemsArray;
  }

  // old - commented 15.11.2022 Anton Oshurek refactoring. added generateItems function
  // const dataArray: BasicGranulatesDataType = [...Object.values(data)]
  // const allItems: JSX.Element[] = dataArray.map(item => <OverviewItem item={item} key={item.UNID} path={location}/>);

  return (
    <ul className='overview-list'>
      {generateItems()}
    </ul>
  )
}

export default OverviewList;
