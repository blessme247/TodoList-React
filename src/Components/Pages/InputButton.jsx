import React from 'react'
import './todolist.css' 

const InputButton = ({classname, func}) => {
  return <div onClick={()=>func()} className= {classname} > </div> 
}

export default InputButton; 