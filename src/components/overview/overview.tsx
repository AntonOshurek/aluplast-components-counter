//components
import OverviewHeader from './overview-header/overview-header';
import OverviewList from './overview-list/overview-list';
//types
import type { DataTypes } from '../../types/data-types';
//styles
import './overview.scss';

interface OverviewPropsType {
  data: DataTypes,
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
