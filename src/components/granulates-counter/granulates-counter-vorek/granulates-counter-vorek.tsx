import './granulates-counter-vorek.scss';

const GranulatesCounterVorek = (): JSX.Element => {
  return (
    <section className='granulates-counter-vorek'>
      <h3 className='visually-hidden'>granulates counter vorek</h3>

      <div className='counter-vorek__set-contols'>
        <label className='counter-vorek__set-val-label'>
          one click =
          <input className='counter-vorek__set-val-input' value={1} type="number" />
          worek/worków
        </label>
      </div>

      <div className='counter-vorek__counter'>
        <span className='counter-vorek__counter-value'>0</span>
      </div>

      <div className='counter-vorek__controls'>
        <button className='counter-vorek__button' type='button'>Minus</button>
        <button className='counter-vorek__button counter-vorek__button--main' type='button'>Plus</button>
      </div>
    </section>
  )
}

export default GranulatesCounterVorek;
