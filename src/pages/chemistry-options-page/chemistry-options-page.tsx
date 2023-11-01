//components
import Header from '../../components/header/header';
import ChemistryOptionsList from '../../components/chemistry-options-list/chemistry-options-list';
//styles
import './chemistry-options-page.scss';

const ChemistryOptionsPage = (): JSX.Element => {
  return (
    <div className='chemistry-options-page'>
      <Header/>

      <main className='chemistry-options-page__main'>
        <ChemistryOptionsList/>
      </main>
    </div>
  );
};

export default ChemistryOptionsPage;
