import './counter-controls.scss';

interface CounterControlsAddPropsType {
  onButtonClickHandler: () => void,
  errorMessage: string,
}

const CounterControlsAdd = ({onButtonClickHandler, errorMessage}: CounterControlsAddPropsType): JSX.Element => {

  const buttonClasses = errorMessage ? 'counter-controls__button counter-controls__button--error' : 'counter-controls__button'

  return (
    <div className='counter-controls'>
      <button className={buttonClasses}
        type='button'
        onClick={onButtonClickHandler}
      >{errorMessage ? errorMessage : 'Add value'}</button>
    </div>
  )
}

export default CounterControlsAdd;
