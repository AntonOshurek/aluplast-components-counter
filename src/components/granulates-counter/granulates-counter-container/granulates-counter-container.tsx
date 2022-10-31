import CounterSetControls from '../../counter/counter-set-controls/counter-set-controls';
import CounterSetValue from '../../counter/counter-set-value/counter-set-value';
import CounterControlsAdd from '../../counter/counter-controls/counter-contols-add';

import '../granulates-counter.scss';

const GranulatesCounterContainer = (): JSX.Element => {
  return (
    <section className="granulates-counter granulates-counter--set-controls">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <CounterSetControls/>
      <CounterSetValue/>
      <CounterControlsAdd/>

    </section>
  )
}

export default GranulatesCounterContainer;
