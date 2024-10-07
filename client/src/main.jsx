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

//need a login/sign up page
//once logged in, user sees a create note form on the left hand side, previous notes (if any) on the left hand side, and if they want to see one not ein particular blow up, they can click on it and it will be rendered in the middle of the page

// console.log(Auth.isLoggedIn());

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
        element: <Notes />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
