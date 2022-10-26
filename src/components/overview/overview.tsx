import './overview.scss';


const Overview = (): JSX.Element => {
  return (
    <section className="overview container">
      <div className='overview__header'>
        <h2 className='overview__title'>Overview</h2>
        <span className='overview__date'>25.10.2022</span>
      </div>
      <ul className='granulates-list'>
        <li className='granulates-list__item'>
          <div className='granulates-list__image-wrap'>
            <img className='granulates-list__image' src="./images/granulat-img.jpg" width='100' height='100' alt="" />
          </div>
          <div className='granulates-list__info-block'>
            <h3 className='granulates-list__granulate-name'>Granulates name</h3>
            <p className='granulates-list__granulate-description'>granulates description information</p>
          </div>
          <span className='granulates-list__granulates-amount'>250 kg</span>
        </li>

        <li className='granulates-list__item'>
          <div className='granulates-list__image-wrap'>
            <img className='granulates-list__image' src="./images/granulat-img.jpg" width='100' height='100' alt="" />
          </div>
          <div className='granulates-list__info-block'>
            <h3 className='granulates-list__granulate-name'>Granulates name</h3>
            <p className='granulates-list__granulate-description'>granulates description information</p>
          </div>
          <span className='granulates-list__granulates-amount'>250 kg</span>
        </li>

        <li className='granulates-list__item'>
          <div className='granulates-list__image-wrap'>
            <img className='granulates-list__image' src="./images/granulat-img.jpg" width='100' height='100' alt="" />
          </div>
          <div className='granulates-list__info-block'>
            <h3 className='granulates-list__granulate-name'>Granulates name</h3>
            <p className='granulates-list__granulate-description'>granulates description information</p>
          </div>
          <span className='granulates-list__granulates-amount'>250 kg</span>
        </li>


      </ul>
    </section>
  )
}

export default Overview;
