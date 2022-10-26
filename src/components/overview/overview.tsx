import OverviewHeader from './overview-header/overview-header';
import OverviewList from './overview-list/overview-list';

import { GranulateDataType } from '../../types/granulate-data-types';

import './overview.scss';

type OverviewPropsType = {
  data: GranulateDataType
}

const Overview = ({data}: OverviewPropsType): JSX.Element => {

  return (
    <section className="overview container">

      <OverviewHeader/>
      <OverviewList data={data}/>

    </section>
  )
}

export default Overview;
