import CounterSetControls from '../../counter/counter-set-controls/counter-set-controls';
import CounterValue from '../../counter/counter-value/counter-value';
import CounterPlusControls from '../../counter/counter-plus-controls/counter-plus-controls';

import './granulates-counter-vorek.scss';

const GranulatesCounterVorek = (): JSX.Element => {

  return (
    <section className='granulates-counter-vorek'>
      <h3 className='visually-hidden'>granulates counter vorek</h3>

      <CounterSetControls/>
      <CounterValue/>
      <CounterPlusControls/>

    </section>
  )
}

export default GranulatesCounterVorek;
