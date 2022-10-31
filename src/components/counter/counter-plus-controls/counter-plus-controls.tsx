import './counter-plus-controls.scss';

const CounterPlusControls = (): JSX.Element => {
  return (
    <div className='counter-controls'>
      <button className='counter-controls__button counter-controls__button--second-btn ' type='button'>Minus</button>
      <button className='counter-controls__button' type='button'>Plus</button>
    </div>
  )
}

export default CounterPlusControls;
