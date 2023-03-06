import { useLocation } from 'react-router-dom';
//components
import OverviewItem from '../overview-item/overview-item';
//variables and consts
import { AppRoute } from '../../../variables/variables';
//types
import type { DataTypes } from '../../../types/data-types';
//styles
import './overview-list.scss';

interface OverviewListPropsType {
  data: DataTypes,
};

const OverviewList = ({data}: OverviewListPropsType): JSX.Element => {
  let location: AppRoute;

  //here checked opened page (granulates or guma) and send route for overviewItem component
  //inside overviewComponent generate link for granulatesCounter or gumaCounter
  switch(useLocation().pathname) {
    case AppRoute.GRANULATES_PAGE:
      location = AppRoute.GRANULATES_COUNTER;
      break;
    case AppRoute.GUM_PAGE:
      location = AppRoute.GUM_PAGE;
      break;
    default:
      location = AppRoute.GRANULATES_PAGE;
  };

  const generateItems = ():JSX.Element[] => {
    let itemsArray: JSX.Element[] = [];
    for (let item in data) {
      itemsArray.push(<OverviewItem item={data[item]} key={data[item].UNID} path={location}/>)
    }
    return itemsArray;
  };

  return (
    <ul className='overview-list'>
      {generateItems()}
    </ul>
  );
};

export default OverviewList;
