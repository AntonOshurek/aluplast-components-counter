import { GranulateDataType } from '../../../types/granulate-data-types';

import './overview-list.scss';

type OverviewListPropsType = {
  data: GranulateDataType,
}

const OverviewList = ({data}: OverviewListPropsType): JSX.Element => {

  // data.map((item) => {
  //   console.log(item)
  // })

  return (
    <ul className='overview-list'>

    </ul>
  )
}

export default OverviewList;
