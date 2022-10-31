import CounterSetControls from '../../counter/counter-set-controls/counter-set-controls';
import CounterValue from '../../counter/counter-value/counter-value';

import './granulates-counter-vorek.scss';

const GranulatesCounterVorek = (): JSX.Element => {

  return (
    <section className='granulates-counter-vorek'>
      <h3 className='visually-hidden'>granulates counter vorek</h3>

      <CounterSetControls/>
      <CounterValue/>


      <div className='counter-vorek__controls'>
        <button className='counter-vorek__button' type='button'>Minus</button>
        <button className='counter-vorek__button counter-vorek__button--main' type='button'>Plus</button>
      </div>
    </section>
  )
}

export default GranulatesCounterVorek;
