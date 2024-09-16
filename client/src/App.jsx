import Home from './components/Home'
// import Notes from './components/Notes'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
