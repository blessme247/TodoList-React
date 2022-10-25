import React from "react";
import "./todolist.css";

export const TodoTextInput = ({todotext, setTodoText}) => {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Add new"
        className="text-box"
        value={todotext}
        onChange={(e)=> setTodoText(e.target.value)}
      />
    </React.Fragment>
  );
};
