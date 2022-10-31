import './granulates-counter-container.scss';

const GranulatesCounterContainer = (): JSX.Element => {
  return (
    <section className="granulates-counter__container">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <div className='counter-container__set-contols'>
        <label className='counter-container__set-val-label'>
          adding value -
          <input className='counter-container__set-val-input' defaultValue='75' type="number" />
          kg
        </label>
      </div>

      <div className='counter-container__input-wrap'>
        <label className='counter-container__number-label'>
          Add
          <input className='counter-container__number-input' defaultValue='500' type="number" />
          kilos
        </label>
      </div>

      <div className='counter-container__controls'>
        <button className='counter-container__button counter-container__button--main' type='button'>Add value</button>
      </div>
    </section>
  )
}

export default GranulatesCounterContainer;
