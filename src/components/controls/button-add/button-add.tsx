import { ComponentsTexts } from '../../../variables/variables';
import '../standart-button.scss';

interface ButtonAddPropsType {
  onButtonClickHandler: () => void,
  buttonText: ComponentsTexts,
  errorMessage: string,
}

const ButtonAdd = ({onButtonClickHandler, errorMessage, buttonText}: ButtonAddPropsType): JSX.Element => {
  const buttonClasses = errorMessage ? 'standart-button standart-button--error' : 'standart-button'

  return (
    <div className='button-block'>
      <button className={buttonClasses}
        type='button'
        onClick={onButtonClickHandler}
      >{errorMessage ? errorMessage : buttonText}</button>
    </div>
  )
}

export default ButtonAdd;
