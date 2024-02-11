import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
const Todo = () => {
    const todos= useSelector(state=> state.todos);
    console.log("hey this is:",todos);
    const dispatch=useDispatch()
    return (
        <>
         {
            // todos.map((todo)=>
            // <><li>{todo.text}</li>
            // <button type='submit' onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
            // <button type='submit' onClick={()=>dispatch(updateTodo({id:todo.id, text:"rishu"}))}>Update</button>

            // </>)
         }
        </>
    );
}

export default Todo;
