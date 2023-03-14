//components
import Header from '../../components/header/header';
//styles
import './components-overview.scss';

const ComponentsOverview = (): JSX.Element => {
  return (
    <div className='components-overview'>
      <Header/>

      <main className='components-overview__main'>
        <div className='components-overview__titles container'>
          <h2 className='components-overview__titel'>Przegląd wszystkich komponentów</h2>
          <p>subtitle</p>
        </div>

        <section className='components-overview__component container'>
          <ul className='components-overview__list'>
            <li className='components-overview__list-item'>

            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ComponentsOverview;
