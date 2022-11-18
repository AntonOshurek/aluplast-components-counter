import { useState } from 'react';
//variables and constants
import { ComponentsTexts } from '../../../variables/variables';
//styles
import './button-remove.scss';

interface ButtonRemovePropsType {
  onButtonClickHandler: () => void,
  dataToDeleteName: string,
}

const ButtonRemove = ({onButtonClickHandler, dataToDeleteName}: ButtonRemovePropsType): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const openAcceptModal = (): void => {
    setShowModal(true);
  }

  const closeAcceptModal = (): void => {
    setShowModal(false);
    setSuccess(false);
  }

  const confirmButtonClickHandler = () => {
    setSuccess(true);
    onButtonClickHandler();
  }

  return (
    <div className='button-remove'>
      <button
        className='button-remove__button'
        type='button'
        onClick={openAcceptModal}>
          {ComponentsTexts.SETTING_RESET_COUNTER_DATA}
      </button>

      {
        showModal ?
          <div className='button-remove__modal'>
            <div className={success ? 'button-remove__modal-wrap button-remove__modal-wrap--success' : 'button-remove__modal-wrap'}>
              <h2 className='button-remove__modal-title'>
                {
                  success ? 'Dane zostali usunięci :)' : `Napewno chcesz ${ComponentsTexts.SETTING_RESET_COUNTER_DATA} \"${dataToDeleteName}\"?`
                }
              </h2>

              <div className='button-remove__modal-controls'>

                {
                  success ?
                    <button className='button-remove__modal-button button-remove__modal-button--cancel'
                      type='button'
                      onClick={closeAcceptModal}>
                      {ComponentsTexts.REMOVE_CLOSE}
                    </button>
                    : <>
                      <button className='button-remove__modal-button button-remove__modal-button--cancel'
                        type='button'
                        onClick={closeAcceptModal}>
                        {ComponentsTexts.REMOVE_CANCEL}
                      </button>
                      <button className='button-remove__modal-button button-remove__modal-button--confirm'
                        type='button'
                        onClick={confirmButtonClickHandler}>
                          {ComponentsTexts.REMOVE_CONFIRM}
                      </button>
                    </>

                }


              </div>

              <figure className={success ? 'button-remove__modal-icon button-remove__modal-icon--success' : 'button-remove__modal-icon'}>
                {
                  success ?
                  <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                    <path fill='#008000' d="M20 37.667q-3.708 0-6.938-1.375-3.229-1.375-5.604-3.75t-3.75-5.604Q2.333 23.708 2.333 20q0-3.708 1.375-6.937 1.375-3.23 3.771-5.605 2.396-2.375 5.625-3.75T20 2.333q2.958 0 5.583.855 2.625.854 4.792 2.437L27.5 8.5q-1.625-1-3.521-1.604-1.896-.604-3.979-.604-5.75 0-9.729 3.958Q6.292 14.208 6.292 20q0 5.75 3.979 9.729Q14.25 33.708 20 33.708q5.792 0 9.75-3.979T33.708 20q0-.833-.104-1.646-.104-.812-.312-1.604l3.208-3.208q.583 1.5.875 3.125.292 1.625.292 3.333 0 3.708-1.375 6.917-1.375 3.208-3.75 5.604t-5.604 3.771q-3.23 1.375-6.938 1.375Zm-2.417-9.459-7.541-7.583 2.75-2.792 4.833 4.792 17.25-17.25 2.833 2.75Z"/>
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                    <path fill='#ffffff' d="M10.75 36.208q-1.875 0-3.167-1.27-1.291-1.271-1.291-3.146V9.5h-2.5V5.083h10.083V2.875h12.208v2.208h10.084V9.5h-2.5v22.292q0 1.833-1.292 3.125-1.292 1.291-3.125 1.291ZM29.25 9.5h-18.5v22.292h18.5ZM14.542 28.667h3.625V12.583h-3.625Zm7.333 0H25.5V12.583h-3.625ZM10.75 9.5v22.292Z"/>
                  </svg>
                }
              </figure>
            </div>
          </div>
        : null
      }
    </div>
  )
}

export default ButtonRemove;
