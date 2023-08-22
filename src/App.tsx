import { useRoutes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

import { routes } from './routes'
import LanguageSelector from './components/LanguageSelector'

const App = () => {
  const elements = useRoutes(routes)

  return (
    <>
      <LanguageSelector />
      <UserContextProvider>{elements}</UserContextProvider>
    </>
  )
}

export default App
