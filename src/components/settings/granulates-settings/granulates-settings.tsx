import './granulates-settings.scss';

const GranulatesSettings = (): JSX.Element => {
  return (
    <section className='granulates-settings'>
      <h3 className='granulates-settings__title'>Granulates settings</h3>
      <form className='granulates-settings__form'>
        <label className='granulates-settings__label'>
          one vorek kg value
          <input className='granulates-settings__input' type="number" />
        </label>
        <label className='granulates-settings__label'>
          default one container weight
          <input className='granulates-settings__input' type="number" />
        </label>
      </form>
    </section>
  )
}

export default GranulatesSettings;
