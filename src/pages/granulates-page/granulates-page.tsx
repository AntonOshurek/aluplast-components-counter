import Header from '../../components/header/header';
import GranulatesOverview from '../../components/granulates-overview/granulates-overview';

import './granulates-page.scss';

const GranulatesPage = (): JSX.Element => {
  return (
    <div className='granulates'>
      <Header />
      <main className='granulates__main'>
        <GranulatesOverview/>
      </main>
    </div>
  )
}

export default GranulatesPage;
