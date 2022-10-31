import './counter-value.scss';

interface CounterValuePropsType {
  value: number
}

const CounterValue = ({value}: CounterValuePropsType): JSX.Element => {
  return (
    <div className='counter-value'>
      <span className='counter-value__value'>{value}</span>
    </div>
  )
}

export default CounterValue;
