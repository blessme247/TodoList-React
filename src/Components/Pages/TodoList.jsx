import React, {useState} from "react";
import { ListSection } from "./ListSection";
import "./todolist.css";
import { Input } from "./Input";
import { Footer } from "./Footer";
import TodoListHeader from "./TodoListHeader";
import DonutSpinner from "../Loader/DonutSpinner";
import { BallTriangle } from "react-loader-spinner";
import DeleteConfirmation from "../Modal/DeleteConfirmation";
import axios from "axios";
import { toast } from "react-toastify";
import { EditForm } from "./EditForm";

 const TodoList = ({ todos, settodos, isLoading, fetchTodos}) => {
  const [isDeleting, setisDeleting] = useState(false)
  const [todoToDelete, setTodoToDelete] = useState(null)

  
  const [todoToEdit, setTodoToEdit] = useState({});
  const {id, title, isCompleted } = todoToEdit;

  //State to toggle add and update buttons
  const [editMode, setEditMode] = useState(false)


  const handleCancel = (id)=> {
    setisDeleting(false)
    setTodoToDelete(id)
  }

  function deleteTodo() {
    const response = axios
      .post(`http://localhost:8080/delete/${todoToDelete}`) // Delete from DB first
      .then((response) => {
        //  window.location.reload() // FOURTH METHOD
         // FIFTH METHOD (BEST); Because it doesn't cause the UI to re-render
        fetchTodos().then(()=>{
            setisDeleting(false)
            toast.success("Todo Item Deleted Successfully", {
              position: "top-center",
            });
        })
        return response;
      })
      .catch((error) => {
        toast.error("Unable to delete Todo", { position: "top-center" });
      });

    return response;
  }

 
  return (
    <div>
      <TodoListHeader />

      {isDeleting ? <DeleteConfirmation 
      title="Deleting a Todo"
      brief="Are You sure You want to delete this todo?"
      handleDelete={deleteTodo}
      handleCancel={handleCancel}
      /> : <React.Fragment>

      {editMode ? <EditForm todoToEdit={todoToEdit} todos={todos} fetchTodos={fetchTodos}/> :  <Input todos={todos} settodos={settodos} />}
      


      <>
      {/* {isLoading && <DonutSpinner/>} */}

      {isLoading && <BallTriangle />}

        {!isLoading && todos.length < 1 && 
        (<p style={{textAlign: 'center'}}>No records found</p>)}



        {todos.map((todo) => {
          return (
            <ListSection
              setisDeleting={setisDeleting}
              setTodoToDelete={setTodoToDelete}
              fetchTodos={fetchTodos}
              todo={todo}
              key={todo.id}
              todos={todos}
              settodos={settodos}
              setTodoToEdit={setTodoToEdit}
              setEditMode={setEditMode}
            />
          );
        })}
      </>
      </React.Fragment> }
      <Footer />
    </div>
  );
};

export default TodoList;
