//components
import Header from "../../components/header/header";
import Overview from "../../components/overview/overview";
import { useAppSelector } from "../../hooks/hooks";
import { SelectorGetGumsState } from "../../store/selectors/selectors";
import { IAdaptedDataType } from "../../types/data-types";
//styles
import './gums-page.scss';

const GumsPage = (): JSX.Element => {
  const data: IAdaptedDataType = useAppSelector(SelectorGetGumsState);

  return (
    <div className='gum-page'>
      <Header />
      <main className='gum-page__main'>
        <Overview data={data}/>
      </main>
    </div>
  );
};

export default GumsPage;
