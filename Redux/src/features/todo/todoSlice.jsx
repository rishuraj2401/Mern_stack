import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState ={
    todos: [{id:1, text:"hello world"}]
}
export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
           
                const todo ={
                    id: nanoid(),
                    text: action.payload
                }
            state.todos.push(todo);
        },
        removeTodo:(state,action )=>{
            state.todos= state.todos.filter((todo)=>
                todo.id!==action.payload
            )
            console.log(state.todos);
        },
        updateTodo: (state,action)=>{
            console.log(action.payload);
            // state.todos.map((t)=>t.id)
        //   var a=[];a=  state.todos.filter((todo)=>todo.id===action.payload)
            var a= state.todos.find((id)=>id.id===action.payload.id).text=action.payload.text;
            console.log(a);
        }
    }
});
export const {addTodo, removeTodo, updateTodo} =todoSlice.actions
export  const todoReducer= todoSlice.reducer