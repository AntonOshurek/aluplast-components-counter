import './counter-set-controls.scss';

const CounterSetControls = (): JSX.Element => {
  return (
    <div className='counter-set-contols'>
      <label className='counter-set-contols__label'>
        adding value -
        <input className='counter-set-contols__input' defaultValue='75' type="number" />
        kg
      </label>
    </div>
  )
}

export default CounterSetControls;
