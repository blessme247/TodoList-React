import React, { useState , useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

import TodoListHeader from './TodoListHeader';
import DonutSpinner from '../Loader/DonutSpinner';
import axiosInstance from '../../Helper/AxiosConfig/axiosConfig';


const TodoDetails = () => {
    const {todo_id} = useParams(); //useParams is used to enable dynamic routing
    
    const [todo, setTodo] = useState({})
    const [isFetching, setFetching] = useState(true)
    // console.log(todo)

    const fetchTodos = async () => {
        const response = await axiosInstance.get(`/todos/${todo_id}`)
        // Sometimes, response.data comes in form of an empty object if there is no data inside/ or
        //  an error occurs from the client, hence we only want to set todo when when the array is not empty
        if (response.data.length > 0) {
            setTodo(...response.data)
            setFetching(false)
        }
        // ELse we set it to an empty object
        else {
            setTodo(null)
            setFetching(false)
        }
      }
    
      useEffect(()=>{
        fetchTodos();
       
      }, [])

      const {title, id, isCompleted} = todo || {}; //if no todo exists, return an empty object to prevent the app from crashing

    return (


        <React.Fragment>

        <TodoListHeader />

        {isFetching &&  <DonutSpinner/> } 

        {/* if data is not fetching and todo exists, then return the todo details */}
        {!isFetching && 
            todo &&
            (

            <div style={{margin:"2rem"}}>
            <h2>Title: {title.toUpperCase()}</h2>
            <h3>ID: {id.toUpperCase()}</h3>
            <p>Status: {isCompleted ? "Done" : "Pending"}</p>
            </div>
        )}

        {!isFetching && todo === null && (
            <>
            <pre>Todo with ID: {todo_id} does not exist!</pre>
            </>
        )}
        

        </React.Fragment>
    )
}

export default TodoDetails;