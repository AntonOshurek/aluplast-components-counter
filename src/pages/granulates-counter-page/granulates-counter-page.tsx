import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//components
import { GranulatesCounterHeader } from '../../components/granulates-counter';
import ThingItem from '../../components/item/thing-item';
//store
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetCurrentGranulates } from '../../store/selectors/selectors';
//types
import { IGranulateItemType } from '../../types/data-types';
//styles
import './granulates-counter-page.scss';

const GranulatesCounterPage = (): JSX.Element => {
  const {UNID = 100} = useParams();

  const currentItem: IGranulateItemType = useAppSelector(SelectorGetCurrentGranulates(+UNID));

  return (
    <div className='granulates-counter-page'>
      <GranulatesCounterHeader/>
      <main className='granulates-counter-page__main'>

        <div className='granulates-counter-page__wrap container'>
          <section className='granulates-counter-page__counter-info'>
            <h2 className='granulates-counter-page__title'>Counter</h2>
            <ThingItem item={currentItem}/>
          </section>

          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default GranulatesCounterPage;
