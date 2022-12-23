import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import './App.css';

import FormikLogin from './Components/Pages/Login';
import PlayGroundForm from './Components/Pages/PlayGroundForm';
import TodoList from './Components/Pages/TodoList';
import TodoDetails from './Components/Pages/TodoDetails';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/todos")

    setTodos(response.data.data)
    setIsLoading(false)
    // toast.success("Todos Successfully Fetched", {position: "top-center"})
  }
    //  We use useEffect to prevent the function from making continous API calls which could break the server
  useEffect(()=>{
    console.log("Load and Update when todos updates")
    
    fetchTodos();

  }, [])

  return (
    <React.Fragment >
    <ToastContainer />
    <Routes>
      {/* <TodoList todos={todos} settodos={setTodos}/> */}
      <Route path="/" element={<TodoList fetchTodos={fetchTodos} isLoading={isLoading} todos={todos} settodos={setTodos} />} />
      <Route path="/:todo_id" element = {<TodoDetails  todos={todos}/>} />
      <Route path="/playground" element={<PlayGroundForm />} />
      <Route path="/login" element={<FormikLogin />} />
      {/* <PlayGroundForm /> */}
    </Routes>
    </React.Fragment>
  );
  
}

export default App;
