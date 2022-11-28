//utils
import { getFullDate } from '../../../utils/utils';
//variables and constants
import { ComponentsTexts } from '../../../variables/variables';
//styles
import './overview-header.scss';

const OverviewHeader = (): JSX.Element => {
  return (
    <div className='overview-header'>
      <h2 className='overview-header__title'>{ComponentsTexts.OVERVIEW_PAGE_TITLE}</h2>
      <span className='overview-header__date'>{getFullDate()}</span>
    </div>
  )
}

export default OverviewHeader;
