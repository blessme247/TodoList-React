import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoActionButton from "./TodoActionButton";
import { useParams } from "react-router-dom";
import "./todolist.css";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteConfirmation from "../Modal/DeleteConfirmation";


export const ListSection = (props) => {
  const { todo_id } = useParams();
  const { todo, todos, settodos, fetchTodos, setisDeleting, setTodoToDelete } = props;
  const { id, title, isCompleted} = todo; 
  console.log(props);

  const [show, setShow] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

//   const [isDeleting, setisDeleting] = useState(false)
//   const [todoToDelete, setTodoToDelete] = useState(null)

  const handleDelete = ()=> {
    setisDeleting(true)
    setTodoToDelete(id)
  }


  //We don't need to pass a parameter here because the deleteTodo function is being created each time we are mapping and returning the Listsection component which has access to the id
  // FIRST Deletion Method
  // async function deleteTodo() {

  //     try {
  //         const response = await axios.post(`http://localhost:8080/delete/${id}`) // Delete from DB First

  //     const updatedTodos = todos.filter((todo)=> todo.id !== id) // then Delete from state
  //     settodos(updatedTodos) // Finally, Update State
  //     } catch (error) {
  //         console.log(error)
  //     }

  // }

  // SECOND Deletion Method using .then
  // The .then method is asynchronous by default which  doesn't need async await keywords

  // function deleteTodo() {
  //    const response = axios.post(`http://localhost:8080/delete/${id}`) // Delete from DB first
  //     .then((response)=> {
  //         const updatedTodos = todos.filter((todo)=> todo.id !== id) // then Delete from state
  //         settodos(updatedTodos) // Finally, Update State...Note: Since the backend is already helping us to delete the todo,
  //         return (response)      // it is not advisable to use the filter method. The filter method could be very expensive when we have large data.
  //     })
  //     .catch((error)=>{
  //         console.log(error)
  //     })

  //     return response;
  // }

  // THIRD Deletion Method
  // SECOND Deletion Method using .then
  // The .then method is asynchronous by default which  doesn't need async await keywords

 
  // Toggle Complete
  function toggleComplete() {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        setIsComplete(!isComplete);
        return todo;
      }
      return todo;
    });
    settodos(updatedTodos);
  }

  //Edit todo
  function editMode() {
    const todoToEdit = todos.find((todo) => todo.id === id);
    {
      // show ? <button className="add-btn" onClick={addTodo}>Add New</button> : <button className="update-btn">Update</button>
    }
  }

  return (

  
    <React.Fragment>
      <section className="list-section">
        <div className="list-items">
          <div className="item-left list-item">
            <input
              onChange={toggleComplete}
              type="checkbox"
              name="checkbox"
              id="item${id}"
            />
            <span className={isComplete ? "checked" : undefined}>{title}</span>
          </div>
          <div className="item-right">
            <Link to={`/${id}`} className="view-more-icon">
              👁️
            </Link>
            <TodoActionButton
              func={() => setShow(false)}
              classname={"edit-btn"}
              icon="✍️"
            />
            <TodoActionButton
            //   func={deleteTodo}
              func={handleDelete}
              classname={"close"}
              icon="🗑️"
            />
          </div>
        </div>
      </section>
      
    </React.Fragment>
  );
};
