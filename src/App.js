import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import './App.css';

import FormikLogin from './Components/Pages/Login';
import PlayGroundForm from './Components/Pages/PlayGroundForm';
import TodoList from './Components/Pages/TodoList';
import TodoDetails from './Components/Pages/TodoDetails';

function App() {

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/todos")

    setTodos(response.data.data)
    setIsLoading(false)
  }
    //  We use useEffect to prevent the function from making continous API calls which could break the server
  useEffect(()=>{
    console.log("Load and Update when todos updates")
    
    fetchTodos();

  }, [])

  return (
    <Routes>
      {/* <TodoList todos={todos} settodos={setTodos}/> */}
      <Route path="/" element={<TodoList fetchTodos={fetchTodos} isLoading={isLoading} todos={todos} settodos={setTodos} />} />
      <Route path="/:todo_id" element = {<TodoDetails  todos={todos}/>} />
      <Route path="/playground" element={<PlayGroundForm />} />
      <Route path="/login" element={<FormikLogin />} />
      {/* <PlayGroundForm /> */}
    </Routes>
  );
  
}

export default App;
