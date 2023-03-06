//components
import Header from "../../components/header/header";
//styles
import './gums-page.scss';

const GumsPage = (): JSX.Element => {
  return (
    <div className='gum-page'>
      <Header />
      <main className='gum-page__main'>
        {/* <Overview data={data}/> */}
      </main>
    </div>
  );
};

export default GumsPage;
