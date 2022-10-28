import './granulates-counter.scss';

const GranulatesCounter = (): JSX.Element => {

  return (
    <section className="granulates-counter">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <div className='granulates-counter__input-wrap'>
        <label className='granulates-counter__number-label'>
          Add
          <input className='granulates-counter__number-input' defaultValue='77' type="number" />
          kilos
        </label>
      </div>

      <div className='granulates-counter__controls'>
        <button className='granulates-counter__button granulates-counter__button--main' type='button'>Add value</button>
      </div>
    </section>
  )
}

export default GranulatesCounter;
