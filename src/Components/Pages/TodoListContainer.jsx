import React from "react";
import "./todolist.css";
import { ListSection } from "./ListSection";

export const TodoListContainer = ({todos}) => {
  return (
    <React.Fragment>
                {todos.map((todo)=>{
            // return <ListSection todo={todo} key={todo._id}/>
        } )}
    </React.Fragment>
  );
};
