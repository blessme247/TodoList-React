import React, {useState} from "react";
import { ListSection } from "./ListSection";
import "./todolist.css";
import { Input } from "./Input";
import { Footer } from "./Footer";
import TodoListHeader from "./TodoListHeader";

 const TodoList = ({ todos, settodos, isLoading }) => {
  return (
    <div>
      <TodoListHeader />

      <Input todos={todos} settodos={settodos} />

      <>
        {isLoading && <p style={{textAlign: 'center'}}>Loading</p>}

        {!isLoading && todos.length < 1 && 
        (<p style={{textAlign: 'center'}}>No records found</p>)}

        {todos.map((todo) => {
          return (
            <ListSection
              todo={todo}
              key={todo.id}
              todos={todos}
              settodos={settodos}
            />
          );
        })}
      </>
      <Footer />
    </div>
  );
};

export default TodoList;
