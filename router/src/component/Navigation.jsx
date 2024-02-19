//import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const navigation = () => {
  return (
    <div>
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/teacher"}>Teacher</Link>
            <Link to={"/admin"}>Admin</Link>
        </nav>
         {/* This is where the child components will be rendered */}
        <Outlet /> 
    </div>
  )
}

export default navigation