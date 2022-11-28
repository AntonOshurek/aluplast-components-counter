//components
import { ButtonRemove } from '../controls';
//store
import { useAppDispatch } from '../../hooks/hooks';
import { clearItemAction } from '../../store/slices/counter-slice';
//types
import { IGranulateItemType } from '../../types/data-types';
//variables and constants
import { GranulatesLogsTitleNames } from '../../variables/variables';
//styles
import './log-info.scss';

interface ILogInfoPropsType {
  closeModal: (evt: any) => void,
  currentItem: IGranulateItemType
}

const LogInfo = ({currentItem, closeModal}: ILogInfoPropsType): JSX.Element => {

  const dispatch = useAppDispatch();

  const removeCurrentData = (): void => {
    dispatch(clearItemAction({id: currentItem.UNID}))
  }

  const generateItems = ():JSX.Element[] => {
    let itemsArray: JSX.Element[] = [];

    for (let item in currentItem.logs) {
      itemsArray.push(
        <section className='thing-modal__item' key={item}>
          <h4 className='thing-modal__item-name'>{GranulatesLogsTitleNames[item]}</h4>
          <p className='thing-modal__item-value'>
            {currentItem.logs[item].map(item => ` ${item} kg ,`)}
          </p>
        </section>
      )
    }
    return itemsArray;
  }

  return (
    <article className='thing-modal' onClick={closeModal}>
      <div className='thing-modal__wrap'>
        <h3 className='thing-modal__title'>Logi licznika: <br/> {currentItem.name}</h3>
        {generateItems()}
        <div className='thing-modal__controls'>
          <ButtonRemove
            onButtonClickHandler={removeCurrentData}
            dataToDeleteName={currentItem.name}
          />
        </div>
      </div>
    </article>
  )
}

export default LogInfo;
