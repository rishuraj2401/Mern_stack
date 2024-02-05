import React from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
const Todo = () => {
    const todos= useSelector(state=> state.todos);
    const dispatch=useDispatch()
    return (
        <>
         {
            todos.map((todo)=>
            <><li>{todo.text}</li>
            <button type='submit' onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button></>)
         }
        </>
    );
}

export default Todo;
