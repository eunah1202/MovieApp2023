import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
  return (
    <div className='nav'>
      {/* Link to={'경로'} == a href='경로' */}
      <Link to={'/'}>HOME</Link>
      <Link to={'/about'}>ABOUT</Link>
    </div>
  )
}

export default Navigation