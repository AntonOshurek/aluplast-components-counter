//components
import LogItem from '../item/log-item/log-item';
//types
import type { ILogsDataType } from '../../types/data-types';
//styles
import './logs-overview.scss';

interface ILogsOverviewPropsType {
  logs: ILogsDataType,
};

const LogsOverview = ({logs}: ILogsOverviewPropsType): JSX.Element => {

  const generateLogs = (): JSX.Element[] => {
    let logsArray: JSX.Element[] = [];

    for(let key in logs) {
      logsArray.push(<LogItem log={logs[key]} logName={key} key={key}/>)
    };

    return logsArray;
  };

  return (
    <article className='logs-overview'>
      <h4 className='logs-overview__title'>logi</h4>

      {generateLogs()}

    </article>
  );
};

export default LogsOverview;
