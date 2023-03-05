import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Contact Manager</h1>
      <nav>
        <NavLink to='/'>Add Contact</NavLink>
        <NavLink to='/list'>Contacts List</NavLink>
      </nav>
    </header>
  )
}

export default Header
