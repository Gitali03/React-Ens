import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';

function Todo({todo, onRemoveTodo}) {
  const {id, content} = todo;
  const removeTodo = ()=>{
    onRemoveTodo(id);
  }
  return (
    <div style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'space-between', border: '1px solid lightgrey', padding:'10px', borderRadius:'20px', marginTop:'10px' 

    }}>
        <div> 
        {content}
        </div>
        <div>
        <IoIosRemoveCircle className='todoicons' onClick={removeTodo}/>
        <FaEdit className='todoicons' />
        </div>
    </div>
  )
}

export default Todo