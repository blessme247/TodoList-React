// External Imports
import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

// Internal Imports
import "./todolist.css";
import { TodoTextInput } from "./TodoTextInput";

export const EditForm = (props) => {
  const { todo, todos, settodos, update } = props;



  return (
    <React.Fragment>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values, { setSubmitting }) => {
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
                
                  <button className="update-btn">Update</button>
                
              </section>
            </form>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};
