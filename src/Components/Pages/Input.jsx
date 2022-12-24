// External Imports
import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

// Internal Imports
import "./todolist.css";
import { TodoTextInput } from "./TodoTextInput";
import axiosInstance from "../../Helper/AxiosConfig/axiosConfig";

export const Input = (props) => {
  const { todo, todos, settodos, } = props;

  // const [todoText, setTodoText] = useState("");
  // const { title} = todo;


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
      const response = await axiosInstance.post("/add", { title });
      const updatedTodos = [...todos, newTodo];
      settodos(updatedTodos);
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
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
                  <button type="submit" style={{bacroundColor: '#2e7c59'}}  className="add-btn" onClick={addTodo}>
                    Add New
                  </button>
              </section>
            </form>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};
