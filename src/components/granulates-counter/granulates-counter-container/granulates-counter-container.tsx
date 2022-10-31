import CounterAddControls from '../../counter/counter-add-contols/counter-add-contols';
import CounterSetValue from '../../counter/counter-set-value/counter-set-value';
import CounterSetControls from '../../counter/counter-set-controls/counter-set-controls';

import './granulates-counter-container.scss';

const GranulatesCounterContainer = (): JSX.Element => {
  return (
    <section className="granulates-counter__container">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <CounterSetControls/>
      <CounterSetValue/>
      <CounterAddControls/>

    </section>
  )
}

export default GranulatesCounterContainer;
