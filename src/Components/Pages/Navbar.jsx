import React from 'react'
import { Link } from 'react-router-dom'
import './todolist.css' 

export const Navbar = () => {
  return (
    <React.Fragment>
      <nav className= "nav-section" >
        <Link to = "/"  className="home active">Home</Link>
        <br/>
        <span className="menu-divide">||</span>
        <br/> <br/>
        <Link to = "" className="about-page">About</Link>
    </nav>
        </React.Fragment>
  )
}