import React, {useState} from "react";
import InputButton from "./InputButton";
// import { SpanButton } from "./SpanButton";
import "./todolist.css";
import {TodoTextInput } from "./TodoTextInput"

export const Input = ({todos, settodos, button}) => {
  
  const [todoText, setTodoText] = useState("")
  // console.log(todoText)

  const addTodo = ()=> {
    const newTodo = {
      _id: crypto.randomUUID(),
      title: todoText,
      isCompleted: false,
    };
    // console.log(newTodo)
  const updatedTodos = [...todos, newTodo]; 
  settodos(updatedTodos);
  // localStorage.setItem(todoDBName, JSON.stringify(updatedTodos))
  }

  // Add user todo input to the local storage
  


  return (
    <React.Fragment>
      <section className="add-section">
        <TodoTextInput todotext={todoText} setTodoText={setTodoText}/>
        <InputButton className="add-btn" func={addTodo} />
        {/* <button className="add-btn" onClick={addTodo}>Add New</button> */}
        {/* <button className="update-btn">Update</button> */}
      </section>
    </React.Fragment>
  );
};
