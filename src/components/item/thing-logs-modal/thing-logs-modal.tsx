//styles
import './thing-modal.scss';

interface ThingLogsModalPropsType {
  closeModal: (evt: any) => void,
  logs: {
    [key: string]: number[],
  }
}

const ThingLogsModal = ({logs, closeModal}: ThingLogsModalPropsType): JSX.Element => {

  const generateItems = ():JSX.Element[] => {
    let itemsArray: JSX.Element[] = [];
    for (let item in logs) {
      itemsArray.push(
        <section className='thing-modal__item' key={item}>
          <h4 className='thing-modal__item-name'>{item}</h4>
          <p className='thing-modal__item-value'>
            {logs[item].map(item => ` + ${item} kg ,`)}
          </p>
        </section>
      )
    }
    return itemsArray;
  }

  return (
    <article className='thing-modal' onClick={closeModal}>
      <div className='thing-modal__wrap'>
        <h3 className='thing-modal__title'>Logi licznika</h3>
      {generateItems()}
      </div>
    </article>
  )
}

export default ThingLogsModal;
