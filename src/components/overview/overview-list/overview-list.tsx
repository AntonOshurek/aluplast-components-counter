import './overview-list.scss';

const OverviewList = (): JSX.Element => {
  return (
    <ul className='overview-list'>
      <li className='overview-list__item'>
        <div className='overview-list__image-wrap'>
          <img className='overview-list__image' src="./images/granulat-img.jpg" width='100' height='100' alt="" />
        </div>
        <div className='overview-list__info-block'>
          <h3 className='overview-list__item-name'>Granulates name</h3>
          <p className='overview-list__item-description'>granulates description information</p>
        </div>
        <span className='overview-list__item-amount'>250 kg</span>
      </li>

      <li className='overview-list__item'>
        <div className='overview-list__image-wrap'>
          <img className='overview-list__image' src="./images/granulat-img.jpg" width='100' height='100' alt="" />
        </div>
        <div className='overview-list__info-block'>
          <h3 className='overview-list__item-name'>Granulates name</h3>
          <p className='overview-list__item-description'>granulates description information</p>
        </div>
        <span className='overview-list__item-amount'>250 kg</span>
      </li>

      <li className='overview-list__item'>
        <div className='overview-list__image-wrap'>
          <img className='overview-list__image' src="./images/granulat-img.jpg" width='100' height='100' alt="" />
        </div>
        <div className='overview-list__info-block'>
          <h3 className='overview-list__item-name'>Granulates name</h3>
          <p className='overview-list__item-description'>granulates description information</p>
        </div>
        <span className='overview-list__item-amount'>250 kg</span>
      </li>
    </ul>
  )
}

export default OverviewList;
