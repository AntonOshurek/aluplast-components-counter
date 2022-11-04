//component
import Header from '../../components/header/header';
import GranulatesSettings from '../../components/settings/granulates-settings/granulates-settings';
import ButtonAdd from '../../components/controls/button-add/button-add';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {

  const onSettingSubmitButtonClickHandler = (): void => {
    console.log('save settings')
  }

  return (
    <div className='settings-page'>
      <Header/>

      <main className='settings-page__main container'>
        <GranulatesSettings/>

        <ButtonAdd
          onButtonClickHandler={onSettingSubmitButtonClickHandler}
          errorMessage={''}
          buttonText={'Save settings'}
        />
      </main>
    </div>
  )
}

export default SettingsPage;
