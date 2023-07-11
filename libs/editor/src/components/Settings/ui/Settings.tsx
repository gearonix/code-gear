import { useModalsContext } from '@/shared/hooks'

import { Modal } from '$/client-shared'

const Settings = () => {
  const modalsContext = useModalsContext()
  const isOpen = modalsContext.state.isSettingsOpened

  const closeSettings = () => {
    modalsContext.update({
      isSettingsOpened: false
    })
  }

  return <Modal isOpen={isOpen} onClose={closeSettings}>
    _settings_
  </Modal>
}


export default Settings
