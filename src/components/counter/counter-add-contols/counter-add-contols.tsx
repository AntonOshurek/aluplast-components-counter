import '../counter.scss';
import './counter-add-controls.scss';

const CounterAddControls = (): JSX.Element => {
  return (
    <div className='counter-controls'>
      <button className='counter-controls__button' type='button'>Add value</button>
    </div>
  )
}

export default CounterAddControls;
