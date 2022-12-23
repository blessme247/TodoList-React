// External Imports
import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

// Internal Imports
import "./todolist.css";
import { TodoTextInput } from "./TodoTextInput";
import { toast } from "react-toastify";

export const EditForm = (props) => {
  const { todo, todos, settodos, todoToEdit, fetchTodos,  } = props;
  const {id, title, isCompleted} = todoToEdit;

  const initialValues= {
    title: todoToEdit.title,
    id: todoToEdit.id,
    isCompleted: todoToEdit.isCompleted
  }


//Update todo function
  const  updateTodo = async (id, title) => {
    const response = await axios
      .post(`http://localhost:8080/edit`,{id, title}) // Update from DB first
      .then((response) => {
        console.log(todoToEdit, 'update')
        fetchTodos().then(()=>{
            toast.success("Todo Updated Successfully", {
              position: "top-center",
            });
        })
        return response;
      })
      .catch((error) => {
        toast.error("Unable to update Todo", { position: "top-center" });
      });
    }

  


  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log('making request')
          const {id, title } = values;
          setSubmitting(true);
          updateTodo(id, title)
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
        }) => (
          <>
            <form onSubmit={handleSubmit}>
              <section className="add-section">
                {/* <TodoTextInput todotext={todoText} setTodoText={setTodoText} />    Without Formik */}
                <TodoTextInput
                  name="title"
                  handleChange={handleChange}
                  value={values.title}
                />
                
                  <button className="update-btn" type="button" onClick={handleSubmit}>Update</button>
                
              </section>
            </form>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};
