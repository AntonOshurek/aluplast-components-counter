//components
import Header from '../../components/header/header';
import Overview from '../../components/overview/overview';
//store
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetGranulatesState } from '../../store/selectors/selectors';
//types
import type { DataTypes } from '../../types/data-types';
//styles
import './granulates-page.scss';

const GranulatesPage = (): JSX.Element => {
  const data: DataTypes = useAppSelector(SelectorGetGranulatesState);

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
