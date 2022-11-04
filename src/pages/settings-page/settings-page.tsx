import Header from '../../components/header/header';
import GranulatesSettings from '../../components/settings/granulates-settings/granulates-settings';
import SettingButton from '../../components/settings/setting-button/setting-button';

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

        <SettingButton
          onButtonClickHandler={onSettingSubmitButtonClickHandler}
          errorMessage={''}
        />
      </main>
    </div>
  )
}

export default SettingsPage;
