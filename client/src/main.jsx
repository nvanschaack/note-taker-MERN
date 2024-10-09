import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Auth from './utils/auth.js'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Notes from './components/Notes.jsx'
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
       element: Auth.isLoggedIn() ?  <Home /> : <Login />
      },
      {
        path: 'Login',
        element: <Login />
      },
      {
        path: 'SignUp',
        element: <SignUp />
      },
      {
        path: 'Notes',
        element: Auth.isLoggedIn() ? <Notes /> : <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
