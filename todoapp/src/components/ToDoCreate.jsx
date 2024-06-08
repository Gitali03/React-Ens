import React, {useState} from 'react'
import '../App.css';

function toDoCreate({onCreateTodo}) {
  const [newTodo, setNewTodo] =useState('');
  const clearInput = ()=>{
    setNewTodo('');
  }
  const createTodo = ()=>{
    if(!newTodo) return;
    const request = {
      id: Math.floor(Math.random()*99999999999),
      content:newTodo
    }
    onCreateTodo(request)
    clearInput()
  }
  return (
    <div className='todocreate'>
        <input 
        value = {newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        
        className='todoinput' type="text" placeholder='Todo giriniz' />
        <button onClick={createTodo} className='todobutton'>Todo Oluştur</button>
    </div>
  )
}

export default toDoCreate