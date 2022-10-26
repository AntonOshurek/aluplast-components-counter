import { useParams } from 'react-router-dom';

import ThingItem from '../../item/thing-item';

import { granulatesData } from '../../../data/granulates-data';

import './granulates-counter.scss';

const GranulatesCounter = (): JSX.Element => {
  const {UNID} = useParams();

  console.log(UNID)

  console.log(granulatesData.filter(item => item.UNID === Number(UNID))[0])


  return (
    <section className="granulates-counter container">
      <h2>Counter</h2>

    </section>
  )
}

export default GranulatesCounter;
