import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
//components
import ThingItem from '../../components/item/thing-item/thing-item';
import LogInfo from '../../components/logInfo/log-info';
//store
import { useAppSelector } from '../../hooks/hooks';
//variables and constants
import { ComponentsTexts } from '../../variables/variables';
//types
import type { GetItemSelectorAction } from '../../types/selectors-types';
import type { ClearItemActionType } from '../../types/action-types';
import type { IItemDataType } from '../../types/data-types';
//styles
import './counter-page.scss';

interface ICounterPagePropsType {
  getItemSelector: GetItemSelectorAction,
  clearItemAction: ClearItemActionType,
  counterHeader: React.ReactNode;
};

const CounterPage = ({getItemSelector, clearItemAction, counterHeader}: ICounterPagePropsType): JSX.Element => {
  const {UNID = 100} = useParams();

  const currentItem: IItemDataType = useAppSelector(getItemSelector(+UNID));

  const [showThingLogsModal, setShowThingLogsModal] = useState<boolean>(false);

  const showItemLogs = (): void => {
    setShowThingLogsModal(true);
  };

  const closeItemLogs = (evt: any): void => {
    if(!evt.target.closest('.thing-modal__wrap')) {
      setShowThingLogsModal(false);
    };
  };

  return (
    <div className='counter-page'>
      {counterHeader}

    <main className='counter-page__main'>

      <div className='counter-page__wrap container'>
        <section className='counter-page__counter-info'>
          <h2 className='counter-page__title'>{ComponentsTexts.COUNTER_PAGE_TITLE}</h2>
          <div className='counter-page__item-wrap' onClick={showItemLogs}>
            <ThingItem item={currentItem}/>
          </div>
        </section>

        <Outlet/>
      </div>
    </main>

    {
      showThingLogsModal ? <LogInfo clearItemAction={clearItemAction} currentItem={currentItem} closeModal={closeItemLogs}/> : null
    }

  </div>
  );
};

export default CounterPage;
