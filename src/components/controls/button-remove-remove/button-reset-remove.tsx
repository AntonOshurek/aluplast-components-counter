import { useState } from 'react';
//components
import ButtonChoice from '../button-choice/button-choice';
//variables and consts
import { ComponentsTexts } from '../../../variables/variables';
//styles
import './button-reset-remove.scss';

interface ButtonResetRemovePropsType {
  onButtonClickHandler: () => void,
  buttonText: string,
}

const ButtonResetRemove = ({onButtonClickHandler, buttonText}: ButtonResetRemovePropsType): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const onShowAcceptModalClickHandler = (): void => {
    setShowModal(!showModal);
  }

  const confirmButtonClickHandler = () => {
    setShowModal(false);
    setShowSuccessModal(true);
    onButtonClickHandler();
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
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
          <h2 className='button-reset-remove__accept-title'>Napewno chcesz {buttonText}?</h2>
          <ButtonChoice
            onIncButtonClickHandler={confirmButtonClickHandler}
            onDecButtonClickHandler={onShowAcceptModalClickHandler}
            choiseText={{plus: ComponentsTexts.CONFIRM, minus: ComponentsTexts.CANCEL}}/>
        </div> : null
      }

      {
        showSuccessModal ? <div className='button-reset-remove__success'>
          <span className='button-reset-remove__success-icon'></span>
          <h2 className='button-reset-remove__accept-title'>
            {buttonText} - operacja skończyła się sukcesem
          </h2>

          <button onClick={closeSuccessModal} className='button-reset-remove__close'>X</button>

        </div> : null
      }
    </div>
  )
}

export default ButtonResetRemove;
