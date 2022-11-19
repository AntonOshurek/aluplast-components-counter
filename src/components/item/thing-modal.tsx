import './thing-modal.scss';

import { MouseEventHandler } from 'react';

interface ThingModalPropsType {
  closeModal: (evt: any) => void,
  logs: {
    [key: string]: number[],
  }
}

const ThingModal = ({logs, closeModal}: ThingModalPropsType): JSX.Element => {

  const generateItems = ():JSX.Element[] => {
    let itemsArray: JSX.Element[] = [];
    for (let item in logs) {
      itemsArray.push(
        <section className='thing-modal__item' key={item}>
          <h3>{item}</h3>
          <p>{logs[item].map(item => ` + ${item} kg ,`)}</p>
        </section>
      )
    }
    return itemsArray;
  }

  return (
    <article className='thing-modal' onClick={closeModal}>
      <div className='thing-modal__wrap'>
      {generateItems()}
      </div>
    </article>
  )
}

export default ThingModal;
