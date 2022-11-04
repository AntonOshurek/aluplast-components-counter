import { ComponentsTexts } from '../../../variables/variables';

import '../standart-button.scss';

interface ButtonChoicePropsType {
  onIncButtonClickHandler: () => void,
  onDecButtonClickHandler: () => void,
  choiseText: {plus: ComponentsTexts, minus: ComponentsTexts}
}

const ButtonChoice = ({onIncButtonClickHandler, onDecButtonClickHandler, choiseText}: ButtonChoicePropsType): JSX.Element => {
  return (
    <div className='button-block'>
      <button className='standart-button standart-button--second-btn ' type='button'
        onClick={onDecButtonClickHandler}
      >{choiseText.minus}</button>
      <button className='standart-button' type='button'
        onClick={onIncButtonClickHandler}
      >{choiseText.plus}</button>
    </div>
  )
}

export default ButtonChoice;
