import CounterSetControls from '../../counter/counter-set-controls/counter-set-controls';
import CounterValue from '../../counter/counter-value/counter-value';
import CounterControlsPlus from '../../counter/counter-controls/counter-controls-plus';

import '../granulates-counter.scss';

const GranulatesCounterVorek = (): JSX.Element => {
  return (
    <section className='granulates-counter granulates-counter--set-controls'>
      <h3 className='visually-hidden'>granulates counter vorek</h3>

      <CounterSetControls/>
      <CounterValue/>
      <CounterControlsPlus/>

    </section>
  )
}

export default GranulatesCounterVorek;
