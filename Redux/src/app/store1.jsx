import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/todo/todoapi";
import { todoSlice } from "../features/todo/todoSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
const server="https://bknd-psi.vercel.app/api/v1/"
 export const store1 = configureStore({
    reducer: 
    // todoSlice.reducer
    {
        [api.reducerPath]:api.reducer,
        [todoSlice.name] :todoSlice.reducer
    },
    middleware: (mid)=>mid().concat(api.middleware)
 })
setupListeners(store1.dispatch)