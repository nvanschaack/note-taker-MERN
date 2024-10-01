import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Notes from './components/Notes.jsx'
import Login from './components/Login.jsx';

//need a login/sign up page
//once logged in, user sees a create note form on the left hand side, previous notes (if any) on the left hand side, and if they want to see one not ein particular blow up, they can click on it and it will be rendered in the middle of the page

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      //if they have an account, send to login, else send to sign up page
      {
        path: 'Login',
        element: <Notes />
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
