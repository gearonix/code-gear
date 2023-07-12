import { Typography } from 'antd'

import { KeyBuildingStyles, SettingsText } from '@/components/Settings/ui/Settings/Settings.styles'
import { KeyBuildings as Keys } from '@/shared/consts'

import { WithChildren } from '$/client-shared'

const KeyBuilding = ({ keyCode, children }: WithChildren<{keyCode: string}>) => {
  return <KeyBuildingStyles>
    <Typography.Text keyboard>Alt + {keyCode}</Typography.Text>
    <SettingsText style={{ justifyContent: 'space-around' }}>
      <p>{children}</p>
    </SettingsText>
  </KeyBuildingStyles>
}

const KeyBuildings = () => {
  return <>
    <KeyBuilding keyCode={Keys.O}>
    Open a file on your OS
  </KeyBuilding>
  <KeyBuilding keyCode={Keys.S}>
    Save a file on your OS
  </KeyBuilding>
  <KeyBuilding keyCode={Keys.N}>
    Open new tab
  </KeyBuilding>
  <KeyBuilding keyCode={Keys.T}>
    Close current tab
  </KeyBuilding>
  <KeyBuilding keyCode={Keys.P}>
    Open/close terminal
  </KeyBuilding>
  <KeyBuilding keyCode={Keys.J}>
    Open/close test cases
  </KeyBuilding>
  <KeyBuilding keyCode={Keys.Q}>
    Open/close settings
  </KeyBuilding>
    </>
}


export default KeyBuildings
