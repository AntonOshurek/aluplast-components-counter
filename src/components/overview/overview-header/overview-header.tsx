//utils
import { getFullDate } from '../../../utils/utils';
//styles
import './overview-header.scss';

const OverviewHeader = (): JSX.Element => {

  return (
    <div className='overview-header'>
      <h2 className='overview-header__title'>Granulates overview</h2>
      <span className='overview-header__date'>{getFullDate()}</span>
    </div>
  )
}

export default OverviewHeader;
