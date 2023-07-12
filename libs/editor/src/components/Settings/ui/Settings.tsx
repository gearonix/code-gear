import { ColorPicker } from 'antd'
import { observer } from 'mobx-react-lite'

import { FontSizeSwitcher } from '@/components/FontSizeSwitcher'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { TabSizeSwitcher } from '@/components/TabSizeSwitcher'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { CUSTOM_THEME } from '@/shared/consts'
import { useActions, useModalsContext, useStore } from '@/shared/hooks'

import { Separator, SettingsItem, SettingsText } from './Settings.styles'

import { Hex, Modal, useDebounce } from '$/client-shared'
import { useColorCallback } from '@/components/Settings/hooks';

const Settings = observer(() => {
  const modalsContext = useModalsContext()
  const isOpen = modalsContext.state.isSettingsOpened
  const actions = useActions()
  const { customBackground, customColor } = useStore()

  const closeSettings = () => {
    modalsContext.update({
      isSettingsOpened: false
    })
  }

  const onBackgroundChange = useColorCallback((hex) => {
    actions.changeCustomBackground(hex)
  })

  const onColorChange = useColorCallback((hex) => {
    actions.changeCustomBackground(hex)
  })

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
    <Separator/>
    <SettingsItem>
      <SettingsText>
        <h4>Custom Editor Background</h4>
        <p>Change custom background for code editor</p>
      </SettingsText>
      <ColorPicker onChange={onBackgroundChange} value={customBackground}
                   showText size={'large'} />
    </SettingsItem>
    <SettingsItem>
      <SettingsText>
        <h4>Custom Editor Background</h4>
        <p>Change custom background for code editor</p>
      </SettingsText>
      <ColorPicker onChange={onColorChange} value={customColor}
                   showText size={'large'} />
    </SettingsItem>
  </Modal>
})


export default Settings
