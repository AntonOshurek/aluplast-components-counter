//styles
import './log-item.scss';

interface ILogsItemPropsType {
  log: string[],
  logName: string,
};

const LogItem = ({log, logName}: ILogsItemPropsType): JSX.Element => {
  return (
    <section className='log-item'>
      <h4 className='log-item__name'>{logName}</h4>
      <p className='log-item__value'>
        {log.map(item => ` ${item} ,`)}
      </p>
    </section>
  );
};

export default LogItem;
