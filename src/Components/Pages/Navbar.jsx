import React from 'react'
import './todolist.css' 

export const Navbar = () => {
  return (
    <React.Fragment>
      <nav className= "nav-section" >
        <a href="#index.html" className="home active">Home</a>
        <br/>
        <span className="menu-divide">||</span>
        <br/> <br/>
        <a href="#about.html" className="about-page">About</a>
    </nav>
        </React.Fragment>
  )
}