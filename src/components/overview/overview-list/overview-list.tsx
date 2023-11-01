import { useLocation } from 'react-router-dom';
//components
import OverviewItem from '../overview-item/overview-item';
//variables and constans
import { AppRoute } from '../../../variables/variables';
//types
import type { IAdaptedDataType } from '../../../types/data-types';
//styles
import './overview-list.scss';

interface OverviewListPropsType {
  data: IAdaptedDataType,
};

const OverviewList = ({data}: OverviewListPropsType): JSX.Element => {
  let location: AppRoute;
  let itemAmountName: string;

  //here checked opened page (pigments or guma) and send route for overviewItem component
  //inside overviewComponent generate link for pigmentsCounter or gumaCounter
  switch(useLocation().pathname) {
    case AppRoute.PIGMENTS_PAGE:
      location = AppRoute.PIGMENTS_COUNTER;
      itemAmountName = 'kg';
      break;
    case AppRoute.GUM_PAGE:
      location = AppRoute.GUM_COUNTER;
      itemAmountName = 'kg';
      break;
    case AppRoute.CHEMISTRY_VENEER:
      location = AppRoute.CHEMISTRY_VENEER_COUNTER;
      itemAmountName = 'ilość';
      break;
    case AppRoute.CHEMISTRY_EXTRUSION:
      location = AppRoute.CHEMISTRY_EXTRUSION_COUNTER;
      itemAmountName = 'ilość';
      break;
    default:
      location = AppRoute.ROOT;
  };

  const generateItems = ():JSX.Element[] => {
    let itemsArray: JSX.Element[] = [];
    for (let item in data) {
      itemsArray.push(<OverviewItem item={data[item]} key={data[item].UNID} path={location} itemAmountName={itemAmountName}/>)
    };
    return itemsArray;
  };

  return (
    <ul className='overview-list'>
      {generateItems()}
    </ul>
  );
};

export default OverviewList;
