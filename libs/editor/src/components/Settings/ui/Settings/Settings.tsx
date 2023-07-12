import { ColorPicker, Switch } from 'antd'
import { observer } from 'mobx-react-lite'

import { FontSizeSwitcher } from '@/components/FontSizeSwitcher'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useColorCallback } from '@/components/Settings/hooks'
import { TabSizeSwitcher } from '@/components/TabSizeSwitcher'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { useActions, useModalsContext, useStore } from '@/shared/hooks'

import KeyBuildings from '../KeyBuildings/KeyBuildings'

import { Separator, SettingsItem, SettingsText, Title } from './Settings.styles'

import { Modal } from '$/client-shared'

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
    actions.changeCustomColor(hex)
  })

  const onSwitchChange = (isChecked: boolean) => {
    actions.setIsLocalStorageDisabled(!isChecked)
  }

  return <Modal isOpen={isOpen} onClose={closeSettings}>
    <Title>Editor settings</Title>
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
        <h4>Custom Editor Color</h4>
        <p>Change custom color for code editor</p>
      </SettingsText>
      <ColorPicker onChange={onColorChange} value={customColor}
                   showText size={'large'} />
    </SettingsItem>
    <Separator/>
    <SettingsItem>
      <SettingsText>
        <h4>Save editor settings to Local Storage</h4>
        <p>All your next changes will be stored in localStorage</p>
      </SettingsText>
      <Switch defaultChecked
              onChange={onSwitchChange}
              style={{ marginRight: 15, marginTop: 0 }}
      />
    </SettingsItem>
    <Title>Key buildings</Title>
    <KeyBuildings/>
    <Separator/>
  </Modal>
})



export default Settings
