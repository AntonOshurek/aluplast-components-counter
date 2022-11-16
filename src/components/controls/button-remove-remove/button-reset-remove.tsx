import { useState } from 'react';
//styles
import './button-reset-remove.scss';

interface ButtonResetRemovePropsType {
  onButtonClickHandler: () => void,
  buttonText: string,
}

const ButtonResetRemove = ({onButtonClickHandler, buttonText}: ButtonResetRemovePropsType): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onShowAcceptModalClickHandler = (): void => {
    setShowModal(!showModal);
  }

  const confirmButtonClickHandler = () => {
    setShowModal(false);
    onButtonClickHandler();
  }

  return (
    <div className='button-reset-remove'>
      <button
        className='button-reset-remove__button'
        type='button'
        onClick={onShowAcceptModalClickHandler}>
          {buttonText}
      </button>

      {
        showModal ? <div className='button-reset-remove__accept'>
          <button onClick={confirmButtonClickHandler}>ok</button>
          <button onClick={onShowAcceptModalClickHandler}>cancel</button>
        </div> : null
      }


    </div>
  )
}

export default ButtonResetRemove;
