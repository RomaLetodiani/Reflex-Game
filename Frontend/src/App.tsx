import { RouterProvider } from 'react-router-dom'
import AppWrapper from './AppWrapper'
import Router from './Router/Router'
const App = () => {
  return (
    <AppWrapper>
      <RouterProvider router={Router} />
    </AppWrapper>
  )
}

export default App
