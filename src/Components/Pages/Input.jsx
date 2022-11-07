// External Imports
import React, { useState } from "react";
import { Formik} from "formik";
import axios from 'axios'

// Internal Imports
import "./todolist.css";
import { TodoTextInput } from "./TodoTextInput";




export const Input = ({ todo, todos, settodos}) => {
  // const [todoText, setTodoText] = useState(""); 
  // const { title} = todo;
  const [update, hideUpdate] = useState(false)

  // const addTodo = () => {     // Without Formik
  //   const newTodo = {
  //     id: crypto.randomUUID(),
  //     title: "",
  //     isCompleted: false,
  //   };
  //   // console.log(newTodo)
  //   const updatedTodos = [...todos, newTodo];
  //   settodos(updatedTodos);
  //   // localStorage.setItem(todoDBName, JSON.stringify(updatedTodos))
  // };

  const addTodo = async (title) => {
    const newTodo = { title };

    try {
      console.log("Making Request")
      const response = await axios.post("http://localhost:8080/add", {title}, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      console.log("Request Completed")
      console.log(response)
      const updatedTodos = [...todos, newTodo];
       settodos(updatedTodos);
    } catch (error) {
      
    }

  }


  return (

    <React.Fragment>

<Formik
       initialValues={{ title: '' }}
       onSubmit={(values, { setSubmitting }) => {
         addTodo(values.title);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <>
        <pre>{JSON.stringify(values, 2, null)}</pre>
         <form onSubmit={handleSubmit}>     
      <section className="add-section">
        {/* <TodoTextInput todotext={todoText} setTodoText={setTodoText} />    Without Formik */}
        <TodoTextInput name="title" handleChange={handleChange} value={values.title}/> 
        <button type="submit" className="add-btn" onClick={addTodo}>
          Add New
        </button>
       {update ? <button className="update-btn">Update</button> : null}

      </section>
         </form>
         </>
       )}
     </Formik>

    </React.Fragment>
  );
};
