import { useState } from 'react';
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
            <div className='button-reset-remove__accept-wrap'>
              <h2 className='button-reset-remove__accept-title'>Napewno chcesz {buttonText}?</h2>
              <div className='button-reset-remove__accept-controls'>
                <button className='button-reset-remove__accept-button button-reset-remove__accept-button--cancel'
                  type='button'
                  onClick={closeSuccessModal}>
                  Odwołaj
                </button>
                <button className='button-reset-remove__accept-button button-reset-remove__accept-button--confirm'
                  type='button'
                  onClick={confirmButtonClickHandler}>
                  Usunąć wszystkie dane
                </button>
              </div>
              <figure className='button-reset-remove__accept-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path fill='#ffffff' d="M10.75 36.208q-1.875 0-3.167-1.27-1.291-1.271-1.291-3.146V9.5h-2.5V5.083h10.083V2.875h12.208v2.208h10.084V9.5h-2.5v22.292q0 1.833-1.292 3.125-1.292 1.291-3.125 1.291ZM29.25 9.5h-18.5v22.292h18.5ZM14.542 28.667h3.625V12.583h-3.625Zm7.333 0H25.5V12.583h-3.625ZM10.75 9.5v22.292Z"/></svg>
              </figure>
            </div>
          </div>
        : null
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
