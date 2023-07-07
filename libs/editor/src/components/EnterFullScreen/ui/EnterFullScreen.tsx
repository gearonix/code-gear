import { FC } from 'react'

import { useFullScreen } from '@/components/EnterFullScreen/hooks/useFullScreen'


const EnterFullScreen = () => {
  const toggle = useFullScreen()
  return <div>
    <button onClick={toggle}>toggle fullscreen</button>
  </div>
}


export default EnterFullScreen
