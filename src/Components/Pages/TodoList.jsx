import React from "react";
import { ListSection } from "./ListSection";
import "./todolist.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Input } from "./Input";
import { Footer } from "./Footer";
import { TodoListContainer } from "./TodoListContainer";

export const TodoList = ({todos, settodos}) => {
  // const [greetingText, setGreetingText] = useState("Hello")
  return (
    <div>
      <header>
        <h1>TodoList</h1>
      </header>

      <Navbar />

      <Input todos={todos} settodos={settodos}/>

    <> 
        {todos.map((todo)=>{
            return <ListSection todo={todo} key={todo._id} todos={todos} settodos={settodos}/>
        } )}
      
      </>
      {/* <TodoListContainer /> */}
      <Footer />
    </div>
  );
};

export default TodoList;
