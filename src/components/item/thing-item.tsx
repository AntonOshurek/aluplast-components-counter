import { ThingItemComponentDataType } from '../../types/data-types';

import './thing-item.scss';

interface ThingItemPropsType {
  item: ThingItemComponentDataType,
}

const ThingItem = ({item}: ThingItemPropsType): JSX.Element => {
  const {name, amount, image} = item

  return (
    <article className='thing-item'>
      <div className='thing-item__image-wrap'>
        <img className='thing-item__image' src={image} width='100' height='100' alt="" />
      </div>
      <div className='thing-item__info-block'>
        <h3 className='thing-item__name'>{name}</h3>
        <p className='thing-item__description'>granulates description information</p>
      </div>
      <span className='thing-item__amount'>{amount} kg</span>
    </article>
  )
}

export default ThingItem;
