import Header from '../../components/header/header';
import Overview from '../../components/overview/overview';

import './granulates-page.scss';

const GranulatesPage = (): JSX.Element => {
  return (
    <div className='granulates-page'>
      <Header />
      <main className='granulates-page__main'>
        <Overview/>
      </main>
    </div>
  )
}

export default GranulatesPage;
