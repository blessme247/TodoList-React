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
  const { todo, todos, settodos, fetchTodos, setisDeleting, setTodoToDelete, setEditMode, setTodoToEdit } = props;
  const { id, title, isCompleted} = todo; 
 

  const [show, setShow] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDelete = ()=> {
    setisDeleting(true)
    setTodoToDelete(id)
  }


 
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
  function editMode(todo) {
    setTodoToEdit(todo)
    setEditMode(true)
    
    
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
              func={() => editMode(todo)} 
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
