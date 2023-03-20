//components
import { ButtonRemove } from '../../controls';
//store
import { clearStoreAction } from '../../../store/slices/chemistry-slice';
import { useAppDispatch } from '../../../hooks/hooks';

//variables and constants
import { ComponentsTexts,  } from '../../../variables/variables';
//style
import '../components-settings.scss';

const ChemistrySettings = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const resetCounter = () => {
    dispatch(clearStoreAction());
  };

  return (
    <section className='components-settings'>
      <h3 className='components-settings__title'>{ComponentsTexts.SETTING_CHEMISTRY_TITLE}</h3>

      <ButtonRemove dataToDeleteName={ComponentsTexts.CHEMISTRY_COUNTER_NAME} onButtonClickHandler={resetCounter}/>
    </section>
  );
};

export default ChemistrySettings;
