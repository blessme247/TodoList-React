import React from "react";
import "./todolist.css";

// export const TodoTextInput = ({todotext, setTodoText}) => {  // Without Formik
//   return (
//     <React.Fragment>
//       <input
//         type="text"
//         placeholder="Add new"
//         className="text-box"
//         value={todotext}
//         onChange={(e)=> setTodoText(e.target.value)}
//       />
//     </React.Fragment>
//   );
// };


export const TodoTextInput = ({name, value, handleChange}) => {  // With Formik
  return (
    <React.Fragment>
      <input
        name={name}
        type="text"
        placeholder="Add new"
        className="text-box"
        value={value}
        onChange={handleChange}  
      />
    </React.Fragment>
  );
};
