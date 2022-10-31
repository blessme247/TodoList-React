import React, { useState , useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

import TodoListHeader from './TodoListHeader';


const TodoDetails = () => {
    const todo_id = useParams();
    const [todo, setTodo] = useState({})
    console.log(todo)

    const fetchTodos = async () => {
        const response = await axios.get(`http://localhost:8080/todos/${todo_id}`)
        console.log(response)
        // setTodo(...response.data)
        // setIsLoading(false)
      }
    
      useEffect(()=>{
        fetchTodos();
       
      }, [])

    const {title, id, isCompleted} = todo;

    return (
        <>
        <TodoListHeader />
         <h2>{title}</h2>
         <h3>{id}</h3>
         <p>{isCompleted ? "Done" : "Pending"}</p>
        </>
    )
}

export default TodoDetails;