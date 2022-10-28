import './granulates-counter.scss';

const GranulatesCounter = (): JSX.Element => {

  return (
    <section className="granulates-counter">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <div className='granulates-counter__counter-value'>
        <span>0</span>
      </div>

      <div className='granulates-counter__controls'>
        <button className='granulates-counter__button' type='button'>Minus</button>
        <button className='granulates-counter__button granulates-counter__button--main' type='button'>Plus</button>
      </div>
    </section>
  )
}

export default GranulatesCounter;
