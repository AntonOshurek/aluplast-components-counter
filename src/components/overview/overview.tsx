import OverviewHeader from './overview-header/overview-header';
import OverviewList from './overview-list/overview-list';

import './overview.scss';

const Overview = (): JSX.Element => {
  return (
    <section className="overview container">

      <OverviewHeader/>
      <OverviewList/>

    </section>
  )
}

export default Overview;
