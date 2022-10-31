import './counter-set-value.scss';

const CounterSetValue = (): JSX.Element => {
  return (
    <div className='counter-set-value'>
      <label className='counter-set-value__label'>
        Add
        <input className='counter-set-value__input' defaultValue='77' type="number" />
        kilos
      </label>
    </div>
  )
}

export default CounterSetValue;
