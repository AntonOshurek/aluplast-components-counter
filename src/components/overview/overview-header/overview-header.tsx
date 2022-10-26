import './overview-header.scss';

const OverviewHeader = (): JSX.Element => {
  return (
    <div className='overview-header'>
      <h2 className='overview-header__title'>Overview</h2>
      <span className='overview-header__date'>25.10.2022</span>
    </div>
  )
}

export default OverviewHeader;
