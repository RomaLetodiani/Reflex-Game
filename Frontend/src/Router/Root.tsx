import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Root
