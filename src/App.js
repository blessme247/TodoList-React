import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import TodoList from './Components/Pages/TodoList';
import './App.css';
import { useEffect, useState } from "react";
import PlayGroundForm from './Components/Pages/PlayGroundForm';
import FormikLogin from './Components/Pages/Login';
import axios from 'axios'
import TodoDetails from './Components/Pages/TodoDetails';

function App() {

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/todos")

    setTodos(response.data.data)
    setIsLoading(false)
  }


  
  useEffect(()=>{
    console.log("Load and Update when todos updates")
    
    fetchTodos();
   

  }, [])

  return (
    <Routes>
      {/* <TodoList todos={todos} settodos={setTodos}/> */}
      <Route path="/" element={<TodoList isLoading={isLoading} todos={todos} settodos={setTodos} />} />
      <Route path=":todo_id" element = {<TodoDetails  todos={todos}/>} />
      <Route path="/playground" element={<PlayGroundForm />} />
      <Route path="/login" element={<FormikLogin />} />
      {/* <PlayGroundForm /> */}
    </Routes>
  );
  
}

export default App;
