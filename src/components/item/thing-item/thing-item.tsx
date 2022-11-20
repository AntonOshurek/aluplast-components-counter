//types
import type { ItemsTypes } from '../../../types/data-types';
//styles
import './thing-item.scss';

interface ThingItemPropsType {
  item: ItemsTypes,
}

const ThingItem = ({item}: ThingItemPropsType): JSX.Element => {
  if(item) {
    return (
      <article className='thing-item'>
        <div className='thing-item__image-wrap'>
          <img className='thing-item__image' src={item.image} width='100' height='100' alt="" />
        </div>
        <div className='thing-item__info-block'>
          <h3 className='thing-item__name'>{item.name}</h3>
          <p className='thing-item__description'>granulates description information</p>
        </div>
        <span className='thing-item__amount'>{item.amount} kg</span>
      </article>
    )
  } else {
    return (
      <article className='thing-item'>
        <div className='thing-item__image-wrap'>
          <img className='thing-item__image' src='' width='100' height='100' alt="" />
        </div>
        <div className='thing-item__info-block'>
          <h3 className='thing-item__name'>nie istnieje</h3>
          <p className='thing-item__description'>nie istnieje</p>
        </div>
        <span className='thing-item__amount'>nie istnieje</span>
      </article>
    )
  }
}

export default ThingItem;
