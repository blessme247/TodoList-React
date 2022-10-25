import TodoList from './Components/Pages/TodoList';
import './App.css';
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <TodoList todos={todos} settodos={setTodos}/>
    </div>
  );
  
}

export default App;
