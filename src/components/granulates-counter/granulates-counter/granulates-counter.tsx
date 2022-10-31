import CounterSetValue from '../../counter/counter-set-value/counter-set-value';
import CounterAddControls from '../../counter/counter-controls/counter-contols-add';

import '../granulates-counter.scss';

const GranulatesCounter = (): JSX.Element => {
  return (
    <section className="granulates-counter">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <CounterSetValue/>
      <CounterAddControls/>

    </section>
  )
}

export default GranulatesCounter;
