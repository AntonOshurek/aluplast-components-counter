import './counter-controls.scss';

interface CounterControlsPlusPropsType {
  onIncButtonClickHandler: () => void,
  onDecButtonClickHandler: () => void,
}


const CounterControlsPlus = ({onIncButtonClickHandler, onDecButtonClickHandler}: CounterControlsPlusPropsType): JSX.Element => {
  return (
    <div className='counter-controls'>
      <button className='counter-controls__button counter-controls__button--second-btn ' type='button'
        onClick={onDecButtonClickHandler}
      >Minus</button>
      <button className='counter-controls__button' type='button'
        onClick={onIncButtonClickHandler}
      >Plus</button>
    </div>
  )
}

export default CounterControlsPlus;
