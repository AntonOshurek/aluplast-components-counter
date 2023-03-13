//components
import Header from '../../components/header/header';
import Overview from '../../components/overview/overview';
//store
import { useAppSelector } from '../../hooks/hooks';
//types
import { GetStateSelectorType } from '../../types/selectors-types';
import type { IAdaptedDataType } from '../../types/data-types';
//styles
import './overview-page.scss';

interface IOverviewPagePropsType {
  getStateSelector: GetStateSelectorType,
};

const OverviewPage = ({getStateSelector}: IOverviewPagePropsType): JSX.Element => {
  const data: IAdaptedDataType = useAppSelector(getStateSelector);

  return (
    <div className='overview-page'>
      <Header />
      <main className='overview-page__main'>
        <Overview data={data}/>
      </main>
    </div>
  );
};

export default OverviewPage;
