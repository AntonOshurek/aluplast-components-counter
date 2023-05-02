//components
import { ButtonRemove } from '../controls';
//store
import { useAppDispatch } from '../../hooks/hooks';
//variables and constants
import { ComponentsTexts } from '../../variables/variables';
//types
import type { IItemDataType } from '../../types/data-types';
import { ClearItemActionType } from '../../types/action-types';
//styles
import './log-info.scss';

interface ILogInfoPropsType {
  closeModal: (evt: any) => void,
  currentItem: IItemDataType,
  clearItemAction: ClearItemActionType,
};

const LogInfo = ({ currentItem, closeModal, clearItemAction }: ILogInfoPropsType): JSX.Element => {
  const dispatch = useAppDispatch();

  const removeCurrentData = (): void => {
    dispatch(clearItemAction({ id: currentItem.UNID }));
  };

  const generateItems = (): JSX.Element[] => {
    let itemsArray: JSX.Element[] = [];

    for (let item in currentItem.logs) {
      itemsArray.push(
        <section className='thing-modal__item' key={item}>
          <h4 className='thing-modal__item-name'>{item}</h4>
          <p className='thing-modal__item-value'>
            {currentItem.logs[item].map(item => ` ${item} ,`)}
          </p>
        </section>
      );
    };
    return itemsArray;
  };

  return (
    <article className='thing-modal' onClick={closeModal}>
      <div className='thing-modal__wrap'>
        <h3 className='thing-modal__title'>Logi licznika: <br /> {currentItem.name}</h3>
        {generateItems()}
        <div className='thing-modal__controls'>
          <ButtonRemove
            buttonName={ComponentsTexts.SETTING_RESET_COUNTER_DATA}
            onButtonClickHandler={removeCurrentData}
            dataToDeleteName={currentItem.name}
          />
        </div>
      </div>
    </article>
  );
};

export default LogInfo;
