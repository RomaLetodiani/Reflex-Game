import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import ErrorPage from '../pages/Error/ErrorPage'
import Home from '../pages/Home/Home'
import PrivateRoute from './PrivateRoute'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Auth/Login/Login'
import Register from '../pages/Auth/Register/Register'
import Game from '../pages/Game/Game'
import Stats from '../pages/Stats/Stats'
import LeaderBoard from '../pages/LeaderBoard/LeaderBoard'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/game/:mode',
        element: <Game />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
            children: [
              {
                path: '/profile/stats',
                element: <Stats />,
              },
            ],
          },
          {
            path: '/leaderboard',
            element: <LeaderBoard />,
          },
        ],
      },
    ],
  },
])

export default Router
