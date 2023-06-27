// import { RouterProvider } from 'react-router-dom'
import { Logo } from '../logo'

import { RouterProvider } from './providers/Router'

import styles from '../App.module.css'


function App() {
  return (
    <div className={styles.App}>
      <RouterProvider />
      Root text
    </div>
  )
}

export default App
