import express from 'express'
import { abc, func } from './inter';
const app=express();
app.get("/",(req,res)=>{
    res.send("hi from server1")
})
const ob: abc ={
    a:"heyy",
    b:78
}
func<number, number>(ob.b,ob.b)  
app.listen(8081, ()=>console.log("running2"))