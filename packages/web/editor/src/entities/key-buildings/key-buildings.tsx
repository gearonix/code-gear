import { Typography } from 'antd'

import { KeyBuildings as Keys } from '@/shared/consts/key-buildings'
import { KeyBuildingStyles, SettingsText } from '@/widgets/settings'

import { WithChildren } from '@code-gear/web/shared'

type KeyBuildingProps = WithChildren<{
  keyCode: string
  experimental?: boolean
}>

const KeyBuilding = ({ keyCode, children, experimental }: KeyBuildingProps) => {
  return (
    <KeyBuildingStyles>
      <Typography.Text keyboard>
        {experimental ? '🧪' : '✌️'} Alt + {keyCode}
      </Typography.Text>
      <SettingsText style={{ justifyContent: 'space-around' }}>
        <p>{children}</p>
      </SettingsText>
    </KeyBuildingStyles>
  )
}

const KeyBuildings = () => {
  return (
    <>
      <KeyBuilding keyCode={Keys.O} experimental>
        Open a file on your OS
      </KeyBuilding>
      <KeyBuilding keyCode={Keys.S} experimental>
        Save a file on your OS
      </KeyBuilding>
      <KeyBuilding keyCode={Keys.N}>Open new tab</KeyBuilding>
      <KeyBuilding keyCode={Keys.T}>Close current tab</KeyBuilding>
      <KeyBuilding keyCode={Keys.P}>Open/close terminal</KeyBuilding>
      <KeyBuilding keyCode={Keys.J}>Open/close test cases</KeyBuilding>
      <KeyBuilding keyCode={Keys.Q}>Open/close settings</KeyBuilding>
    </>
  )
}

export default KeyBuildings
