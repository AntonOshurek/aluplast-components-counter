import { useParams } from 'react-router-dom';

import ThingItem from '../../item/thing-item';

import { granulatesData } from '../../../data/granulates-data';

import './granulates-counter.scss';

const GranulatesCounter = (): JSX.Element => {
  const {UNID} = useParams();
  const currentItem = granulatesData.filter(item => item.UNID === Number(UNID))[0]

  return (
    <section className="granulates-counter container">
      <h2 className='granulates-counter__title'>Counter</h2>
      <div className='granulates-counter__current-item'>
        <ThingItem item={currentItem}/>
      </div>
      <div>

      </div>
    </section>
  )
}

export default GranulatesCounter;
