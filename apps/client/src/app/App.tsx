import { RouterProvider } from './providers/Router'
import { StoreProvider } from './providers/Store'

function App() {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  )
}

export default App
