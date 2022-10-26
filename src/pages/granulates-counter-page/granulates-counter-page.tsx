import GranulatesCounterHeader from '../../components/granulates-counter/granulates-counter-header/granulates-counter-header';
import GranulatesCounter from '../../components/granulates-counter/granulates-counter/granulates-counter';

import './granulates-counter-page.scss';

const GranulatesCounterPage = (): JSX.Element => {
  return (
    <div className='granulates-counter-page'>
      <GranulatesCounterHeader/>
      <main className='granulates-counter-page__main'>
        <GranulatesCounter/>
      </main>
    </div>
  )
}

export default GranulatesCounterPage;
