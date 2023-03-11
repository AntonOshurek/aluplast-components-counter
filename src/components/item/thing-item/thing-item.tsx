//types
import type { IItemDataType } from '../../../types/data-types';
//styles
import './thing-item.scss';

interface ThingItemPropsType {
  item: IItemDataType
};

const ThingItem = ({item}: ThingItemPropsType): JSX.Element => {

  const color: string = item.color;
  let bottomBorderStyle = {border: ` 4px solid ${color}`};

  if(item) {
    return (
      <article className='thing-item' style={color ? bottomBorderStyle : {}}>
        <div className='thing-item__image-wrap'>
          <img className='thing-item__image' src={item.image} width='100' height='100' alt="" />
        </div>
        <div className='thing-item__info-block'>
          <h3 className='thing-item__name'>{item.name}</h3>

          {
            item.description ? <p className='thing-item__description'>{item.description}</p> : null
          }

          {
            item.itemNumber ? <p className='thing-item__description'>{item.itemNumber}</p> : null
          }
        </div>
        <span className='thing-item__amount'>{item.amount} kg</span>
      </article>
    );
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
    );
  };
};

export default ThingItem;
