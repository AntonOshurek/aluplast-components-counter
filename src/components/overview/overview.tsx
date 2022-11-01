import OverviewHeader from './overview-header/overview-header';
import OverviewList from './overview-list/overview-list';
import { OverviewComponentDataType } from '../../types/data-types';

import './overview.scss';

interface OverviewPropsType {
  data: OverviewComponentDataType,
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
