import React, { useState } from 'react';
import { addTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';
import Todo from './Todo';
import Product from './Product';
const AddTodos = () => {
    const [input, setInput]= useState('');
const dispatch= useDispatch();
const addTodoHandler=(e)=>{
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
}

    return (
        <>
        <form onSubmit={addTodoHandler}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        </form>
        <Todo/>
        <Product/>
        </>
    );
}

export default AddTodos;
