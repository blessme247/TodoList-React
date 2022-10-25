import React from 'react'
import './todolist.css' 

export const ClassTest = (props) => {
    const {text, redColor, blueColor} = props;
  return (
    <React.Fragment>
        <h1 className={`${redColor && 'red-color'} ${blueColor && 'blue-color'}` }>{text || "Pass a text prop"}</h1>
        </React.Fragment>
  )
}

 {/* <ClassTest text={greetingText}  blueColor/> */}
    {/* <button onClick={()=> setGreetingText("Welcome to New Money") }>Change Greeting Text</button> */}