//components
import Header from '../../components/header/header';
import ComponentOverviewItem from '../../components/item/component-overview-item/component-overview-item';
//store
import { SelectorGetPigmentsState, SelectorGetGumsState } from '../../store/selectors/selectors';
import { useAppSelector } from '../../hooks/hooks';
//types
import type { IAdaptedDataType, IDataType, IItemDataType } from '../../types/data-types';
//styles
import './components-overview.scss';

const ComponentsOverview = (): JSX.Element => {
  const pigments = useAppSelector(SelectorGetPigmentsState);
  const gums = useAppSelector(SelectorGetGumsState);

  const storeDataToClient = (data: IAdaptedDataType): IDataType => {
    let itemsArray: IDataType = [];

    for (let item in data) {
      itemsArray.push(data[item]);
    };

    return itemsArray
  };

  const pigmentsClientData = storeDataToClient(pigments);
  const gumsClientData = storeDataToClient(gums);

  return (
    <div className='components-overview'>
      <Header/>

      <main className='components-overview__main'>
        <div className='components-overview__titles container'>
          <h2 className='components-overview__titel'>Przegląd wszystkich komponentów</h2>
          {/* <p className='components-overview__subtitle'>subtitle</p> */}
        </div>

        <section className='components-overview__component container'>
          <h3>Uszczelki</h3>

          <ul className='components-overview__list'>
            {
              gumsClientData.map((item: IItemDataType) => {
                return <ComponentOverviewItem item={item} key={item.UNID}/>
              })
            }
          </ul>
        </section>

        <section className='components-overview__component container'>
          <h3>Pegmenty</h3>

          <ul className='components-overview__list'>
            {
              pigmentsClientData.map((item: IItemDataType) => {
                return <ComponentOverviewItem item={item} key={item.UNID}/>
              })
            }
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ComponentsOverview;
