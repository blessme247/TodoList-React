import { Route, Routes } from 'react-router-dom';
import TodoList from './Components/Pages/TodoList';
import './App.css';
import { useState } from "react";
import PlayGroundForm from './Components/Pages/PlayGroundForm';
import FormikLogin from './Components/Pages/Login';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <Routes>
      {/* <TodoList todos={todos} settodos={setTodos}/> */}
      <Route path="/" element={<TodoList todos={todos} settodos={setTodos} />} />
      <Route path="/playground" element={<PlayGroundForm />} />
      <Route path="/login" element={<FormikLogin />} />
      {/* <PlayGroundForm /> */}
    </Routes>
  );
  
}

export default App;
