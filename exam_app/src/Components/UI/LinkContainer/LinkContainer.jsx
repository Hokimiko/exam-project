import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkContainer = ({children, to}) => {
  return (
    <NavLink to={to}>{children}</NavLink>
  )
}

export default LinkContainer