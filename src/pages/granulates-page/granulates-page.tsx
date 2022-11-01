import Header from '../../components/header/header';
import Overview from '../../components/overview/overview';

import { useAppSelector } from '../../hooks/hooks';
import { getGranulatesStateSelector } from '../../store/selectors/selectors';

import { OverviewComponentDataType } from '../../types/data-types';

import './granulates-page.scss';

const GranulatesPage = (): JSX.Element => {
  const data: OverviewComponentDataType = useAppSelector(getGranulatesStateSelector)

  return (
    <div className='granulates-page'>
      <Header />
      <main className='granulates-page__main'>
        <Overview data={data}/>
      </main>
    </div>
  )
}

export default GranulatesPage;
