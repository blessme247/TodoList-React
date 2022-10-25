import React, {useState} from 'react'
import TodoActionButton from './TodoActionButton'
import './todolist.css' 

export const ListSection = (props) => {
    const {todo, todos, settodos, buttona} = props;
    const {_id, title, isCompleted} = todo;

    const [show, setShow] = useState(true)
    const [isComplete, setIsComplete] = useState(false)


    //We don't need to pass a parameter here because the deleteTodo function is being created each time we are mapping and returning the Listsection component which has access to the id
    // Delete Todo 
    function deleteTodo() {
        const updatedTodos = todos.filter((todo)=> todo._id !== _id)
        settodos(updatedTodos)
    }

    // Toggle Complete 
    function toggleComplete() {
        const updatedTodos = todos.map((todo) => {
            if(todo._id === _id ) {
                todo.isCompleted = !todo.isCompleted;
                setIsComplete(!isComplete);
                return todo;
            } 
            return todo;
        })
        settodos(updatedTodos)
    }

     //Edit todo
     function editMode() {
       
        const todoToEdit = todos.find((todo)=> todo._id === _id)
        {
            // show ? <button className="add-btn" onClick={addTodo}>Add New</button> : <button className="update-btn">Update</button>
        }
    
    }

  return (
    <React.Fragment>
        <section className="list-section">
    <div className="list-items">
            <div className="item-left list-item">
                {/* <input onChange={()=>setIsComplete(!isComplete)} type="checkbox" name="checkbox" id="item${_id}"  /> */}
                <input onChange={toggleComplete} type="checkbox" name="checkbox" id="item${_id}"  />
                <span className={isComplete ? "checked" : undefined}>
                {title}
                </span>
            </div>
            <div className = "item-right">
                {
                    show ? <span>Here</span> : null
                }
                <TodoActionButton func={()=>setShow(false)} classname={"edit-btn"} icon="✍️"/>
                <TodoActionButton func={deleteTodo} classname={"close"} icon=" 🗑️"/>
            </div>
        </div>
     </section>
        </React.Fragment>
  )
}
