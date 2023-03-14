import { useState } from 'react';
//coponents
import LogsOverview from '../../logs-overview/logs-overview';
//types
import type { IItemDataType } from '../../../types/data-types';
//styles
import './component-overview-item.scss';

interface IComponentOverviewItemPropsType {
  item: IItemDataType,
};

const ComponentOverviewItem = ({item}: IComponentOverviewItemPropsType): JSX.Element => {

  const [logsStatus, setLogsStatus] = useState<Boolean>(false);

  const showLogsButtonHandler = () => {
    logsStatus ? setLogsStatus(false) : setLogsStatus(true);
  };

  return (
    <li className='components-overview-item' key={item.UNID}>
      <img className='components-overview-item__image' src={item.image} alt="" width={60} height={60}/>

      <h4 className='components-overview-item__title'>{item.name}</h4>

      <div className='components-overview-item__info'>
        <p className='components-overview-item__description'>{item.description}</p>
        <p className='components-overview-item__firm'>{item.firm}</p>
      </div>

      <span className='components-overview-item__amount'>
        {item.amount} kg
      </span>

      <button className='components-overview-item__show-logs' type='button' onClick={showLogsButtonHandler}>
        otwór logi
      </button>

      {

        logsStatus ? <LogsOverview logs={item.logs}/> : null
      }
    </li>
  );
};

export default ComponentOverviewItem;
