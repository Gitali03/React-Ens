import { useState } from 'react'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import Todolist from './components/Todolist'

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
    
  }


 console.log(todos);

  return (
    <div className='App'>
      <div className='main'>
        <ToDoCreate onCreateTodo={createTodo}/>
        <Todolist todos={todos} onRemoveTodo= {removeTodo}/>
      </div>
  
    </div>
  )  
}

export default App
