import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { SettingsItem, SettingsText } from '@/components/Settings/ui/Settings.styles'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { useModalsContext } from '@/shared/hooks'

import { Modal } from '$/client-shared'
import { FontSizeSwitcher } from '@/components/FontSizeSwitcher';
import { TabSizeSwitcher } from '@/components/TabSizeSwitcher';

const Settings = () => {
  const modalsContext = useModalsContext()
  const isOpen = modalsContext.state.isSettingsOpened

  const closeSettings = () => {
    modalsContext.update({
      isSettingsOpened: false
    })
  }

  return <Modal isOpen={isOpen} onClose={closeSettings} title={'Editor settings'}>
    <SettingsItem>
      <SettingsText>
        <h4>Editor  Theme</h4>
        <p>Choose the code editor theme</p>
      </SettingsText>
      <ThemeSwitcher/>
    </SettingsItem>
    <SettingsItem>
      <SettingsText>
        <h4>Font Size</h4>
        <p>Choose your preferred font size</p>
      </SettingsText>
      <FontSizeSwitcher/>
    </SettingsItem>
    <SettingsItem>
      <SettingsText>
        <h4>Current Tab Language</h4>
        <p>Choose the code editor language (js, py, css)</p>
      </SettingsText>
      <LanguageSwitcher/>
    </SettingsItem>
    <SettingsItem>
      <SettingsText>
        <h4>Tab size</h4>
        <p>Choose the width of a tab character</p>
      </SettingsText>
      <TabSizeSwitcher/>
    </SettingsItem>
  </Modal>
}


export default Settings
