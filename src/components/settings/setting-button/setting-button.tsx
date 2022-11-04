import './setting-button.scss';

interface SettingButtonPropsType {
  onButtonClickHandler: () => void,
  errorMessage: string,
}

const SettingButton = ({onButtonClickHandler, errorMessage}: SettingButtonPropsType): JSX.Element => {

  const buttonClasses = errorMessage ? 'counter-controls__button counter-controls__button--error' : 'counter-controls__button'

  return (
    <div className='counter-controls'>
      <button className={buttonClasses}
        type='button'
        onClick={onButtonClickHandler}
      >{errorMessage ? errorMessage : 'Save settings'}</button>
    </div>
  )
}

export default SettingButton;
