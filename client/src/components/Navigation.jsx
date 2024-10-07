import React from 'react'
import Auth from '../utils/auth'

export default function Navigation() {

  return (
    <div>
        <button onClick={() => Auth.logout()}>Logout</button>
    </div>
  )
}
