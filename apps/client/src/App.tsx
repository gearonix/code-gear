import { Logo } from './logo'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <Logo class={styles.logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://github.com/preactjs/preact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </header>
    </div>
  )
}

export default App
