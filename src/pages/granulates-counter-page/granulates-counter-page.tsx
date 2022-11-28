import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
//components
import { GranulatesCounterHeader } from '../../components/granulates-counter';
import ThingItem from '../../components/item/thing-item/thing-item';
import LogInfo from '../../components/logInfo/log-info';
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

  const [showThingLogsModal, setShowThingLogsModal] = useState<boolean>(false);

  const showItemLogs = (): void => {
    setShowThingLogsModal(true);
  }

  const closeItemLogs = (evt: any): void => {
    if(!evt.target.closest('.thing-modal__wrap')) {
      setShowThingLogsModal(false);
    }
  }

  return (
    <div className='granulates-counter-page'>
      <GranulatesCounterHeader/>
      <main className='granulates-counter-page__main'>

        <div className='granulates-counter-page__wrap container'>
          <section className='granulates-counter-page__counter-info'>
            <h2 className='granulates-counter-page__title'>Przegląd licznika</h2>
            <div className='granulates-counter-page__item-wrap' onClick={showItemLogs}>
              <ThingItem item={currentItem}/>
            </div>
          </section>

          <Outlet/>
        </div>
      </main>

      {
        showThingLogsModal ? <LogInfo currentItem={currentItem} closeModal={closeItemLogs}/> : null
      }

    </div>
  )
}

export default GranulatesCounterPage;
