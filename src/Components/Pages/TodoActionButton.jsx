import React from 'react'
import './todolist.css' 

const TodoActionButton = ({classname, icon, func}) => {
  return <div onClick={()=>func()} className= {classname} > {icon} </div> 
}

export default TodoActionButton; 